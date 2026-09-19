package com.sarovar.smartstay.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/maintenance")
public class MaintenanceController {

    @GetMapping("/requests")
    @PreAuthorize("hasRole('ADMIN') or hasRole('STAFF')")
    public ResponseEntity<?> getMaintenanceRequests() {
        return ResponseEntity.ok(List.of(
            Map.of("id", 1, "room", "305", "issue", "AC not cooling", "priority", "HIGH", "status", "OPEN"),
            Map.of("id", 2, "room", "102", "issue", "Leaking tap", "priority", "LOW", "status", "IN_PROGRESS")
        ));
    }

    @PostMapping("/requests")
    @PreAuthorize("hasRole('ADMIN') or hasRole('STAFF')")
    public ResponseEntity<?> createRequest(@RequestBody Map<String, String> payload) {
        // In a real app, save to database
        return ResponseEntity.ok(Map.of("message", "Maintenance request created successfully"));
    }

    @PutMapping("/requests/{id}/status")
    @PreAuthorize("hasRole('ADMIN') or hasRole('STAFF')")
    public ResponseEntity<?> updateRequestStatus(@PathVariable Long id, @RequestBody Map<String, String> payload) {
        String status = payload.get("status");
        return ResponseEntity.ok(Map.of("message", "Request " + id + " updated to " + status));
    }
}
