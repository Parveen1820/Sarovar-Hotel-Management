package com.sarovar.smartstay.service.ai;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ChatbotService {

    @Autowired
    private OccupancyPredictionService occupancyService;

    @Autowired
    private FoodDemandPredictionService foodService;

    public String handleMessage(String message, String userRole) {
        String lowerMsg = message.toLowerCase();
        
        // Basic Intent Routing
        if (lowerMsg.contains("occupancy") || lowerMsg.contains("busy")) {
            if ("ADMIN".equals(userRole)) {
                return "The predicted weekend occupancy is " + occupancyService.predictWeekendOccupancy().getPrediction() + 
                       ". " + occupancyService.predictWeekendOccupancy().getRecommendation();
            } else {
                return "We expect to be quite busy this weekend. Please check the reservations tab for exact availability.";
            }
        }
        
        if (lowerMsg.contains("food") || lowerMsg.contains("paneer") || lowerMsg.contains("recommend")) {
            return "Based on our AI recommendations, Paneer Butter Masala is highly requested. " +
                   foodService.predictDemand("Paneer Butter Masala").getPrediction() + " expected.";
        }
        
        if (lowerMsg.contains("rooms available") || lowerMsg.contains("available categories")) {
            return "There are currently 7 available rooms for tomorrow. Available categories include Deluxe, Premium and Suite.";
        }
        
        if (lowerMsg.contains("clean") || lowerMsg.contains("housekeeping")) {
            return "Please check the Housekeeping dashboard for rooms marked DIRTY or CLEANING.";
        }
        
        return "I am the Sarovar SmartStay AI Assistant. I can help with room availability, food recommendations, and occupancy predictions. How can I assist you?";
    }
}
