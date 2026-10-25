package com.sarovar.smartstay.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class SmartDiningRequest {
    private int numberOfPeople = 2;
    private BigDecimal budget;
    private String dietaryPreference = "Vegetarian"; // Vegetarian, Non-Vegetarian, Both, Vegan
    private String cuisinePreference = "All"; // Indian, Chinese, Continental, etc.
    private String tastePreference = "Any"; // Mild, Medium, Spicy, Any
    private List<String> coursePreferences; // Starters, Main Course, Breads, Rice, Desserts, Beverages
    private List<String> allergies; // Nuts, Dairy, Gluten
    private Long seed = 0L; // Variation seed for "Try Another Combination"
}
