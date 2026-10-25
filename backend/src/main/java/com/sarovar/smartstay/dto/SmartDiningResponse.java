package com.sarovar.smartstay.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class SmartDiningResponse {
    private boolean valid;
    private String message;
    private BigDecimal customerBudget;
    private BigDecimal totalEstimatedCost;
    private BigDecimal remainingBudget;
    private BigDecimal costPerPerson;
    private int numberOfPeople;
    private List<RecommendedDish> items;
    private String recommendationSummary;
    private String allergenWarning;
    private String minBudgetNeeded;

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    public static class RecommendedDish {
        private Long id;
        private String name;
        private String category;
        private String dietaryType;
        private BigDecimal price;
        private int quantity;
        private BigDecimal subtotal;
        private String portionNote;
        private String reason;
    }
}
