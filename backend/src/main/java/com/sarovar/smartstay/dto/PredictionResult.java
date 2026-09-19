package com.sarovar.smartstay.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PredictionResult {
    private String prediction;
    private String confidence;
    private List<String> factors;
    private String explanation;
    private String recommendation;
    private String predictionDate;
    private String predictionHorizon;
}
