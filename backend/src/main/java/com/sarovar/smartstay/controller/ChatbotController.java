package com.sarovar.smartstay.controller;

import com.sarovar.smartstay.service.ai.ChatbotService;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/chatbot")
public class ChatbotController {

    @Autowired
    private ChatbotService chatbotService;

    @PostMapping("/message")
    public ResponseEntity<?> sendMessage(@RequestBody Map<String, String> payload, Authentication authentication) {
        String message = payload.get("message");
        
        String role = "CUSTOMER";
        if (authentication != null && authentication.getAuthorities() != null) {
            for (GrantedAuthority auth : authentication.getAuthorities()) {
                if (auth.getAuthority().contains("ADMIN")) {
                    role = "ADMIN";
                    break;
                } else if (auth.getAuthority().contains("STAFF")) {
                    role = "STAFF";
                    break;
                }
            }
        }

        String reply = chatbotService.handleMessage(message, role);
        return ResponseEntity.ok(Map.of(
            "reply", reply,
            "sender", "BOT"
        ));
    }
}
