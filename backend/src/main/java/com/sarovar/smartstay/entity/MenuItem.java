package com.sarovar.smartstay.entity;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "menu_items")
public class MenuItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 100)
    private String name;

    @Column(nullable = false, length = 50)
    private String category;

    @Column(nullable = false, precision = 10, scale = 2)
    private BigDecimal price;

    @Column(name = "is_available", nullable = false)
    private Boolean isAvailable = true;

    @Column(name = "dietary_type", length = 20)
    private String dietaryType = "Veg"; // Veg, Non-Veg, Vegan

    @Column(length = 50)
    private String cuisine = "Indian"; // Indian, Chinese, Continental, etc.

    @Column(name = "taste_profile", length = 30)
    private String tasteProfile = "Medium"; // Mild, Medium, Spicy

    @Column(columnDefinition = "TEXT")
    private String description;

    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;
}
