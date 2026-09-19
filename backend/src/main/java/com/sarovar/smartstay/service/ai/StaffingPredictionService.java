package com.sarovar.smartstay.service.ai;

import com.sarovar.smartstay.dto.PredictionResult;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.Arrays;

@Service
public class StaffingPredictionService {

    public PredictionResult predictStaffingNeeds() {
        PredictionResult result = new PredictionResult();
        result.setPrediction("Reception: 2, Housekeeping: 5, Restaurant: 5, Kitchen: 4");
        result.setConfidence("HIGH");
        result.setFactors(Arrays.asList(
            "Predicted occupancy: 89%",
            "Expected check-ins: 12",
            "Expected check-outs: 8",
            "Restaurant demand: High (Weekend)"
        ));
        result.setExplanation("High predicted occupancy and turnover rate requires maximum housekeeping staff. Increased restaurant demand requires full kitchen and service staff.");
        result.setRecommendation("Approve overtime for weekend shifts if current availability is insufficient.");
        result.setPredictionDate(LocalDate.now().toString());
        result.setPredictionHorizon("Next Weekend");
        
        return result;
    }
}
