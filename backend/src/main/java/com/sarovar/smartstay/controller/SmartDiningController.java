package com.sarovar.smartstay.controller;

import com.sarovar.smartstay.dto.SmartDiningRequest;
import com.sarovar.smartstay.dto.SmartDiningResponse;
import com.sarovar.smartstay.entity.MenuItem;
import com.sarovar.smartstay.service.dining.SmartDiningService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/dining")
public class SmartDiningController {

    @Autowired
    private SmartDiningService smartDiningService;

    @PostMapping("/recommend")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<SmartDiningResponse> getRecommendations(@RequestBody SmartDiningRequest request) {
        SmartDiningResponse response = smartDiningService.recommendDishes(request);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/menu")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<List<MenuItem>> getAvailableMenu() {
        List<MenuItem> menu = smartDiningService.getAvailableMenuItems();
        return ResponseEntity.ok(menu);
    }
}
