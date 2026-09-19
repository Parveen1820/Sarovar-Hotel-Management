package com.sarovar.smartstay.controller;

import com.sarovar.smartstay.service.ai.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/ai")
public class AiIntelligenceController {

    @Autowired
    private OccupancyPredictionService occupancyPredictionService;

    @Autowired
    private FoodDemandPredictionService foodDemandPredictionService;

    @Autowired
    private InventoryPredictionService inventoryPredictionService;

    @Autowired
    private StaffingPredictionService staffingPredictionService;

    @Autowired
    private ReviewSentimentService reviewSentimentService;

    @GetMapping("/occupancy-forecast")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> getOccupancyForecast() {
        return ResponseEntity.ok(occupancyPredictionService.predictWeekendOccupancy());
    }

    @GetMapping("/food-demand")
    @PreAuthorize("hasRole('ADMIN') or hasRole('STAFF')")
    public ResponseEntity<?> getFoodDemand(@RequestParam(defaultValue = "Paneer Butter Masala") String item) {
        return ResponseEntity.ok(foodDemandPredictionService.predictDemand(item));
    }

    @GetMapping("/inventory-forecast")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> getInventoryForecast(@RequestParam(defaultValue = "Paneer") String item) {
        return ResponseEntity.ok(inventoryPredictionService.predictInventoryForecast(item));
    }

    @GetMapping("/staffing-insights")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> getStaffingInsights() {
        return ResponseEntity.ok(staffingPredictionService.predictStaffingNeeds());
    }

    @PostMapping("/review-insights")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> analyzeReview(@RequestBody Map<String, String> payload) {
        return ResponseEntity.ok(reviewSentimentService.analyzeReview(payload.get("review")));
    }
}
