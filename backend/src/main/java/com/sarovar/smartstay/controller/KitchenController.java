package com.sarovar.smartstay.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/kitchen")
public class KitchenController {

    // Mock data for MVP functionality bridging
    @GetMapping("/orders")
    @PreAuthorize("hasRole('ADMIN') or hasRole('STAFF')")
    public ResponseEntity<?> getKitchenOrders() {
        return ResponseEntity.ok(List.of(
            Map.of("id", 1, "room", "205", "items", "Paneer Butter Masala x2", "status", "PREPARING", "priority", "HIGH"),
            Map.of("id", 2, "room", "102", "items", "Veg Biryani x1", "status", "CONFIRMED", "priority", "MEDIUM")
        ));
    }

    @PutMapping("/orders/{id}/status")
    @PreAuthorize("hasRole('ADMIN') or hasRole('STAFF')")
    public ResponseEntity<?> updateOrderStatus(@PathVariable Long id, @RequestBody Map<String, String> payload) {
        String status = payload.get("status");
        // In a real app, this would deduct inventory when status is SERVED
        return ResponseEntity.ok(Map.of("message", "Order " + id + " updated to " + status));
    }
}
