package com.sarovar.smartstay.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/housekeeping")
public class HousekeepingController {

    @GetMapping("/rooms")
    @PreAuthorize("hasRole('ADMIN') or hasRole('STAFF')")
    public ResponseEntity<?> getRooms() {
        return ResponseEntity.ok(List.of(
            Map.of("room", "205", "status", "DIRTY", "priority", "HIGH", "notes", "Checkout completed, new guest arriving today"),
            Map.of("room", "102", "status", "CLEANING", "priority", "MEDIUM", "notes", "")
        ));
    }

    @PutMapping("/rooms/{room}/status")
    @PreAuthorize("hasRole('ADMIN') or hasRole('STAFF')")
    public ResponseEntity<?> updateRoomStatus(@PathVariable String room, @RequestBody Map<String, String> payload) {
        String status = payload.get("status");
        return ResponseEntity.ok(Map.of("message", "Room " + room + " updated to " + status));
    }
}
