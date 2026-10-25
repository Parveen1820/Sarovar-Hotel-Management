import React, { useState } from 'react';
import { getSmartDiningRecommendations } from '../services/api';
import { sarovarMenu } from '../data/menuData';
import { 
    Utensils, Users, DollarSign, Sparkles, RefreshCw, AlertCircle, 
    CheckCircle, ShieldAlert, ChevronRight, HelpCircle, Leaf, Flame
} from 'lucide-react';
import './SmartDining.css';

const SmartDining = () => {
    // Form Inputs
    const [numberOfPeople, setNumberOfPeople] = useState(4);
    const [budget, setBudget] = useState(1500);
    const [dietaryPreference, setDietaryPreference] = useState('Vegetarian');
    const [cuisinePreference, setCuisinePreference] = useState('Indian');
    const [tastePreference, setTastePreference] = useState('Mild');
    const [allergies, setAllergies] = useState([]);
    
    // Engine State
    const [seed, setSeed] = useState(0);
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    const toggleAllergy = (allergen) => {
        setAllergies(prev => 
            prev.includes(allergen) 
                ? prev.filter(a => a !== allergen) 
                : [...prev, allergen]
        );
    };

    const handleGenerate = async (newSeed = seed) => {
        setLoading(true);
        setError(null);
        try {
            const payload = {
                numberOfPeople: parseInt(numberOfPeople, 10),
                budget: parseFloat(budget),
                dietaryPreference,
                cuisinePreference,
                tastePreference,
                allergies,
                seed: newSeed
            };

            const res = await getSmartDiningRecommendations(payload);
            setResult(res.data);
            setSeed(newSeed);
        } catch (err) {
            console.warn("Backend API unavailable, executing client-side Sarovar recommendation engine with real menu data.");
            // Client-side fallback executing the exact deterministic algorithm on real Sarovar menu
            const fallbackResult = runClientRecommendationEngine(
                parseInt(numberOfPeople, 10),
                parseFloat(budget),
                dietaryPreference,
                cuisinePreference,
                tastePreference,
                allergies,
                newSeed
            );
            setResult(fallbackResult);
            setSeed(newSeed);
        } finally {
            setLoading(false);
        }
    };

    // Client-side recommendation engine drawing from the complete 294-item Sarovar Hotel catalog
    const runClientRecommendationEngine = (people, bud, dietary, cuisine, taste, allergyList, currentSeed) => {
        // 1. Dietary Filtering
        let eligible = sarovarMenu.filter(item => {
            if (dietary === 'Vegetarian') return item.dietaryType === 'Veg' || item.dietaryType === 'Vegan';
            if (dietary === 'Vegan') return item.dietaryType === 'Vegan';
            if (dietary === 'Non-Vegetarian') {
                // Non-veg dinners prioritize non-veg for protein, with veg breads/rice/drinks/sweets
                return item.dietaryType === 'Non-Veg' || item.course === 'BREAD' || item.course === 'RICE' || item.course === 'BEVERAGE' || item.course === 'DESSERT' || item.course === 'ACCOMPANIMENT';
            }
            return true; // 'Both'
        });

        // 2. Strict Allergen Filtering
        if (allergyList.includes('Dairy')) {
            const dairyWords = ['paneer', 'butter', 'cheese', 'milk', 'ghee', 'malai', 'curd', 'lassi', 'chass', 'ice cream', 'gulab jamun', 'rabdi', 'kulfi', 'casatta', 'cream'];
            eligible = eligible.filter(i => {
                const text = `${i.name} ${i.desc} ${i.category}`.toLowerCase();
                return !dairyWords.some(w => text.includes(w));
            });
        }
        if (allergyList.includes('Gluten')) {
            const glutenWords = ['naan', 'roti', 'paratha', 'kulcha', 'bhatura', 'bread', 'toast', 'noodles', 'pasta', 'rava', 'semolina', 'maida', 'pizza'];
            eligible = eligible.filter(i => {
                const text = `${i.name} ${i.desc} ${i.category}`.toLowerCase();
                return !glutenWords.some(w => text.includes(w));
            });
        }
        if (allergyList.includes('Nuts')) {
            const nutWords = ['kaju', 'cashew', 'almond', 'badam', 'pista', 'pistachio', 'nut'];
            eligible = eligible.filter(i => {
                const text = `${i.name} ${i.desc} ${i.category}`.toLowerCase();
                return !nutWords.some(w => text.includes(w));
            });
        }

        // 3. Helper to sort candidates by cuisine and spice preferences
        const rankCandidates = (items) => {
            return [...items].sort((a, b) => {
                let scoreA = 0;
                let scoreB = 0;
                if (cuisine !== 'All') {
                    if (a.cuisine === cuisine) scoreA += 5;
                    if (b.cuisine === cuisine) scoreB += 5;
                }
                if (taste !== 'Any') {
                    if (a.taste === taste) scoreA += 3;
                    if (b.taste === taste) scoreB += 3;
                }
                return scoreB - scoreA;
            });
        };

        const offset = Math.abs(currentSeed);
        const rotate = (arr, shift) => {
            if (!arr || arr.length === 0) return [];
            const idx = shift % arr.length;
            return [...arr.slice(idx), ...arr.slice(0, idx)];
        };

        // 4. Partition into courses
        let starters = rankCandidates(eligible.filter(i => i.course === 'STARTER'));
        let mains = rankCandidates(eligible.filter(i => i.course === 'MAIN'));
        let breads = rankCandidates(eligible.filter(i => i.course === 'BREAD'));
        let rices = rankCandidates(eligible.filter(i => i.course === 'RICE'));
        let desserts = rankCandidates(eligible.filter(i => i.course === 'DESSERT'));
        let beverages = rankCandidates(eligible.filter(i => i.course === 'BEVERAGE'));

        // If specific cuisine was selected and has enough items, filter strictly to that cuisine first
        if (cuisine !== 'All') {
            const cuisineMains = mains.filter(i => i.cuisine === cuisine);
            if (cuisineMains.length > 0) mains = cuisineMains;
            const cuisineStarters = starters.filter(i => i.cuisine === cuisine);
            if (cuisineStarters.length > 0) starters = cuisineStarters;
        }

        starters = rotate(starters, offset);
        mains = rotate(mains, offset);
        breads = rotate(breads, offset);
        rices = rotate(rices, offset);
        desserts = rotate(desserts, offset);
        beverages = rotate(beverages, offset);

        const items = [];
        let totalCost = 0;

        // 5. Cuisine-specific meal architecture
        const isSouthIndian = cuisine === 'South Indian';

        if (isSouthIndian) {
            // South Indian Meal: Dosas/Uttappas as mains (1 per person), Vadas/Idlis as starters, Filter Coffee/Chass
            const mainCount = people;
            for (let i = 0; i < mainCount && mains.length > 0; i++) {
                const m = mains[i % mains.length];
                items.push({
                    id: m.id, name: m.name, category: m.category, dietaryType: m.dietaryType,
                    price: m.price, quantity: 1, subtotal: m.price,
                    portionNote: "1 serving (for 1 diner)",
                    reason: `Authentic ${m.cuisine} specialty prepared fresh on the griddle`
                });
                totalCost += m.price;
            }

            // Starters (Idli / Vada / Upma)
            if (starters.length > 0 && totalCost + starters[0].price <= bud) {
                const s = starters[0];
                const sQty = Math.max(1, Math.floor(people / 2));
                const sCost = s.price * sQty;
                if (totalCost + sCost <= bud) {
                    items.push({
                        id: s.id, name: s.name, category: s.category, dietaryType: s.dietaryType,
                        price: s.price, quantity: sQty, subtotal: sCost,
                        portionNote: `${sQty} plate${sQty > 1 ? 's' : ''} for sharing`,
                        reason: `Traditional South Indian starter served with hot sambar and fresh coconut chutney`
                    });
                    totalCost += sCost;
                }
            }

            // Beverages (South Indian Filter Coffee or Buttermilk)
            if (beverages.length > 0 && totalCost + (beverages[0].price * people) <= bud) {
                const b = beverages[0];
                const bCost = b.price * people;
                items.push({
                    id: b.id, name: b.name, category: b.category, dietaryType: b.dietaryType,
                    price: b.price, quantity: people, subtotal: bCost,
                    portionNote: `${people} cups (${b.name})`,
                    reason: `Signature beverage to complete your South Indian dining experience`
                });
                totalCost += bCost;
            }
        } else {
            // Standard Multi-Course Indian / Continental / Indo-Chinese Feast
            const mainCount = Math.max(1, Math.ceil(people / 2));
            const breadPerPerson = 2;
            const totalBread = people * breadPerPerson;
            const starterCount = people >= 4 ? 2 : (people >= 2 ? 1 : 0);
            const riceCount = people >= 3 ? 1 : 0;

            // A. Mains (Core Curries / Dishes)
            if (mains.length > 0) {
                for (let i = 0; i < mainCount; i++) {
                    const m = mains[i % mains.length];
                    items.push({
                        id: m.id, name: m.name, category: m.category, dietaryType: m.dietaryType,
                        price: m.price, quantity: 1, subtotal: m.price,
                        portionNote: "1 full portion (serves 2 diners)",
                        reason: `Core ${m.cuisine} entrée anchoring the meal`
                    });
                    totalCost += m.price;
                }
            }

            // B. Tandoori Breads (Accompaniment)
            if (breads.length > 0 && totalBread > 0) {
                const b = breads[0];
                const breadCost = b.price * totalBread;
                items.push({
                    id: b.id, name: b.name, category: b.category, dietaryType: b.dietaryType,
                    price: b.price, quantity: totalBread, subtotal: breadCost,
                    portionNote: `${totalBread} pieces (${breadPerPerson} per diner)`,
                    reason: "Fresh tandoor flatbread to accompany rich gravy dishes"
                });
                totalCost += breadCost;
            }

            // C. Starters (if budget allows)
            if (starterCount > 0 && starters.length > 0) {
                for (let i = 0; i < starterCount; i++) {
                    const s = starters[i % starters.length];
                    if (totalCost + s.price <= bud) {
                        items.push({
                            id: s.id, name: s.name, category: s.category, dietaryType: s.dietaryType,
                            price: s.price, quantity: 1, subtotal: s.price,
                            portionNote: "1 platter for table sharing",
                            reason: `Crispy ${s.cuisine} appetizer crafted to awaken your palate`
                        });
                        totalCost += s.price;
                    }
                }
            }

            // D. Rice Dishes
            if (riceCount > 0 && rices.length > 0) {
                const r = rices[0];
                if (totalCost + r.price <= bud) {
                    items.push({
                        id: r.id, name: r.name, category: r.category, dietaryType: r.dietaryType,
                        price: r.price, quantity: 1, subtotal: r.price,
                        portionNote: `1 aromatic bowl (shared by ${people} diners)`,
                        reason: "Fragrant rice dish to harmonize and round off the main course"
                    });
                    totalCost += r.price;
                }
            }

            // E. Sweets / Desserts (if surplus budget remains)
            if (desserts.length > 0 && totalCost + (desserts[0].price * 2) <= bud) {
                const d = desserts[0];
                const dQty = Math.min(2, people);
                const dCost = d.price * dQty;
                items.push({
                    id: d.id, name: d.name, category: d.category, dietaryType: d.dietaryType,
                    price: d.price, quantity: dQty, subtotal: dCost,
                    portionNote: `${dQty} portion${dQty > 1 ? 's' : ''}`,
                    reason: "Sweet dessert to conclude your dining experience on a memorable note"
                });
                totalCost += dCost;
            }

            // F. Beverages (if remaining budget accommodates)
            if (beverages.length > 0 && totalCost + (beverages[0].price * people) <= bud) {
                const bev = beverages[0];
                const bevCost = bev.price * people;
                items.push({
                    id: bev.id, name: bev.name, category: bev.category, dietaryType: bev.dietaryType,
                    price: bev.price, quantity: people, subtotal: bevCost,
                    portionNote: `${people} glasses (${bev.name})`,
                    reason: `Chilled refreshment to accompany your meal`
                });
                totalCost += bevCost;
            }
        }

        // Budget check: If total exceeds budget or is 0
        const minSensible = people * 180;
        if (totalCost > bud || totalCost === 0) {
            return {
                valid: false,
                message: `A balanced meal for ${people} ${people === 1 ? 'person' : 'people'} could not be constructed within ₹${bud}. Estimated minimum budget for a fulfilling meal is ₹${minSensible} (approx ₹180-₹250/person).`,
                minBudgetNeeded: `₹${minSensible}`,
                customerBudget: bud,
                totalEstimatedCost: 0,
                remainingBudget: bud,
                costPerPerson: 0,
                numberOfPeople: people,
                items: []
            };
        }

        return {
            valid: true,
            message: `Successfully constructed a balanced ${dietary} meal combination for ${people} diners.`,
            customerBudget: bud,
            totalEstimatedCost: totalCost,
            remainingBudget: bud - totalCost,
            costPerPerson: (totalCost / people).toFixed(2),
            numberOfPeople: people,
            items: items,
            recommendationSummary: `${items.length} items selected from Sarovar Hotel catalog matching ${dietary} preference within ₹${bud} budget.`,
            allergenWarning: allergyList.length > 0 ? `Strict exclusions applied for: ${allergyList.join(', ')}.` : null
        };
    };

    return (
        <div className="smart-dining-container">
            <header className="dining-header">
                <div className="header-badge">
                    <Sparkles size={16} />
                    <span>AI SMART DINING ASSISTANT</span>
                </div>
                <h1>Personalized Dining Recommendations</h1>
                <p>Curated dish combinations designed for your group size, dietary preference, and budget.</p>
            </header>

            <div className="dining-layout">
                {/* PREFERENCE FORM */}
                <div className="dining-form-card">
                    <div className="form-card-header">
                        <h2>Your Dining Preferences</h2>
                        <span className="subtitle">All prices come directly from the restaurant menu</span>
                    </div>

                    <div className="form-group">
                        <label>
                            <Users size={16} />
                            <span>Number of Diners</span>
                        </label>
                        <div className="counter-control">
                            <button 
                                type="button" 
                                onClick={() => setNumberOfPeople(p => Math.max(1, p - 1))}
                                disabled={numberOfPeople <= 1}
                            >
                                -
                            </button>
                            <span className="counter-val">{numberOfPeople} {numberOfPeople === 1 ? 'Person' : 'People'}</span>
                            <button 
                                type="button" 
                                onClick={() => setNumberOfPeople(p => p + 1)}
                            >
                                +
                            </button>
                        </div>
                    </div>

                    <div className="form-group">
                        <label>
                            <DollarSign size={16} />
                            <span>Total Food Budget (₹ INR)</span>
                        </label>
                        <div className="input-with-symbol">
                            <span className="currency-prefix">₹</span>
                            <input 
                                type="number" 
                                min="100" 
                                step="50"
                                value={budget} 
                                onChange={(e) => setBudget(Math.max(0, Number(e.target.value)))}
                                placeholder="1500"
                            />
                        </div>
                        <span className="field-hint">Budget covers food dishes. Approx ₹250-₹400/person recommended.</span>
                    </div>

                    <div className="form-group">
                        <label>
                            <Leaf size={16} />
                            <span>Dietary Preference</span>
                        </label>
                        <div className="chips-grid">
                            {['Vegetarian', 'Non-Vegetarian', 'Both', 'Vegan'].map(d => (
                                <button
                                    key={d}
                                    type="button"
                                    className={`choice-chip ${dietaryPreference === d ? 'active' : ''}`}
                                    onClick={() => setDietaryPreference(d)}
                                >
                                    {d}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group flex-1">
                            <label>Cuisine Preference</label>
                            <select 
                                value={cuisinePreference} 
                                onChange={(e) => setCuisinePreference(e.target.value)}
                            >
                                <option value="All">All Cuisines</option>
                                <option value="Indian">Indian / North Indian</option>
                                <option value="South Indian">South Indian</option>
                                <option value="Chinese">Indo-Chinese</option>
                                <option value="Continental">Continental</option>
                            </select>
                        </div>

                        <div className="form-group flex-1">
                            <label>
                                <Flame size={14} />
                                <span>Spice Level</span>
                            </label>
                            <select 
                                value={tastePreference} 
                                onChange={(e) => setTastePreference(e.target.value)}
                            >
                                <option value="Any">Any Spice</option>
                                <option value="Mild">Mild</option>
                                <option value="Medium">Medium</option>
                                <option value="Spicy">Spicy</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-group">
                        <label>
                            <ShieldAlert size={14} />
                            <span>Allergies & Dietary Restrictions</span>
                        </label>
                        <div className="allergies-list">
                            {[
                                { key: 'Dairy', label: 'Dairy / Lactose Free' },
                                { key: 'Gluten', label: 'Gluten Free' },
                                { key: 'Nuts', label: 'Nut Free' }
                            ].map(item => (
                                <label key={item.key} className="checkbox-pill">
                                    <input 
                                        type="checkbox" 
                                        checked={allergies.includes(item.key)}
                                        onChange={() => toggleAllergy(item.key)}
                                    />
                                    <span>{item.label}</span>
                                </label>
                            ))}
                        </div>
                        <span className="field-hint allergen-notice">
                            Strict hard exclusions applied. Always notify server at table for severe allergies.
                        </span>
                    </div>

                    <button 
                        className="generate-button"
                        onClick={() => handleGenerate(0)}
                        disabled={loading}
                    >
                        {loading ? <RefreshCw className="spin" size={18} /> : <Utensils size={18} />}
                        <span>{loading ? "Calculating Best Dishes..." : "Generate Smart Recommendations"}</span>
                    </button>
                </div>

                {/* RESULTS PANEL */}
                <div className="dining-results-card">
                    {!result && !loading && (
                        <div className="empty-results-state">
                            <Utensils size={48} className="empty-icon" />
                            <h3>Ready to Plan Your Meal</h3>
                            <p>Select your group size, budget, and dietary preferences to generate an optimal, budget-aware combination of dishes.</p>
                            <button 
                                className="secondary-button"
                                onClick={() => handleGenerate(0)}
                            >
                                Try Example: Family of 4 (₹1,500)
                            </button>
                        </div>
                    )}

                    {loading && (
                        <div className="loading-results-state">
                            <RefreshCw className="spin" size={36} />
                            <h4>Optimizing Dish Combinations...</h4>
                            <p>Filtering by dietary preferences, calculating portions, and balancing courses within budget.</p>
                        </div>
                    )}

                    {result && !loading && (
                        <div className="recommendations-view">
                            {result.valid ? (
                                <>
                                    {/* BILL SUMMARY STRIP */}
                                    <div className="bill-summary-bar">
                                        <div className="summary-metric">
                                            <span className="label">Total Bill</span>
                                            <span className="val highlight">₹{result.totalEstimatedCost}</span>
                                        </div>
                                        <div className="summary-metric">
                                            <span className="label">Customer Budget</span>
                                            <span className="val">₹{result.customerBudget}</span>
                                        </div>
                                        <div className="summary-metric">
                                            <span className="label">Remaining Surplus</span>
                                            <span className="val surplus">₹{result.remainingBudget}</span>
                                        </div>
                                        <div className="summary-metric">
                                            <span className="label">Cost / Person</span>
                                            <span className="val">₹{result.costPerPerson}</span>
                                        </div>
                                    </div>

                                    {result.allergenWarning && (
                                        <div className="allergen-alert-box">
                                            <ShieldAlert size={16} />
                                            <span>{result.allergenWarning}</span>
                                        </div>
                                    )}

                                    {/* DISHES LIST */}
                                    <div className="recommended-dishes-list">
                                        <h3>Recommended Combination ({result.items?.length} Dishes)</h3>
                                        <div className="dishes-table">
                                            {result.items?.map((item, idx) => (
                                                <div key={idx} className="dish-card-item">
                                                    <div className="dish-indicator">
                                                        <span className={`diet-dot ${item.dietaryType?.toLowerCase() === 'non-veg' ? 'non-veg' : 'veg'}`}></span>
                                                    </div>
                                                    <div className="dish-details">
                                                        <div className="dish-name-row">
                                                            <h4>{item.name}</h4>
                                                            <span className="dish-category-tag">{item.category}</span>
                                                        </div>
                                                        <p className="dish-reason">{item.reason}</p>
                                                        <span className="dish-portion-tag">Portion: {item.portionNote}</span>
                                                    </div>
                                                    <div className="dish-pricing">
                                                        <span className="unit-price">₹{item.price} × {item.quantity}</span>
                                                        <span className="item-subtotal">₹{item.subtotal}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* REGENERATE ACTION */}
                                    <div className="results-actions-bar">
                                        <p className="summary-note">{result.recommendationSummary}</p>
                                        <button 
                                            className="regenerate-button"
                                            onClick={() => handleGenerate(seed + 1)}
                                            title="Run algorithm with alternative eligible dishes"
                                        >
                                            <RefreshCw size={16} />
                                            <span>Try Different Combination</span>
                                        </button>
                                    </div>
                                </>
                            ) : (
                                <div className="budget-error-card">
                                    <AlertCircle size={40} className="error-icon" />
                                    <h3>Budget Insufficient for Group Size</h3>
                                    <p className="error-message">{result.message}</p>
                                    <div className="suggestion-box">
                                        <strong>Suggested Minimum Budget:</strong>
                                        <span>{result.minBudgetNeeded} for {numberOfPeople} diners</span>
                                    </div>
                                    <button 
                                        className="primary-button adjust-btn"
                                        onClick={() => {
                                            const minNum = numberOfPeople * 220;
                                            setBudget(minNum);
                                        }}
                                    >
                                        Auto-Set Budget to ₹{numberOfPeople * 220} & Retry
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SmartDining;
