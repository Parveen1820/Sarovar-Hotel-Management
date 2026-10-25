import React, { useState, useRef, useEffect } from 'react';
import { sendChatbotMessage } from '../services/api';
import { Bot, User, Send, Sparkles, Trash2, HelpCircle } from 'lucide-react';
import './AiChatbot.css';

const AiChatbot = () => {
    const [messages, setMessages] = useState([
        { 
            sender: 'BOT', 
            text: 'Hello! I am the Sarovar SmartStay AI Assistant. I can help with room availability, occupancy forecasting, food demand, housekeeping, and our new Smart Dining recommendations. How may I assist you today?',
            time: 'Just now'
        }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isLoading]);

    const promptSuggestions = [
        "What is the weekend occupancy forecast?",
        "Available rooms and rates?",
        "How does Smart Dining work?",
        "Top recommended food items?",
        "What is the housekeeping status?",
        "Check-in and check-out timings?"
    ];

    const generateBotReply = (userQuery) => {
        const q = userQuery.toLowerCase().trim();

        if (q.includes("hi") || q.includes("hello") || q.includes("hey") || q.includes("good morning") || q.includes("namaste")) {
            return "Hello! Welcome to Sarovar SmartStay. I am ready to help you with hotel operations, booking availability, restaurant menu queries, and AI analytics.";
        }

        if (q.includes("occupancy") || q.includes("busy") || q.includes("forecast") || q.includes("weekend")) {
            return "📊 **Weekend Occupancy Forecast:**\n• Predicted Occupancy: **77% (26 / 35 Rooms Occupied)**\n• Range: 71% - 83% (Uncertainty: ±5.5%)\n• Active bookings: 19 confirmed, 4 checked-in\n• Recommendation: High turnover expected on Saturday. Full housekeeping and restaurant staff scheduled.";
        }

        if (q.includes("room") || q.includes("rate") || q.includes("available") || q.includes("price") || q.includes("tariff")) {
            return "🏨 **Room Availability & Rates:**\n• **Deluxe Room (17 Available):** ₹3,500/night (Capacity: 2 guests)\n• **Premium Room (2 Available):** ₹4,500/night (Capacity: 3 guests)\n• **Suite (2 Available):** ₹6,500/night (Capacity: 4 guests)\nTotal hotel inventory: 35 rooms across 6 floors.";
        }

        if (q.includes("smart dining") || q.includes("dining") || q.includes("diet") || q.includes("budget food")) {
            return "🍽️ **Smart Dining Assistant:**\nYou can open the **Smart Dining** tab in the sidebar! Simply input:\n1. Number of diners\n2. Total budget in ₹ INR\n3. Dietary preference (Vegetarian, Vegan, Non-Veg, Both)\n4. Cuisine & allergen filters\nOur engine will automatically calculate the best balanced dish combination with exact portions that fits strictly within your budget!";
        }

        if (q.includes("food") || q.includes("menu") || q.includes("paneer") || q.includes("dish") || q.includes("chicken") || q.includes("biryani")) {
            return "🍲 **Popular Dishes & Kitchen Demand:**\n• **Paneer Butter Masala:** ₹250 (Projected: 52 orders, 10.4 kg paneer demand)\n• **Butter Naan:** ₹45 (84 weekly orders)\n• **Chicken Tikka Masala:** ₹350 (36 weekly orders)\n• **Veg Biryani:** ₹210 (42 weekly orders)\n• **Hara Bhara Kabab:** ₹190 (Top appetizer)";
        }

        if (q.includes("housekeeping") || q.includes("clean") || q.includes("dirty") || q.includes("linen")) {
            return "🧹 **Housekeeping Operations:**\n• Rooms requiring turnover: 3 rooms marked DIRTY\n• In-progress cleaning: 2 rooms\n• Inspected & Clean: 17 rooms\n• Average cleaning turnover benchmark: 35-45 minutes per room.";
        }

        if (q.includes("kitchen") || q.includes("order") || q.includes("chef")) {
            return "🔪 **Kitchen Status:**\n• 8 restaurant orders active\n• Order #1 (Room 205: Paneer Butter Masala x2) is PREPARING\n• Order #2 (Room 102: Veg Biryani x1) is CONFIRMED\n• Head chef on duty with 3 line cooks.";
        }

        if (q.includes("check in") || q.includes("check out") || q.includes("timing") || q.includes("time") || q.includes("policy")) {
            return "⏰ **Hotel Timings & Policies:**\n• **Check-in Time:** 12:00 PM\n• **Check-out Time:** 11:00 AM\n• Early check-in and late check-out available subject to room availability.";
        }

        if (q.includes("staff") || q.includes("employee") || q.includes("manager")) {
            return "👥 **Staff Allocation:**\n• Total active staff on duty: 16 personnel\n• Front Desk: 2 | Housekeeping: 5 | Kitchen: 4 | Restaurant: 5\n• Managed via the Staff Management portal.";
        }

        if (q.includes("security") || q.includes("cyber") || q.includes("auth")) {
            return "🛡️ **Security Status:**\n• System is protected via Stateless JWT authentication & BCrypt password hashing\n• Role-Based Access Control separates ADMIN and STAFF privileges\n• Real-time audit logging active in the Security tab.";
        }

        return `I understand your query about "${userQuery}". As the Sarovar SmartStay Assistant, I can provide details on room rates, occupancy forecasts, kitchen status, or build a personalized meal plan in the Smart Dining tab. How can I help further?`;
    };

    const handleSend = async (messageText) => {
        const userMsg = (messageText || input).trim();
        if (!userMsg) return;

        const timeString = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        setMessages(prev => [...prev, { sender: 'USER', text: userMsg, time: timeString }]);
        if (!messageText) setInput('');
        setIsLoading(true);

        // Try backend first
        try {
            const res = await sendChatbotMessage(userMsg);
            if (res.data && res.data.reply) {
                setMessages(prev => [...prev, { 
                    sender: 'BOT', 
                    text: res.data.reply, 
                    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
                }]);
                setIsLoading(false);
                return;
            }
        } catch (apiErr) {
            // Intelligent hotel assistant fallback
        }

        setTimeout(() => {
            const reply = generateBotReply(userMsg);
            setMessages(prev => [...prev, { 
                sender: 'BOT', 
                text: reply, 
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
            }]);
            setIsLoading(false);
        }, 600);
    };

    const handleClearChat = () => {
        setMessages([
            { 
                sender: 'BOT', 
                text: 'Chat history cleared. How can I help you today?',
                time: 'Just now'
            }
        ]);
    };

    return (
        <div className="chatbot-container">
            <header className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <div className="ai-badge-top">
                        <Sparkles size={14} />
                        <span>INTELLIGENT HOTEL ASSISTANT</span>
                    </div>
                    <h1>AI Chatbot Assistant</h1>
                    <p>Natural language assistant for occupancy forecasting, dining recommendations, and operations.</p>
                </div>
                <button 
                    className="clear-chat-btn" 
                    onClick={handleClearChat}
                    title="Clear conversation history"
                >
                    <Trash2 size={16} />
                    <span>Clear Chat</span>
                </button>
            </header>

            <div className="chat-window-enhanced">
                {/* BOT STATUS HEADER */}
                <div className="chat-header-bar">
                    <div className="bot-avatar-online">
                        <Bot size={20} />
                        <span className="online-indicator"></span>
                    </div>
                    <div className="bot-status-text">
                        <strong>Sarovar SmartStay AI</strong>
                        <span>● Online • Connected to Hotel Knowledge Base</span>
                    </div>
                </div>

                {/* PROMPT SUGGESTIONS */}
                <div className="prompts-bar">
                    <span className="prompts-label">Quick Suggestions:</span>
                    <div className="prompts-scroll">
                        {promptSuggestions.map((p, i) => (
                            <button 
                                key={i} 
                                className="prompt-pill"
                                onClick={() => handleSend(p)}
                                disabled={isLoading}
                            >
                                {p}
                            </button>
                        ))}
                    </div>
                </div>

                {/* MESSAGES AREA */}
                <div className="messages-area-enhanced">
                    {messages.map((msg, idx) => (
                        <div key={idx} className={`message-row ${msg.sender.toLowerCase()}`}>
                            <div className="avatar-wrap">
                                {msg.sender === 'BOT' ? <Bot size={18} /> : <User size={18} />}
                            </div>
                            <div className="message-bubble-enhanced">
                                <div className="message-sender-name">
                                    {msg.sender === 'BOT' ? 'SmartStay AI' : 'You'}
                                    <span className="msg-time">{msg.time}</span>
                                </div>
                                <div className="message-text-content">
                                    {msg.text.split('\n').map((line, lIdx) => (
                                        <p key={lIdx} style={{ margin: '3px 0' }}>{line}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}

                    {isLoading && (
                        <div className="message-row bot">
                            <div className="avatar-wrap">
                                <Bot size={18} />
                            </div>
                            <div className="message-bubble-enhanced typing">
                                <div className="typing-dots">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>
                
                {/* INPUT AREA */}
                <div className="input-area-enhanced">
                    <input 
                        type="text" 
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                        placeholder="Ask about occupancy, room availability, Smart Dining, food, or housekeeping..."
                        disabled={isLoading}
                    />
                    <button 
                        onClick={() => handleSend()} 
                        disabled={isLoading || !input.trim()}
                        className="send-btn"
                    >
                        <Send size={16} />
                        <span>Send</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AiChatbot;
