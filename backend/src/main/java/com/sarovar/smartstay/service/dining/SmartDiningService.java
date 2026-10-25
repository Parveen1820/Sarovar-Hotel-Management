package com.sarovar.smartstay.service.dining;

import com.sarovar.smartstay.dto.SmartDiningRequest;
import com.sarovar.smartstay.dto.SmartDiningResponse;
import com.sarovar.smartstay.dto.SmartDiningResponse.RecommendedDish;
import com.sarovar.smartstay.entity.MenuItem;
import com.sarovar.smartstay.repository.MenuItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.*;
import java.util.stream.Collectors;

@Service
public class SmartDiningService {

    @Autowired(required = false)
    private MenuItemRepository menuItemRepository;

    public SmartDiningResponse recommendDishes(SmartDiningRequest request) {
        int people = Math.max(1, request.getNumberOfPeople());
        BigDecimal budget = request.getBudget() != null ? request.getBudget() : BigDecimal.valueOf(500 * people);
        String dietary = request.getDietaryPreference() != null ? request.getDietaryPreference() : "Vegetarian";
        String cuisine = request.getCuisinePreference() != null ? request.getCuisinePreference() : "All";
        String taste = request.getTastePreference() != null ? request.getTastePreference() : "Any";
        long seed = request.getSeed() != null ? request.getSeed() : 0L;
        List<String> allergies = request.getAllergies() != null ? request.getAllergies() : Collections.emptyList();

        // 1. Fetch available menu items
        List<MenuItem> allItems = getAvailableMenuItems();

        // 2. Filter by Dietary Preference
        List<MenuItem> eligibleItems = allItems.stream()
                .filter(item -> Boolean.TRUE.equals(item.getIsAvailable()))
                .filter(item -> matchesDietary(item, dietary))
                .filter(item -> isSafeFromAllergies(item, allergies))
                .collect(Collectors.toList());

        // 3. Categorize into courses
        List<MenuItem> starters = filterByCourse(eligibleItems, "STARTER");
        List<MenuItem> mains = filterByCourse(eligibleItems, "MAIN");
        List<MenuItem> breads = filterByCourse(eligibleItems, "BREAD");
        List<MenuItem> rice = filterByCourse(eligibleItems, "RICE");
        List<MenuItem> desserts = filterByCourse(eligibleItems, "DESSERT");
        List<MenuItem> beverages = filterByCourse(eligibleItems, "BEVERAGE");

        // Sort candidates prioritizing cuisine and taste match
        Comparator<MenuItem> preferenceComparator = createPreferenceComparator(cuisine, taste, seed);
        starters.sort(preferenceComparator);
        mains.sort(preferenceComparator);
        breads.sort(preferenceComparator);
        rice.sort(preferenceComparator);
        desserts.sort(preferenceComparator);
        beverages.sort(preferenceComparator);

        // 4. Construct balanced combination within budget
        // Determine portion requirements based on group size
        int starterCount = people >= 4 ? 2 : (people >= 2 ? 1 : (budget.compareTo(BigDecimal.valueOf(400)) > 0 ? 1 : 0));
        int mainCurryCount = Math.max(1, (int) Math.ceil((double) people / 2.0));
        int breadQtyPerPerson = 2; // 2 rotis/naans per person
        int totalBreadQty = people * breadQtyPerPerson;
        boolean includeRice = people >= 3;
        int riceQty = includeRice ? Math.max(1, (int) Math.ceil((double) people / 3.0)) : 0;
        int dessertCount = (people <= 4 && budget.compareTo(BigDecimal.valueOf(people * 350)) >= 0) ? Math.min(2, people) : 0;

        List<RecommendedDish> selectedDishes = new ArrayList<>();
        BigDecimal currentCost = BigDecimal.ZERO;

        // Try candidate selections rotated by seed
        int seedOffset = (int) (Math.abs(seed) % 10);

        // A. Select Main Courses (highest priority core meal)
        if (!mains.isEmpty()) {
            for (int i = 0; i < mainCurryCount; i++) {
                MenuItem m = mains.get((i + seedOffset) % mains.size());
                int qty = 1;
                BigDecimal itemSubtotal = m.getPrice().multiply(BigDecimal.valueOf(qty));
                selectedDishes.add(new RecommendedDish(
                        m.getId(), m.getName(), m.getCategory(), m.getDietaryType(), m.getPrice(), qty,
                        itemSubtotal, "1 portion (serves 2 diners)",
                        String.format("Core %s main course to anchor the meal", m.getCuisine())
                ));
                currentCost = currentCost.add(itemSubtotal);
            }
        }

        // B. Select Breads (essential accompaniment)
        if (!breads.isEmpty() && totalBreadQty > 0) {
            MenuItem b = breads.get(seedOffset % breads.size());
            BigDecimal itemSubtotal = b.getPrice().multiply(BigDecimal.valueOf(totalBreadQty));
            selectedDishes.add(new RecommendedDish(
                    b.getId(), b.getName(), b.getCategory(), b.getDietaryType(), b.getPrice(), totalBreadQty,
                    itemSubtotal, String.format("%d pieces (%d per diner)", totalBreadQty, breadQtyPerPerson),
                    "Fresh tandoor flatbread to accompany gravy curries"
            ));
            currentCost = currentCost.add(itemSubtotal);
        }

        // C. Select Rice (if group size warrants and budget permits)
        if (includeRice && !rice.isEmpty()) {
            MenuItem r = rice.get(seedOffset % rice.size());
            BigDecimal itemSubtotal = r.getPrice().multiply(BigDecimal.valueOf(riceQty));
            if (currentCost.add(itemSubtotal).compareTo(budget) <= 0) {
                selectedDishes.add(new RecommendedDish(
                        r.getId(), r.getName(), r.getCategory(), r.getDietaryType(), r.getPrice(), riceQty,
                        itemSubtotal, String.format("%d bowl/platter (shared by %d people)", riceQty, people),
                        "Aromatic rice dish to complement curries"
                ));
                currentCost = currentCost.add(itemSubtotal);
            }
        }

        // D. Select Starters (if budget allows)
        if (starterCount > 0 && !starters.isEmpty()) {
            for (int i = 0; i < starterCount; i++) {
                MenuItem s = starters.get((i + seedOffset) % starters.size());
                BigDecimal itemSubtotal = s.getPrice().multiply(BigDecimal.ONE);
                if (currentCost.add(itemSubtotal).compareTo(budget) <= 0) {
                    selectedDishes.add(new RecommendedDish(
                            s.getId(), s.getName(), s.getCategory(), s.getDietaryType(), s.getPrice(), 1,
                            itemSubtotal, "1 platter (serves 2-3)",
                            String.format("Crispy %s appetizer to kick off dining", s.getCuisine())
                    ));
                    currentCost = currentCost.add(itemSubtotal);
                }
            }
        }

        // E. Select Desserts (if headroom remains)
        if (dessertCount > 0 && !desserts.isEmpty()) {
            MenuItem d = desserts.get(seedOffset % desserts.size());
            BigDecimal itemSubtotal = d.getPrice().multiply(BigDecimal.valueOf(dessertCount));
            if (currentCost.add(itemSubtotal).compareTo(budget) <= 0) {
                selectedDishes.add(new RecommendedDish(
                        d.getId(), d.getName(), d.getCategory(), d.getDietaryType(), d.getPrice(), dessertCount,
                        itemSubtotal, String.format("%d portion%s", dessertCount, dessertCount > 1 ? "s" : ""),
                        "Sweet closing treat"
                ));
                currentCost = currentCost.add(itemSubtotal);
            }
        }

        // 5. Evaluate if constructed meal is valid and within budget
        BigDecimal minSensibleBudget = BigDecimal.valueOf(people * 180);
        SmartDiningResponse response = new SmartDiningResponse();
        response.setCustomerBudget(budget);
        response.setNumberOfPeople(people);

        if (currentCost.compareTo(budget) > 0 || currentCost.compareTo(BigDecimal.ZERO) == 0) {
            response.setValid(false);
            response.setMessage(String.format(
                "A balanced meal for %d %s could not be constructed within ₹%s. " +
                "Estimated minimum budget for a fulfilling meal is ₹%s (approx ₹180-₹250/person).",
                people, people == 1 ? "person" : "people", budget, minSensibleBudget
            ));
            response.setMinBudgetNeeded("₹" + minSensibleBudget);
            response.setTotalEstimatedCost(BigDecimal.ZERO);
            response.setRemainingBudget(budget);
            response.setCostPerPerson(BigDecimal.ZERO);
            response.setItems(Collections.emptyList());
            return response;
        }

        BigDecimal remainingBudget = budget.subtract(currentCost);
        BigDecimal costPerPerson = currentCost.divide(BigDecimal.valueOf(people), 2, RoundingMode.HALF_UP);

        response.setValid(true);
        response.setMessage(String.format("Successfully constructed a balanced %s meal combination for %d diners.", dietary, people));
        response.setTotalEstimatedCost(currentCost);
        response.setRemainingBudget(remainingBudget);
        response.setCostPerPerson(costPerPerson);
        response.setItems(selectedDishes);
        response.setRecommendationSummary(String.format(
            "%d items selected matching %s %s preference. Total estimated bill ₹%s leaves ₹%s surplus (₹%s per person).",
            selectedDishes.size(), dietary, "All".equalsIgnoreCase(cuisine) ? "" : cuisine,
            currentCost, remainingBudget, costPerPerson
        ));

        if (!allergies.isEmpty()) {
            response.setAllergenWarning(String.format(
                "Strict exclusions applied for: %s. Please inform server at table for zero cross-contact preparation.",
                String.join(", ", allergies)
            ));
        }

        return response;
    }

    public List<MenuItem> getAvailableMenuItems() {
        if (menuItemRepository != null) {
            try {
                List<MenuItem> dbItems = menuItemRepository.findByIsAvailableTrue();
                if (dbItems != null && !dbItems.isEmpty()) {
                    return dbItems;
                }
            } catch (Exception ignored) {
            }
        }
        return getFallbackMenuCatalog();
    }

    private boolean matchesDietary(MenuItem item, String preference) {
        String type = item.getDietaryType() != null ? item.getDietaryType() : "Veg";
        if ("Vegetarian".equalsIgnoreCase(preference)) {
            return type.equalsIgnoreCase("Veg") || type.equalsIgnoreCase("Vegan");
        } else if ("Vegan".equalsIgnoreCase(preference)) {
            return type.equalsIgnoreCase("Vegan");
        } else if ("Non-Vegetarian".equalsIgnoreCase(preference)) {
            return true; // Non-veg eaters also eat breads/rice/curries
        }
        return true; // "Both"
    }

    private boolean isSafeFromAllergies(MenuItem item, List<String> allergies) {
        if (allergies == null || allergies.isEmpty()) return true;
        String name = item.getName().toLowerCase();
        String desc = item.getDescription() != null ? item.getDescription().toLowerCase() : "";

        for (String allergy : allergies) {
            String a = allergy.toLowerCase();
            if (a.contains("dairy") || a.contains("lactose")) {
                if (name.contains("paneer") || name.contains("butter") || name.contains("cheese") ||
                    name.contains("milk") || desc.contains("dairy") || desc.contains("ghee")) {
                    return false;
                }
            }
            if (a.contains("nut") || a.contains("peanut")) {
                if (name.contains("kaju") || name.contains("nut") || desc.contains("cashew") || desc.contains("almond")) {
                    return false;
                }
            }
            if (a.contains("gluten")) {
                if (name.contains("naan") || name.contains("roti") || name.contains("paratha") || desc.contains("wheat")) {
                    return false;
                }
            }
        }
        return true;
    }

    private List<MenuItem> filterByCourse(List<MenuItem> items, String course) {
        return items.stream().filter(item -> {
            String cat = item.getCategory().toUpperCase();
            String name = item.getName().toUpperCase();
            if ("STARTER".equals(course)) {
                return cat.contains("STARTER") || cat.contains("PAKODA") || cat.contains("SNACK") || cat.contains("SOUP");
            } else if ("MAIN".equals(course)) {
                return cat.contains("MAIN") || cat.contains("GRAVY") || cat.contains("PUNJABI");
            } else if ("BREAD".equals(course)) {
                return cat.contains("BREAD") || cat.contains("TANDOOR") || name.contains("NAAN") || name.contains("ROTI") || name.contains("KULCHA");
            } else if ("RICE".equals(course)) {
                return cat.contains("RICE") || cat.contains("BIRYANI");
            } else if ("DESSERT".equals(course)) {
                return cat.contains("SWEET") || cat.contains("DESSERT") || cat.contains("ICE CREAM");
            } else if ("BEVERAGE".equals(course)) {
                return cat.contains("BEVERAGE") || cat.contains("JUICE") || cat.contains("SHAKE");
            }
            return false;
        }).collect(Collectors.toList());
    }

    private Comparator<MenuItem> createPreferenceComparator(String cuisine, String taste, long seed) {
        return (a, b) -> {
            int scoreA = 0;
            int scoreB = 0;
            if (!"All".equalsIgnoreCase(cuisine)) {
                if (a.getCuisine().equalsIgnoreCase(cuisine)) scoreA += 5;
                if (b.getCuisine().equalsIgnoreCase(cuisine)) scoreB += 5;
            }
            if (!"Any".equalsIgnoreCase(taste)) {
                if (a.getTasteProfile().equalsIgnoreCase(taste)) scoreA += 3;
                if (b.getTasteProfile().equalsIgnoreCase(taste)) scoreB += 3;
            }
            return Integer.compare(scoreB, scoreA);
        };
    }

    public List<MenuItem> getFallbackMenuCatalog() {
        List<MenuItem> list = new ArrayList<>();
        list.add(createItem(1L, "Paneer Butter Masala", "Veg Gravy / Main Course", 250, "Veg", "Indian", "Mild", "Cottage cheese cubes in rich buttery tomato gravy"));
        list.add(createItem(2L, "Kadhai Paneer", "Veg Gravy / Main Course", 240, "Veg", "Indian", "Spicy", "Paneer tossed with bell peppers and roasted ground spices"));
        list.add(createItem(3L, "Veg Kolhapuri", "Veg Gravy / Main Course", 210, "Veg", "Indian", "Spicy", "Mixed seasonal vegetables in spicy Kolhapuri red gravy"));
        list.add(createItem(4L, "Dal Tadka", "Veg Gravy / Main Course", 160, "Veg", "Indian", "Medium", "Yellow lentils tempered with garlic, cumin and ghee"));
        list.add(createItem(5L, "Butter Naan", "Tandoori Breads", 45, "Veg", "Indian", "Mild", "Fresh leavened tandoor flatbread brushed with melted butter"));
        list.add(createItem(6L, "Tandoori Roti", "Tandoori Breads", 25, "Vegan", "Indian", "Mild", "Traditional whole wheat bread baked in clay oven"));
        list.add(createItem(7L, "Garlic Naan", "Tandoori Breads", 55, "Veg", "Indian", "Medium", "Tandoor bread infused with chopped roasted garlic and coriander"));
        list.add(createItem(8L, "Veg Biryani", "Special Rice Dishes", 210, "Veg", "Indian", "Medium", "Fragrant basmati rice layered with garden veggies and saffron"));
        list.add(createItem(9L, "Jeera Rice", "Special Rice Dishes", 140, "Vegan", "Indian", "Mild", "Steamed basmati rice tempered with roasted cumin seeds"));
        list.add(createItem(10L, "Hara Bhara Kabab", "Starters", 190, "Veg", "Indian", "Medium", "Crispy spinach and green pea patties served with mint chutney"));
        list.add(createItem(11L, "Veg Crispy", "Chinese Starters", 180, "Veg", "Chinese", "Spicy", "Fried crunchy vegetables tossed in sweet and tangy schezwan sauce"));
        list.add(createItem(12L, "Paneer Chilli Dry", "Chinese Starters", 220, "Veg", "Chinese", "Spicy", "Wok-tossed cottage cheese cubes with onions and green peppers"));
        list.add(createItem(13L, "Gulab Jamun (2 pcs)", "Sweets", 70, "Veg", "Indian", "Mild", "Soft golden fried milk dough dumplings soaked in rose syrup"));
        list.add(createItem(14L, "Vanilla Ice Cream", "Ice Cream", 60, "Veg", "Continental", "Mild", "Classic creamy vanilla bean scoop"));
        list.add(createItem(15L, "Chicken Tikka Masala", "Non-Veg Main Course", 350, "Non-Veg", "Indian", "Medium", "Char-grilled chicken chunks simmered in creamy spicy masala"));
        list.add(createItem(16L, "Butter Chicken", "Non-Veg Main Course", 360, "Non-Veg", "Indian", "Mild", "Tender chicken cooked in velvety tomato and butter cream gravy"));
        list.add(createItem(17L, "Chicken Biryani", "Special Rice Dishes", 280, "Non-Veg", "Indian", "Medium", "Slow-cooked dum biryani with marinated bone-in chicken"));
        list.add(createItem(18L, "Chicken Crispy", "Chinese Starters", 240, "Non-Veg", "Chinese", "Spicy", "Batter-fried chicken strips tossed in spicy red garlic sauce"));
        return list;
    }

    private MenuItem createItem(Long id, String name, String category, int price, String dietary, String cuisine, String taste, String desc) {
        MenuItem m = new MenuItem();
        m.setId(id);
        m.setName(name);
        m.setCategory(category);
        m.setPrice(BigDecimal.valueOf(price));
        m.setIsAvailable(true);
        m.setDietaryType(dietary);
        m.setCuisine(cuisine);
        m.setTasteProfile(taste);
        m.setDescription(desc);
        return m;
    }
}
