package com.sarovar.smartstay.service.ai;

import com.sarovar.smartstay.dto.PredictionResult;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.Arrays;

@Service
public class InventoryPredictionService {

    public PredictionResult predictInventoryForecast(String itemName) {
        PredictionResult result = new PredictionResult();
        
        if ("Paneer".equalsIgnoreCase(itemName)) {
            result.setPrediction("Predicted 7-day demand: 14 kg");
            result.setConfidence("MEDIUM");
            result.setFactors(Arrays.asList(
                "Current stock: 6 kg",
                "Safety stock: 3 kg",
                "Supplier lead time: 2 days",
                "Historical consumption rate"
            ));
            result.setExplanation("Current stock will fall below safety levels within 3 days based on current consumption rates and predicted high weekend occupancy.");
            result.setRecommendation("Recommended reorder: 11 kg. Risk: HIGH.");
        } else {
            result.setPrediction("Predicted 7-day demand: 5 kg");
            result.setConfidence("HIGH");
            result.setFactors(Arrays.asList(
                "Current stock: 20 kg",
                "Safety stock: 5 kg",
                "Supplier lead time: 1 day"
            ));
            result.setExplanation("Current stock is sufficient for the predicted demand.");
            result.setRecommendation("No reorder needed at this time.");
        }
        
        result.setPredictionDate(LocalDate.now().toString());
        result.setPredictionHorizon("Next 7 Days");
        
        return result;
    }
}
