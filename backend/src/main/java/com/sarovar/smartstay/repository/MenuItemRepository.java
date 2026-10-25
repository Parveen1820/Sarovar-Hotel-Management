package com.sarovar.smartstay.repository;

import com.sarovar.smartstay.entity.MenuItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface MenuItemRepository extends JpaRepository<MenuItem, Long> {
    List<MenuItem> findByIsAvailableTrue();
    List<MenuItem> findByIsAvailableTrueAndDietaryType(String dietaryType);
    List<MenuItem> findByCategory(String category);
    Optional<MenuItem> findByNameIgnoreCase(String name);
}
