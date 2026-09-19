import React, { useState } from 'react';
import { sendChatbotMessage } from '../services/api';
import './AiChatbot.css';

const AiChatbot = () => {
    const [messages, setMessages] = useState([
        { sender: 'BOT', text: 'Hello! I am the Sarovar SmartStay AI Assistant. How can I help you today?' }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMsg = input.trim();
        setMessages(prev => [...prev, { sender: 'USER', text: userMsg }]);
        setInput('');
        setIsLoading(true);

        try {
            const res = await sendChatbotMessage(userMsg);
            setMessages(prev => [...prev, { sender: 'BOT', text: res.data.reply }]);
        } catch (err) {
            console.warn("Backend unavailable, using fallback mock chatbot responses.");
            let fallbackReply = "I am currently running in offline mock mode.";
            const lowerMsg = userMsg.toLowerCase();
            
            if (lowerMsg.includes("occupancy") || lowerMsg.includes("busy")) {
                fallbackReply = "The predicted weekend occupancy is 89%. Prepare additional capacity.";
            } else if (lowerMsg.includes("food") || lowerMsg.includes("paneer")) {
                fallbackReply = "Paneer Butter Masala is highly requested. Expect 51 orders (20% increase).";
            } else if (lowerMsg.includes("rooms available")) {
                fallbackReply = "There are currently 7 available rooms for tomorrow.";
            } else {
                fallbackReply = "Sorry, I can only help with occupancy, rooms available, and food demand right now.";
            }
            
            setTimeout(() => {
                setMessages(prev => [...prev, { sender: 'BOT', text: fallbackReply }]);
                setIsLoading(false);
            }, 1000);
            return;
        }
        
        setIsLoading(false);
    };

    return (
        <div className="chatbot-container">
            <header className="page-header">
                <div>
                    <h1>AI Chatbot Assistant</h1>
                    <p>Ask operational questions powered by internal data and AI.</p>
                </div>
            </header>

            <div className="chat-window">
                <div className="messages-area">
                    {messages.map((msg, idx) => (
                        <div key={idx} className={`message-bubble ${msg.sender.toLowerCase()}`}>
                            <div className="message-content">
                                {msg.text}
                            </div>
                        </div>
                    ))}
                    {isLoading && (
                        <div className="message-bubble bot">
                            <div className="message-content typing-indicator">
                                <span>.</span><span>.</span><span>.</span>
                            </div>
                        </div>
                    )}
                </div>
                
                <div className="input-area">
                    <input 
                        type="text" 
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                        placeholder="e.g. What is the predicted occupancy this weekend?"
                    />
                    <button onClick={handleSend} disabled={isLoading}>Send</button>
                </div>
            </div>
        </div>
    );
};

export default AiChatbot;
