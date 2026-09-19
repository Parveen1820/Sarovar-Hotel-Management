-- database/02_initial_data.sql
USE sarovar_smartstay;

-- Insert Admin User (password: password123)
-- BCrypt Hash of password123
INSERT INTO users (username, password_hash, role, status) VALUES 
('admin', '$2a$10$X/wGjD7C2P6D4vK5Hj/XueS1FjGk1OqN6Q4Z5eM/U1C1H7.8N5yLq', 'ADMIN', 'ACTIVE'),
('staff', '$2a$10$X/wGjD7C2P6D4vK5Hj/XueS1FjGk1OqN6Q4Z5eM/U1C1H7.8N5yLq', 'STAFF', 'ACTIVE');

-- Insert Suppliers
INSERT INTO suppliers (name, contact_person, phone, email, category, status) VALUES 
('Fresh Farms', 'Ramesh Kumar', '9876543210', 'contact@freshfarms.in', 'VEGETABLES', 'ACTIVE'),
('Dairy Best', 'Suresh Dairy', '9876543211', 'sales@dairybest.in', 'DAIRY', 'ACTIVE'),
('Spice Route', 'Amit Spices', '9876543212', 'orders@spiceroute.in', 'GROCERY', 'ACTIVE');

-- Insert Inventory Items
INSERT INTO inventory_items (name, category, current_stock, unit, min_stock_level, supplier_lead_time_days) VALUES 
('Paneer', 'DAIRY', 10.00, 'KG', 5.00, 1),
('Tomato', 'VEGETABLES', 15.00, 'KG', 10.00, 1),
('Onion', 'VEGETABLES', 20.00, 'KG', 10.00, 1),
('Butter', 'DAIRY', 5.00, 'KG', 2.00, 2),
('Chicken', 'MEAT', 12.00, 'KG', 5.00, 1),
('Rice', 'GROCERY', 50.00, 'KG', 20.00, 3);

-- Insert Menu Items
INSERT INTO menu_items (name, category, price, is_available) VALUES 
('Paneer Butter Masala', 'MAIN COURSE', 250.00, TRUE),
('Butter Naan', 'BREADS', 40.00, TRUE),
('Chicken Tikka Masala', 'MAIN COURSE', 350.00, TRUE),
('Veg Biryani', 'RICE', 200.00, TRUE);

-- Insert Recipes
INSERT INTO recipes (menu_item_id, description) VALUES 
(1, 'Rich and creamy paneer dish'),
(2, 'Traditional tandoor flatbread with butter'),
(3, 'Spicy chicken in tomato-based sauce');

-- Insert Recipe Ingredients
-- Paneer Butter Masala
INSERT INTO recipe_ingredients (recipe_id, inventory_item_id, quantity_required) VALUES 
(1, 1, 0.20), -- 200g Paneer
(1, 2, 0.15), -- 150g Tomato
(1, 3, 0.10), -- 100g Onion
(1, 4, 0.05); -- 50g Butter

-- Chicken Tikka Masala
INSERT INTO recipe_ingredients (recipe_id, inventory_item_id, quantity_required) VALUES 
(3, 5, 0.25), -- 250g Chicken
(3, 2, 0.10), -- 100g Tomato
(3, 3, 0.10); -- 100g Onion
