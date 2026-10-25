-- database/03_smart_dining_menu.sql
-- Sarovar Hotel SmartStay: Complete 294-Item Smart Dining Menu Seeding Script
USE sarovar_smartstay;

-- Add dietary metadata columns if not present
SET @dbname = DATABASE();
SET @tablename = 'menu_items';

-- Add dietary_type
SET @columnname = 'dietary_type';
SET @preparedStatement = (SELECT IF(
  (SELECT COUNT(*) FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_SCHEMA = @dbname AND TABLE_NAME = @tablename AND COLUMN_NAME = @columnname) > 0,
  'SELECT 1',
  CONCAT('ALTER TABLE ', @tablename, ' ADD COLUMN ', @columnname, ' VARCHAR(20) DEFAULT \'Veg\'')
));
PREPARE alterIfNotExists FROM @preparedStatement;
EXECUTE alterIfNotExists;
DEALLOCATE PREPARE alterIfNotExists;

-- Add cuisine
SET @columnname = 'cuisine';
SET @preparedStatement = (SELECT IF(
  (SELECT COUNT(*) FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_SCHEMA = @dbname AND TABLE_NAME = @tablename AND COLUMN_NAME = @columnname) > 0,
  'SELECT 1',
  CONCAT('ALTER TABLE ', @tablename, ' ADD COLUMN ', @columnname, ' VARCHAR(50) DEFAULT \'Indian\'')
));
PREPARE alterIfNotExists FROM @preparedStatement;
EXECUTE alterIfNotExists;
DEALLOCATE PREPARE alterIfNotExists;

-- Add taste_profile
SET @columnname = 'taste_profile';
SET @preparedStatement = (SELECT IF(
  (SELECT COUNT(*) FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_SCHEMA = @dbname AND TABLE_NAME = @tablename AND COLUMN_NAME = @columnname) > 0,
  'SELECT 1',
  CONCAT('ALTER TABLE ', @tablename, ' ADD COLUMN ', @columnname, ' VARCHAR(30) DEFAULT \'Medium\'')
));
PREPARE alterIfNotExists FROM @preparedStatement;
EXECUTE alterIfNotExists;
DEALLOCATE PREPARE alterIfNotExists;

-- Add description
SET @columnname = 'description';
SET @preparedStatement = (SELECT IF(
  (SELECT COUNT(*) FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_SCHEMA = @dbname AND TABLE_NAME = @tablename AND COLUMN_NAME = @columnname) > 0,
  'SELECT 1',
  CONCAT('ALTER TABLE ', @tablename, ' ADD COLUMN ', @columnname, ' TEXT')
));
PREPARE alterIfNotExists FROM @preparedStatement;
EXECUTE alterIfNotExists;
DEALLOCATE PREPARE alterIfNotExists;

-- Insert all 294 Sarovar Hotel menu items
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Tea', 'Hot Beverages', 35.00, TRUE, 'Veg', 'Indian', 'Mild', 'Freshly brewed hot tea.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Tea');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Coffee (Filter)', 'Hot Beverages', 40.00, TRUE, 'Veg', 'South Indian', 'Mild', 'Traditional filter coffee.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Coffee (Filter)');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Nescafe', 'Hot Beverages', 45.00, TRUE, 'Veg', 'Continental', 'Mild', 'Hot Nescafe coffee.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Nescafe');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Milk', 'Hot Beverages', 55.00, TRUE, 'Veg', 'Indian', 'Mild', 'Fresh hot milk.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Milk');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Bisleri', 'Hot Beverages', 35.00, TRUE, 'Vegan', 'Indian', 'Mild', 'Packaged drinking water.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Bisleri');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Black Tea', 'Hot Beverages', 30.00, TRUE, 'Vegan', 'Indian', 'Mild', 'Refreshing black tea.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Black Tea');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Upma', 'South Indian / Snacks', 60.00, TRUE, 'Vegan', 'South Indian', 'Mild', 'Semolina cooked with mustard seeds and curry leaves.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Upma');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Idli', 'South Indian / Snacks', 60.00, TRUE, 'Vegan', 'South Indian', 'Mild', 'Steamed fermented rice and lentil cakes (2 pcs).'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Idli');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Idli Medu Vada', 'South Indian / Snacks', 70.00, TRUE, 'Vegan', 'South Indian', 'Mild', 'Combination of steamed idli and crispy medu vada.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Idli Medu Vada');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Medu Vada', 'South Indian / Snacks', 70.00, TRUE, 'Vegan', 'South Indian', 'Medium', 'Crispy fried lentil fritters with sambar and chutney.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Medu Vada');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Medu Vada Single', 'South Indian / Snacks', 45.00, TRUE, 'Vegan', 'South Indian', 'Medium', 'Single piece crispy medu vada with chutney.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Medu Vada Single');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Potato Vada', 'South Indian / Snacks', 55.00, TRUE, 'Vegan', 'Indian', 'Medium', 'Spiced mashed potato balls battered and deep fried.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Potato Vada');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Potato Vada Sambar', 'South Indian / Snacks', 55.00, TRUE, 'Vegan', 'Indian', 'Medium', 'Batata vada served immersed in hot tangy sambar.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Potato Vada Sambar');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Potato Vada Single', 'South Indian / Snacks', 47.00, TRUE, 'Vegan', 'Indian', 'Medium', 'Single portion batata vada.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Potato Vada Single');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Vada Usal', 'South Indian / Snacks', 75.00, TRUE, 'Vegan', 'Indian', 'Spicy', 'Potato vada topped with spicy sprouted bean usal curry.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Vada Usal');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Extra Sambar', 'South Indian / Snacks', 47.00, TRUE, 'Vegan', 'South Indian', 'Medium', 'Bowl of traditional aromatic vegetable sambar.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Extra Sambar');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Sada Dosa', 'South Indian / Snacks', 75.00, TRUE, 'Vegan', 'South Indian', 'Mild', 'Crispy thin fermented rice crepe.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Sada Dosa');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Ghee Sada Dosa', 'South Indian / Snacks', 80.00, TRUE, 'Veg', 'South Indian', 'Mild', 'Crispy dosa prepared with aromatic pure ghee.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Ghee Sada Dosa');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Masala Dosa', 'South Indian / Snacks', 90.00, TRUE, 'Vegan', 'South Indian', 'Medium', 'Crispy dosa stuffed with tempered spiced potato bhaji.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Masala Dosa');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Ghee Masala Dosa', 'South Indian / Snacks', 100.00, TRUE, 'Veg', 'South Indian', 'Medium', 'Golden ghee-roasted dosa with spiced potato filling.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Ghee Masala Dosa');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Paper Dosa', 'South Indian / Snacks', 120.00, TRUE, 'Vegan', 'South Indian', 'Mild', 'Extra thin and jumbo crispy crepe.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Paper Dosa');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Paper Masala', 'South Indian / Snacks', 130.00, TRUE, 'Vegan', 'South Indian', 'Medium', 'Jumbo crispy paper dosa filled with spiced aloo masala.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Paper Masala');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Cheese Paper Dosa', 'South Indian / Snacks', 150.00, TRUE, 'Veg', 'South Indian', 'Mild', 'Crispy thin paper dosa generously topped with cheese.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Cheese Paper Dosa');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Cheese Masala Dosa', 'South Indian / Snacks', 155.00, TRUE, 'Veg', 'South Indian', 'Medium', 'Dosa stuffed with spiced potato and melted cheddar cheese.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Cheese Masala Dosa');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Mysore Sada Dosa', 'South Indian / Snacks', 90.00, TRUE, 'Vegan', 'South Indian', 'Spicy', 'Dosa spread with spicy garlic red chilli chutney.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Mysore Sada Dosa');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Mysore Masala', 'South Indian / Snacks', 95.00, TRUE, 'Vegan', 'South Indian', 'Spicy', 'Spicy red chutney spread with potato masala filling.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Mysore Masala');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Ghee Mysore Sada', 'South Indian / Snacks', 100.00, TRUE, 'Veg', 'South Indian', 'Spicy', 'Mysore dosa cooked in rich desi ghee.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Ghee Mysore Sada');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Cheese Mysore Sada Dosa', 'South Indian / Snacks', 110.00, TRUE, 'Veg', 'South Indian', 'Medium', 'Mysore crepe with shredded cheese layer.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Cheese Mysore Sada Dosa');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Cheese Mysore Masala Dosa', 'South Indian / Snacks', 150.00, TRUE, 'Veg', 'South Indian', 'Medium', 'Mysore masala dosa loaded with gooey cheese.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Cheese Mysore Masala Dosa');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Ghee Mysore Masala', 'South Indian / Snacks', 110.00, TRUE, 'Veg', 'South Indian', 'Spicy', 'Ghee-roasted spicy Mysore dosa with potato masala.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Ghee Mysore Masala');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Rava Dosa Sada', 'South Indian / Snacks', 100.00, TRUE, 'Vegan', 'South Indian', 'Mild', 'Net-textured crispy semolina crepe.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Rava Dosa Sada');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Cheese Rava Sada Dosa', 'South Indian / Snacks', 120.00, TRUE, 'Veg', 'South Indian', 'Mild', 'Crispy semolina dosa topped with cheese.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Cheese Rava Sada Dosa');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Ghee Rava', 'South Indian / Snacks', 110.00, TRUE, 'Veg', 'South Indian', 'Mild', 'Rava dosa prepared with golden ghee.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Ghee Rava');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Ragi Rava Dosa', 'South Indian / Snacks', 95.00, TRUE, 'Vegan', 'South Indian', 'Mild', 'Nutritious finger millet and semolina dosa.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Ragi Rava Dosa');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Ragi Rava Masala', 'South Indian / Snacks', 100.00, TRUE, 'Vegan', 'South Indian', 'Medium', 'Ragi crepe with flavorful aloo masala.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Ragi Rava Masala');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Rava Masala', 'South Indian / Snacks', 110.00, TRUE, 'Vegan', 'South Indian', 'Medium', 'Semolina crepe filled with spiced potato masala.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Rava Masala');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Ghee Rava Masala', 'South Indian / Snacks', 120.00, TRUE, 'Veg', 'South Indian', 'Medium', 'Ghee-roasted semolina crepe with potato filling.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Ghee Rava Masala');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Cheese Rava Masala', 'South Indian / Snacks', 125.00, TRUE, 'Veg', 'South Indian', 'Medium', 'Rava masala dosa with shredded cheese.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Cheese Rava Masala');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Onion Rava Dosa', 'South Indian / Snacks', 125.00, TRUE, 'Vegan', 'South Indian', 'Medium', 'Crispy semolina crepe studded with finely chopped onions.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Onion Rava Dosa');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Onion Rava Masala', 'South Indian / Snacks', 130.00, TRUE, 'Vegan', 'South Indian', 'Medium', 'Onion rava crepe with potato masala filling.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Onion Rava Masala');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Ghee Onion Rava', 'South Indian / Snacks', 100.00, TRUE, 'Veg', 'South Indian', 'Medium', 'Onion semolina dosa cooked in desi ghee.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Ghee Onion Rava');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Ghee Onion Rava Masala', 'South Indian / Snacks', 110.00, TRUE, 'Veg', 'South Indian', 'Medium', 'Rich ghee onion rava with potato bhaji.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Ghee Onion Rava Masala');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Uttappa', 'South Indian / Snacks', 80.00, TRUE, 'Vegan', 'South Indian', 'Mild', 'Thick savory rice pancake.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Uttappa');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Ghee Uttappa', 'South Indian / Snacks', 85.00, TRUE, 'Veg', 'South Indian', 'Mild', 'Thick savory pancake cooked in pure ghee.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Ghee Uttappa');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Onion Uttappa', 'South Indian / Snacks', 85.00, TRUE, 'Vegan', 'South Indian', 'Medium', 'Thick pancake topped with caramelized onions.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Onion Uttappa');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Cheese Onion Uttappa', 'South Indian / Snacks', 120.00, TRUE, 'Veg', 'South Indian', 'Mild', 'Onion pancake topped with melted cheese.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Cheese Onion Uttappa');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Ghee Onion Uttappa', 'South Indian / Snacks', 90.00, TRUE, 'Veg', 'South Indian', 'Medium', 'Onion pancake prepared with aromatic ghee.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Ghee Onion Uttappa');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Tomato Uttappa', 'South Indian / Snacks', 85.00, TRUE, 'Vegan', 'South Indian', 'Mild', 'Savory pancake topped with juicy tomatoes.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Tomato Uttappa');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Ghee Tomato Uttappa', 'South Indian / Snacks', 90.00, TRUE, 'Veg', 'South Indian', 'Mild', 'Tomato pancake roasted with desi ghee.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Ghee Tomato Uttappa');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Tomato Onion Uttappa', 'South Indian / Snacks', 90.00, TRUE, 'Vegan', 'South Indian', 'Medium', 'Pancake topped with diced tomatoes and crunchy onions.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Tomato Onion Uttappa');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Tomato Omelette', 'South Indian / Snacks', 95.00, TRUE, 'Vegan', 'Indian', 'Medium', 'Vegetarian gram flour pancake with tomatoes and herbs.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Tomato Omelette');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Ghee Tomato Omelette', 'South Indian / Snacks', 100.00, TRUE, 'Veg', 'Indian', 'Medium', 'Besan tomato omelette cooked in desi ghee.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Ghee Tomato Omelette');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Idli Fry', 'South Indian / Snacks', 90.00, TRUE, 'Vegan', 'South Indian', 'Medium', 'Crispy pan-fried idli cubes tossed with mustard spices.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Idli Fry');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Butter Idli', 'South Indian / Snacks', 90.00, TRUE, 'Veg', 'South Indian', 'Mild', 'Steamed hot idlis topped with melted butter.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Butter Idli');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Veg Cutlet', 'South Indian / Snacks', 90.00, TRUE, 'Vegan', 'Indian', 'Medium', 'Crispy breadcrumbed spiced vegetable patties.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Veg Cutlet');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Punjabi Samosa', 'South Indian / Snacks', 90.00, TRUE, 'Vegan', 'Punjabi', 'Medium', 'Crispy pastry stuffed with spiced potatoes and green peas (2 pcs).'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Punjabi Samosa');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Veg Patties', 'South Indian / Snacks', 90.00, TRUE, 'Vegan', 'Indian', 'Medium', 'Flaky baked puff pastry filled with mixed vegetables.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Veg Patties');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Finger Chips', 'South Indian / Snacks', 100.00, TRUE, 'Vegan', 'Continental', 'Mild', 'Crispy golden fried potato french fries.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Finger Chips');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Puri Bhaji', 'South Indian / Snacks', 100.00, TRUE, 'Vegan', 'Indian', 'Medium', 'Puffed wheat puris served with spiced potato bhaji.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Puri Bhaji');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Puri', 'South Indian / Snacks', 45.00, TRUE, 'Vegan', 'Indian', 'Mild', 'Plate of freshly puffed whole wheat puris (4 pcs).'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Puri');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Dahi Vada', 'South Indian / Snacks', 110.00, TRUE, 'Veg', 'Indian', 'Mild', 'Lentil dumplings soaked in sweet and spiced chilled yoghurt.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Dahi Vada');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Dahi Idli', 'South Indian / Snacks', 120.00, TRUE, 'Veg', 'South Indian', 'Mild', 'Steamed idlis immersed in seasoned yoghurt with boondi.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Dahi Idli');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Misal', 'South Indian / Snacks', 95.00, TRUE, 'Vegan', 'Indian', 'Spicy', 'Fiery sprouted moth bean gravy topped with farsan.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Misal');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Dahi Misal', 'South Indian / Snacks', 95.00, TRUE, 'Veg', 'Indian', 'Medium', 'Spicy misal balanced with fresh cool yoghurt.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Dahi Misal');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Kachori', 'South Indian / Snacks', 95.00, TRUE, 'Vegan', 'Indian', 'Spicy', 'Flaky crispy round pastry filled with spiced lentils.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Kachori');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Sabudana Khichadi', 'South Indian / Snacks', 120.00, TRUE, 'Vegan', 'Indian', 'Mild', 'Tapioca pearls sauteed with crushed peanuts and potatoes.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Sabudana Khichadi');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Sabudana Vada', 'South Indian / Snacks', 95.00, TRUE, 'Vegan', 'Indian', 'Medium', 'Deep-fried crispy sago and potato patties.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Sabudana Vada');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Veg Pakoda', 'Veg Pakoda', 100.00, TRUE, 'Vegan', 'Indian', 'Medium', 'Assorted seasonal vegetables coated in spiced gram flour batter.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Veg Pakoda');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Paneer Pakoda', 'Veg Pakoda', 135.00, TRUE, 'Veg', 'Indian', 'Mild', 'Fresh cottage cheese fritters fried to golden perfection.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Paneer Pakoda');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Cheese Pakoda', 'Veg Pakoda', 135.00, TRUE, 'Veg', 'Indian', 'Mild', 'Crispy batter-fried cheddar cheese fritters.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Cheese Pakoda');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Onion Bhajia', 'Veg Pakoda', 100.00, TRUE, 'Vegan', 'Indian', 'Medium', 'Crispy sliced onion fritters seasoned with ajwain.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Onion Bhajia');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Pav Bhaji', 'Pav Bhaji', 140.00, TRUE, 'Veg', 'Indian', 'Medium', 'Spiced mashed vegetable curry served with butter-toasted pav.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Pav Bhaji');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Jain Pav Bhaji', 'Pav Bhaji', 150.00, TRUE, 'Veg', 'Indian', 'Medium', 'Special pav bhaji made without onions and garlic.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Jain Pav Bhaji');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Cheese Pav Bhaji', 'Pav Bhaji', 160.00, TRUE, 'Veg', 'Indian', 'Mild', 'Rich pav bhaji generously topped with grated processed cheese.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Cheese Pav Bhaji');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Paneer Pav Bhaji', 'Pav Bhaji', 160.00, TRUE, 'Veg', 'Indian', 'Medium', 'Pav bhaji studded with soft cottage cheese cubes.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Paneer Pav Bhaji');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Paneer Masala Pav', 'Pav Bhaji', 160.00, TRUE, 'Veg', 'Indian', 'Spicy', 'Soft pav stuffed with spicy paneer masala and butter.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Paneer Masala Pav');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Extra Pav (2 pcs)', 'Pav Bhaji', 30.00, TRUE, 'Veg', 'Indian', 'Mild', 'Pair of warm butter-toasted bread rolls.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Extra Pav (2 pcs)');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Masala Pav (2 pcs)', 'Pav Bhaji', 80.00, TRUE, 'Veg', 'Indian', 'Spicy', 'Pav pan-tossed in buttery spiced tomato gravy.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Masala Pav (2 pcs)');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Punjabi Lunch', 'Lunch Services', 183.00, TRUE, 'Veg', 'Punjabi', 'Medium', 'Full thali with 2 curries, dal, rice, rotis, salad and sweet.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Punjabi Lunch');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Lunch', 'Lunch Services', 140.00, TRUE, 'Veg', 'Indian', 'Medium', 'Standard wholesome vegetarian lunch thali.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Lunch');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Dinner', 'Lunch Services', 160.00, TRUE, 'Veg', 'Indian', 'Medium', 'Evening dinner meal with variety curries, dal and rotis.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Dinner');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Lunch with Pulav', 'Lunch Services', 180.00, TRUE, 'Veg', 'Indian', 'Medium', 'Lunch thali featuring fragrant vegetable pulav.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Lunch with Pulav');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Paneer Kadai', 'Veg Gravy / Main Course', 180.00, TRUE, 'Veg', 'Indian', 'Spicy', 'Cottage cheese and bell peppers cooked in freshly pounded kadai masala.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Paneer Kadai');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Mix Veg', 'Veg Gravy / Main Course', 140.00, TRUE, 'Vegan', 'Indian', 'Medium', 'Assorted garden vegetables in spiced onion tomato gravy.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Mix Veg');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Dum Aloo Punjabi', 'Veg Gravy / Main Course', 160.00, TRUE, 'Vegan', 'Punjabi', 'Medium', 'Baby potatoes slow-cooked in rich spiced Kashmiri style gravy.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Dum Aloo Punjabi');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Veg Hyderabadi', 'Veg Gravy / Main Course', 150.00, TRUE, 'Veg', 'Indian', 'Spicy', 'Mixed vegetables simmered in spicy spinach-infused green gravy.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Veg Hyderabadi');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Baby Corn Masala', 'Veg Gravy / Main Course', 160.00, TRUE, 'Vegan', 'Indian', 'Medium', 'Tender baby corn spears in spiced onion tomato masala.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Baby Corn Masala');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Baby Corn Mushroom Masala', 'Veg Gravy / Main Course', 160.00, TRUE, 'Vegan', 'Indian', 'Medium', 'Fresh button mushrooms and baby corn in rich masala gravy.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Baby Corn Mushroom Masala');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Veg Kotta', 'Veg Gravy / Main Course', 160.00, TRUE, 'Veg', 'Indian', 'Medium', 'Mixed vegetable dumplings simmered in savory golden gravy.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Veg Kotta');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Mushroom Kadai', 'Veg Gravy / Main Course', 160.00, TRUE, 'Vegan', 'Indian', 'Spicy', 'Wok-cooked button mushrooms with capsicum in kadai gravy.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Mushroom Kadai');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Mushroom Paneer Masala', 'Veg Gravy / Main Course', 160.00, TRUE, 'Veg', 'Indian', 'Medium', 'Hearty combination of paneer and button mushrooms in curry.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Mushroom Paneer Masala');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Mushroom Palak', 'Veg Gravy / Main Course', 160.00, TRUE, 'Vegan', 'Indian', 'Mild', 'Fresh mushrooms cooked in smooth spiced spinach puree.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Mushroom Palak');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Lasoon Methi', 'Veg Gravy / Main Course', 150.00, TRUE, 'Vegan', 'Indian', 'Medium', 'Fresh fenugreek leaves tempered with golden garlic cloves.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Lasoon Methi');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Lasoon Palak', 'Veg Gravy / Main Course', 150.00, TRUE, 'Vegan', 'Indian', 'Mild', 'Spinach puree enhanced with roasted garlic and spices.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Lasoon Palak');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Veg Raita', 'Raita', 55.00, TRUE, 'Veg', 'Indian', 'Mild', 'Chilled whipped yoghurt with cucumbers, onions and cumin.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Veg Raita');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Bundi Raita', 'Raita', 55.00, TRUE, 'Veg', 'Indian', 'Mild', 'Crispy chickpea flour pearls in seasoned cool yoghurt.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Bundi Raita');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Pineapple Raita', 'Raita', 120.00, TRUE, 'Veg', 'Indian', 'Mild', 'Sweet and tangy diced pineapples in chilled creamy yoghurt.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Pineapple Raita');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Green Salad', 'Salad', 65.00, TRUE, 'Vegan', 'Indian', 'Mild', 'Fresh sliced cucumbers, tomatoes, carrots and onions with lemon.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Green Salad');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Kakdi Salad', 'Salad', 60.00, TRUE, 'Vegan', 'Indian', 'Mild', 'Freshly sliced garden cucumbers tossed with chaat seasoning.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Kakdi Salad');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Fruit Salad', 'Salad', 90.00, TRUE, 'Vegan', 'Indian', 'Mild', 'Fresh seasonal chopped fruits tossed with honey dressing.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Fruit Salad');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Dal Khichdi', 'Special Rice Dishes', 145.00, TRUE, 'Veg', 'Indian', 'Mild', 'Comforting blend of rice and yellow lentils tempered with ghee.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Dal Khichdi');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Palak Khichdi', 'Special Rice Dishes', 145.00, TRUE, 'Veg', 'Indian', 'Mild', 'Wholesome dal khichdi infused with nutrient-rich spinach.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Palak Khichdi');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Green Peas Pulav', 'Special Rice Dishes', 150.00, TRUE, 'Vegan', 'Indian', 'Mild', 'Long-grain basmati rice cooked with sweet green peas.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Green Peas Pulav');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Biryani', 'Special Rice Dishes', 150.00, TRUE, 'Veg', 'Indian', 'Medium', 'Traditional aromatic spiced vegetable dum biryani.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Biryani');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Kashmiri Pulav', 'Special Rice Dishes', 160.00, TRUE, 'Veg', 'Indian', 'Mild', 'Sweet fragrant basmati rice garnished with dry fruits and saffron.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Kashmiri Pulav');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Kashmiri Biryani', 'Special Rice Dishes', 160.00, TRUE, 'Veg', 'Indian', 'Mild', 'Exotic layered biryani cooked with nuts, raisins and mild spices.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Kashmiri Biryani');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Paneer Pulav', 'Special Rice Dishes', 160.00, TRUE, 'Veg', 'Indian', 'Medium', 'Basmati rice tossed with sauteed cottage cheese cubes.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Paneer Pulav');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Cheese Pulav', 'Special Rice Dishes', 160.00, TRUE, 'Veg', 'Indian', 'Mild', 'Fluffy seasoned rice folded with melted cheddar cheese.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Cheese Pulav');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Paneer Biryani', 'Special Rice Dishes', 170.00, TRUE, 'Veg', 'Indian', 'Medium', 'Marinated paneer chunks layered with spiced saffron basmati rice.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Paneer Biryani');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Veg Biryani', 'Special Rice Dishes', 150.00, TRUE, 'Veg', 'Indian', 'Medium', 'Hyderabadi style vegetable biryani served with salan.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Veg Biryani');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Veg Pulav', 'Special Rice Dishes', 130.00, TRUE, 'Vegan', 'Indian', 'Mild', 'Classic steamed basmati rice with diced garden vegetables.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Veg Pulav');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Wheat Roti', 'Tandoori', 22.00, TRUE, 'Vegan', 'Indian', 'Mild', 'Whole wheat flatbread baked in clay oven.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Wheat Roti');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Butter Roti', 'Tandoori', 26.00, TRUE, 'Veg', 'Indian', 'Mild', 'Clay-oven baked whole wheat roti brushed with fresh butter.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Butter Roti');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Naan', 'Tandoori', 40.00, TRUE, 'Vegan', 'Indian', 'Mild', 'Traditional leavened white flour flatbread baked on tandoor walls.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Naan');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Butter Naan', 'Tandoori', 45.00, TRUE, 'Veg', 'Indian', 'Mild', 'Crispy-soft leavened naan topped with melted butter.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Butter Naan');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Garlic Naan', 'Tandoori', 45.00, TRUE, 'Vegan', 'Indian', 'Medium', 'Tandoor bread infused with chopped roasted garlic.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Garlic Naan');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Butter Garlic Naan', 'Tandoori', 50.00, TRUE, 'Veg', 'Indian', 'Medium', 'Roasted garlic naan brushed with golden butter.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Butter Garlic Naan');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Cheese Naan', 'Tandoori', 50.00, TRUE, 'Veg', 'Indian', 'Mild', 'Naan bread stuffed with melted cheese.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Cheese Naan');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Cheese Garlic Naan', 'Tandoori', 55.00, TRUE, 'Veg', 'Indian', 'Medium', 'Stuffed cheese naan seasoned with minced garlic and herbs.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Cheese Garlic Naan');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Paratha', 'Tandoori', 35.00, TRUE, 'Vegan', 'Indian', 'Mild', 'Layered flaky whole wheat tandoori paratha.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Paratha');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Butter Paratha', 'Tandoori', 40.00, TRUE, 'Veg', 'Indian', 'Mild', 'Crispy layered paratha coated in butter.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Butter Paratha');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Aloo Paratha', 'Tandoori', 60.00, TRUE, 'Vegan', 'Punjabi', 'Medium', 'Whole wheat flatbread stuffed with spiced potato mash.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Aloo Paratha');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Stuff Paratha', 'Tandoori', 60.00, TRUE, 'Vegan', 'Indian', 'Medium', 'Tandoori flatbread stuffed with mixed seasoned vegetables.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Stuff Paratha');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Veg Paratha', 'Tandoori', 60.00, TRUE, 'Vegan', 'Indian', 'Medium', 'Spiced grated vegetable paratha baked in tandoor.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Veg Paratha');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Methi Roti', 'Tandoori', 25.00, TRUE, 'Vegan', 'Indian', 'Mild', 'Whole wheat roti kneaded with fresh fenugreek leaves.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Methi Roti');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Methi Paratha', 'Tandoori', 40.00, TRUE, 'Vegan', 'Indian', 'Mild', 'Layered tandoori flatbread with fragrant methi greens.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Methi Paratha');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Chapati', 'Tandoori', 15.00, TRUE, 'Vegan', 'Indian', 'Mild', 'Thin homestyle whole wheat tawa phulka.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Chapati');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Butter Chapati', 'Tandoori', 16.00, TRUE, 'Veg', 'Indian', 'Mild', 'Soft tawa chapati brushed with butter.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Butter Chapati');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Masala Papad', 'Papad', 35.00, TRUE, 'Vegan', 'Indian', 'Medium', 'Fried lentil papad topped with spicy onion tomato kachumber.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Masala Papad');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Roasted Masala Papad', 'Papad', 10.00, TRUE, 'Vegan', 'Indian', 'Medium', 'Fire-roasted papad sprinkled with chaat spices.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Roasted Masala Papad');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Khicha Papad', 'Papad', 40.00, TRUE, 'Vegan', 'Indian', 'Mild', 'Traditional rice flour khicha papad.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Khicha Papad');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Khicha Masala Papad', 'Papad', 45.00, TRUE, 'Vegan', 'Indian', 'Medium', 'Rice khicha topped with chopped salad and tangy spices.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Khicha Masala Papad');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Fry Papad', 'Papad', 15.00, TRUE, 'Vegan', 'Indian', 'Mild', 'Crisp golden deep-fried urad dal papad.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Fry Papad');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Roasted Papad', 'Papad', 8.00, TRUE, 'Vegan', 'Indian', 'Mild', 'Dry roasted crunchy lentil wafer.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Roasted Papad');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Tomato Soup', 'Soups', 115.00, TRUE, 'Veg', 'Continental', 'Mild', 'Velvety ripe tomato soup served with croutons.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Tomato Soup');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Mushroom Soup', 'Soups', 120.00, TRUE, 'Veg', 'Continental', 'Mild', 'Creamy earthy button mushroom soup.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Mushroom Soup');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Sweet Corn Soup', 'Soups', 120.00, TRUE, 'Veg', 'Chinese', 'Mild', 'Comforting sweet corn broth with tender kernels.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Sweet Corn Soup');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Veg Manchow Soup', 'Soups', 120.00, TRUE, 'Vegan', 'Chinese', 'Spicy', 'Spicy Indo-Chinese soup topped with crispy fried noodles.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Veg Manchow Soup');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Veg Clear Soup', 'Soups', 120.00, TRUE, 'Vegan', 'Chinese', 'Mild', 'Light aromatic vegetable broth with finely diced greens.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Veg Clear Soup');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Veg Lemon Coriander Soup', 'Soups', 130.00, TRUE, 'Vegan', 'Chinese', 'Mild', 'Tangy clear broth infused with fresh lemon juice and cilantro.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Veg Lemon Coriander Soup');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Hot & Sour Soup', 'Soups', 120.00, TRUE, 'Vegan', 'Chinese', 'Spicy', 'Pungent spicy and sour broth packed with shredded vegetables.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Hot & Sour Soup');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Babycorn Soup', 'Soups', 120.00, TRUE, 'Veg', 'Chinese', 'Mild', 'Warm mild broth studded with tender baby corn slices.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Babycorn Soup');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Veg Noodle Soup', 'Soups', 120.00, TRUE, 'Vegan', 'Chinese', 'Mild', 'Hearty broth loaded with soft noodles and vegetables.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Veg Noodle Soup');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Babycorn Clear Soup', 'Soups', 120.00, TRUE, 'Vegan', 'Chinese', 'Mild', 'Light clear broth with crunchy baby corn.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Babycorn Clear Soup');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Babycorn Noodle Soup', 'Soups', 120.00, TRUE, 'Vegan', 'Chinese', 'Mild', 'Flavorful noodle broth with sweet baby corn.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Babycorn Noodle Soup');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Palak Soup', 'Soups', 120.00, TRUE, 'Veg', 'Indian', 'Mild', 'Nutritious creamy puree of fresh garden spinach.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Palak Soup');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Shrikhand', 'Sweets', 100.00, TRUE, 'Veg', 'Indian', 'Mild', 'Traditional sweetened strained yoghurt flavored with cardamom.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Shrikhand');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Shrikhand Puri', 'Sweets', 140.00, TRUE, 'Veg', 'Indian', 'Mild', 'Hot puffed puris served with sweet chilled shrikhand.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Shrikhand Puri');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Gulab Jamun', 'Sweets', 35.00, TRUE, 'Veg', 'Indian', 'Mild', 'Warm milk-solid dumpling soaked in fragrant rose sugar syrup.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Gulab Jamun');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Rasgulla', 'Sweets', 80.00, TRUE, 'Veg', 'Indian', 'Mild', 'Spongy cottage cheese balls soaked in light sugar syrup (2 pcs).'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Rasgulla');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Ras Malai', 'Sweets', 80.00, TRUE, 'Veg', 'Indian', 'Mild', 'Delicate paneer discs steeped in thickened saffron cardamom milk.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Ras Malai');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Malai Sandwich', 'Sweets', 140.00, TRUE, 'Veg', 'Indian', 'Mild', 'Layered sweet Bengali paneer confection with rich mawa.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Malai Sandwich');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Bread Butter', 'Sandwich Corner', 40.00, TRUE, 'Veg', 'Continental', 'Mild', 'Fresh bread slices with creamy butter.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Bread Butter');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Toast Butter', 'Sandwich Corner', 50.00, TRUE, 'Veg', 'Continental', 'Mild', 'Crispy golden toasted bread with melted butter.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Toast Butter');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Veg Sandwich', 'Sandwich Corner', 75.00, TRUE, 'Veg', 'Continental', 'Mild', 'Triple layered sandwich with cucumbers, tomatoes and mint chutney.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Veg Sandwich');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Veg Toast Sandwich', 'Sandwich Corner', 80.00, TRUE, 'Veg', 'Continental', 'Mild', 'Grilled vegetable sandwich with spices and butter.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Veg Toast Sandwich');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Cheese Sandwich', 'Sandwich Corner', 90.00, TRUE, 'Veg', 'Continental', 'Mild', 'Fresh white bread with thick cheddar cheese slice.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Cheese Sandwich');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Cheese Toast Sandwich', 'Sandwich Corner', 90.00, TRUE, 'Veg', 'Continental', 'Mild', 'Crisp grilled sandwich stuffed with melted cheese.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Cheese Toast Sandwich');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Omlette Sandwich', 'Sandwich Corner', 95.00, TRUE, 'Vegan', 'Continental', 'Medium', 'Savory vegetarian tomato-besan omelette bread sandwich.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Omlette Sandwich');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Omlette Toast Sandwich', 'Sandwich Corner', 120.00, TRUE, 'Vegan', 'Continental', 'Medium', 'Toasted sandwich with spiced vegetarian omelette.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Omlette Toast Sandwich');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Paneer Sandwich', 'Sandwich Corner', 125.00, TRUE, 'Veg', 'Indian', 'Mild', 'Soft sandwich with marinated cottage cheese cubes.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Paneer Sandwich');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Paneer Toast Sandwich', 'Sandwich Corner', 130.00, TRUE, 'Veg', 'Indian', 'Medium', 'Grilled sandwich loaded with spiced paneer filling.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Paneer Toast Sandwich');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Club Sandwich', 'Sandwich Corner', 130.00, TRUE, 'Veg', 'Continental', 'Medium', 'Double-decker toasted sandwich packed with cheese and veggies.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Club Sandwich');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Dal Fry', 'Punjabi Dishes', 120.00, TRUE, 'Vegan', 'Punjabi', 'Medium', 'Yellow lentils pan-fried with onions, tomatoes and garlic.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Dal Fry');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Butter Dal Fry', 'Punjabi Dishes', 125.00, TRUE, 'Veg', 'Punjabi', 'Medium', 'Pan-fried dal finished with a generous dollop of butter.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Butter Dal Fry');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Plain Dal', 'Punjabi Dishes', 65.00, TRUE, 'Vegan', 'Punjabi', 'Mild', 'Simple boiled yellow lentils lightly seasoned with turmeric.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Plain Dal');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Paneer Chana', 'Punjabi Dishes', 130.00, TRUE, 'Veg', 'Punjabi', 'Medium', 'Chickpeas and cottage cheese in robust onion masala.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Paneer Chana');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Dal Tadka', 'Punjabi Dishes', 130.00, TRUE, 'Vegan', 'Punjabi', 'Medium', 'Simmered lentils tempered with sizzling cumin and red chillies.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Dal Tadka');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Chana Masala', 'Punjabi Dishes', 110.00, TRUE, 'Vegan', 'Punjabi', 'Medium', 'Tender chickpeas simmered in authentic Punjabi amchur spices.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Chana Masala');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Aloo Mutter', 'Punjabi Dishes', 120.00, TRUE, 'Vegan', 'Punjabi', 'Mild', 'Potatoes and fresh green peas in spiced tomato gravy.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Aloo Mutter');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Veg Kurma', 'Punjabi Dishes', 135.00, TRUE, 'Veg', 'Punjabi', 'Mild', 'Mixed vegetables cooked in mild coconut and cashew sauce.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Veg Kurma');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Peas Gobi', 'Punjabi Dishes', 125.00, TRUE, 'Vegan', 'Punjabi', 'Medium', 'Cauliflower florets and sweet peas sauteed with ginger and cumin.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Peas Gobi');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Aloo Gobi', 'Punjabi Dishes', 100.00, TRUE, 'Vegan', 'Punjabi', 'Medium', 'Classic dry-tossed potatoes and cauliflower with coriander.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Aloo Gobi');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Green Peas Masala', 'Punjabi Dishes', 140.00, TRUE, 'Vegan', 'Punjabi', 'Medium', 'Green peas simmered in rich spiced onion gravy.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Green Peas Masala');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Green Peas Palak', 'Punjabi Dishes', 140.00, TRUE, 'Vegan', 'Punjabi', 'Mild', 'Sweet peas cooked in fresh vibrant spinach sauce.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Green Peas Palak');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Baingan Masala', 'Punjabi Dishes', 125.00, TRUE, 'Vegan', 'Punjabi', 'Medium', 'Baby eggplants cooked in roasted peanut and sesame gravy.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Baingan Masala');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Baingan Bhartha', 'Punjabi Dishes', 145.00, TRUE, 'Vegan', 'Punjabi', 'Medium', 'Smoky roasted mashed aubergine cooked with onions and chillies.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Baingan Bhartha');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Bhendi Masala', 'Punjabi Dishes', 120.00, TRUE, 'Vegan', 'Punjabi', 'Medium', 'Tender okra sauteed in tomato onion masala.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Bhendi Masala');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Bhendi Fry', 'Punjabi Dishes', 130.00, TRUE, 'Vegan', 'Punjabi', 'Medium', 'Crispy pan-fried ladyfingers with dry ground spices.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Bhendi Fry');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Aloo Bhendi', 'Punjabi Dishes', 125.00, TRUE, 'Vegan', 'Punjabi', 'Medium', 'Homestyle stir-fry of potatoes and okra.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Aloo Bhendi');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Bhendi Oil Fry', 'Punjabi Dishes', 125.00, TRUE, 'Vegan', 'Punjabi', 'Medium', 'Deep fried crunchy okra with chaat masala.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Bhendi Oil Fry');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Aloo Palak', 'Punjabi Dishes', 130.00, TRUE, 'Vegan', 'Punjabi', 'Mild', 'Potatoes cooked in seasoned spinach puree.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Aloo Palak');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Palak Tadka', 'Punjabi Dishes', 120.00, TRUE, 'Vegan', 'Punjabi', 'Medium', 'Pureed spinach tempered with browned garlic and whole chillies.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Palak Tadka');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Tomato Fry / Masala', 'Punjabi Dishes', 110.00, TRUE, 'Vegan', 'Punjabi', 'Medium', 'Sauteed tomatoes with spicy onion gravy.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Tomato Fry / Masala');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Tomato Bartha', 'Punjabi Dishes', 130.00, TRUE, 'Vegan', 'Punjabi', 'Medium', 'Fire-roasted crushed tomatoes with mustard seasoning.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Tomato Bartha');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Stuff Tomato', 'Punjabi Dishes', 130.00, TRUE, 'Veg', 'Punjabi', 'Medium', 'Whole tomatoes stuffed with paneer and nuts in curry.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Stuff Tomato');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Green Peas Tomato', 'Punjabi Dishes', 110.00, TRUE, 'Vegan', 'Punjabi', 'Mild', 'Sweet peas simmered in fresh tangy tomato puree.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Green Peas Tomato');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Navratan Kurma', 'Punjabi Dishes', 140.00, TRUE, 'Veg', 'Punjabi', 'Mild', 'Nine gem vegetables and dry fruits in creamy white gravy.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Navratan Kurma');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Veg Makhanwala', 'Punjabi Dishes', 140.00, TRUE, 'Veg', 'Punjabi', 'Mild', 'Mixed vegetables simmered in buttery tomato cream sauce.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Veg Makhanwala');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Veg Kolhapuri', 'Punjabi Dishes', 140.00, TRUE, 'Vegan', 'Punjabi', 'Spicy', 'Fiery Maharashtrian curry with red chillies and coconut.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Veg Kolhapuri');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Veg Jaipuri', 'Punjabi Dishes', 130.00, TRUE, 'Veg', 'Punjabi', 'Medium', 'Rajasthani style vegetable preparation topped with roasted papad.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Veg Jaipuri');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Veg Jal Fraize', 'Punjabi Dishes', 160.00, TRUE, 'Vegan', 'Punjabi', 'Spicy', 'Batons of seasonal vegetables stir-fried with capsicum in thick gravy.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Veg Jal Fraize');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Aloo Jeera', 'Punjabi Dishes', 160.00, TRUE, 'Vegan', 'Punjabi', 'Mild', 'Boiled potatoes tossed with roasted cumin seeds and fresh coriander.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Aloo Jeera');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Dahi Kadi', 'Punjabi Dishes', 90.00, TRUE, 'Veg', 'Punjabi', 'Mild', 'Tangy gram flour and yoghurt curry with vegetable pakodas.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Dahi Kadi');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Veg Patiala', 'Punjabi Special', 240.00, TRUE, 'Veg', 'Punjabi', 'Medium', 'Stuffed vegetable rolls in rich dual-flavored rich gravy.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Veg Patiala');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Mushroom Masala', 'Punjabi Special', 155.00, TRUE, 'Vegan', 'Punjabi', 'Medium', 'Plump button mushrooms cooked in spiced onion masala.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Mushroom Masala');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Paneer Tikka Masala', 'Punjabi Special', 182.00, TRUE, 'Veg', 'Punjabi', 'Medium', 'Charcoal-grilled paneer cubes in thick creamy gravy.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Paneer Tikka Masala');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Paneer Kolhapuri', 'Punjabi Special', 182.00, TRUE, 'Veg', 'Punjabi', 'Spicy', 'Cottage cheese simmered in spicy Kolhapuri red chilli gravy.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Paneer Kolhapuri');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Paneer Makhanwala', 'Punjabi Special', 182.00, TRUE, 'Veg', 'Punjabi', 'Mild', 'Paneer cubes bathed in velvety butter-laden tomato gravy.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Paneer Makhanwala');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Paneer Bhurji', 'Punjabi Special', 190.00, TRUE, 'Veg', 'Punjabi', 'Medium', 'Scrambled cottage cheese tossed with onions, tomatoes and green chillies.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Paneer Bhurji');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Paneer Mutter', 'Punjabi Special', 150.00, TRUE, 'Veg', 'Punjabi', 'Mild', 'Traditional pairing of soft paneer and sweet peas in gravy.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Paneer Mutter');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Paneer Palak', 'Punjabi Special', 150.00, TRUE, 'Veg', 'Punjabi', 'Mild', 'Cottage cheese cubes in smooth seasoned spinach puree.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Paneer Palak');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Paneer Kurma', 'Punjabi Special', 155.00, TRUE, 'Veg', 'Punjabi', 'Mild', 'Paneer in rich aromatic cashew and coconut white sauce.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Paneer Kurma');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Bhindi Masala', 'Punjabi Special', 120.00, TRUE, 'Vegan', 'Punjabi', 'Medium', 'Tender okra cooked with sliced onions and Indian spices.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Bhindi Masala');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Bhindi Crispy', 'Punjabi Special', 140.00, TRUE, 'Vegan', 'Punjabi', 'Medium', 'Crunchy fried julienned okra tossed with chaat spices.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Bhindi Crispy');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Shahi Paneer', 'Punjabi Special', 165.00, TRUE, 'Veg', 'Punjabi', 'Mild', 'Royal preparation of paneer in fragrant almond-cashew cream gravy.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Shahi Paneer');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Shahi Palak', 'Punjabi Special', 150.00, TRUE, 'Veg', 'Punjabi', 'Mild', 'Spinach puree finished with cream, butter and mild spices.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Shahi Palak');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Paneer Masala', 'Punjabi Special', 155.00, TRUE, 'Veg', 'Punjabi', 'Medium', 'Paneer cubes cooked in homestyle onion tomato masala.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Paneer Masala');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Mushroom Paneer Masala', 'Punjabi Special', 155.00, TRUE, 'Veg', 'Punjabi', 'Medium', 'Hearty blend of button mushrooms and cottage cheese.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Mushroom Paneer Masala');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Methi Masala', 'Punjabi Special', 125.00, TRUE, 'Vegan', 'Punjabi', 'Medium', 'Fresh fenugreek leaves in spicy onion curry.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Methi Masala');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Malai Methi Mutter', 'Punjabi Special', 160.00, TRUE, 'Veg', 'Punjabi', 'Mild', 'Sweet peas and fenugreek in rich velvety cream gravy.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Malai Methi Mutter');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Aloo Methi', 'Punjabi Special', 110.00, TRUE, 'Vegan', 'Punjabi', 'Mild', 'Potatoes sauteed with fresh bitter fenugreek greens.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Aloo Methi');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Veg Chilly Fry Shimla', 'Punjabi Special', 110.00, TRUE, 'Vegan', 'Punjabi', 'Spicy', 'Stir-fried bell peppers and green chillies.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Veg Chilly Fry Shimla');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Aloo Shimla', 'Punjabi Special', 120.00, TRUE, 'Vegan', 'Punjabi', 'Medium', 'Diced potatoes and capsicum pan-fried with cumin.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Aloo Shimla');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Stuff Shimla', 'Punjabi Special', 130.00, TRUE, 'Veg', 'Punjabi', 'Medium', 'Whole capsicum stuffed with spiced paneer and potatoes.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Stuff Shimla');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Paneer Kofta', 'Punjabi Special', 170.00, TRUE, 'Veg', 'Punjabi', 'Medium', 'Cottage cheese dumplings simmered in rich silky gravy.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Paneer Kofta');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Kaju Curry', 'Punjabi Special', 175.00, TRUE, 'Veg', 'Punjabi', 'Mild', 'Roasted whole cashews in royal creamy tomato gravy.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Kaju Curry');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Kaju Paneer', 'Punjabi Special', 190.00, TRUE, 'Veg', 'Punjabi', 'Mild', 'Rich combination of whole cashews and cottage cheese cubes.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Kaju Paneer');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Cheese Kofta', 'Punjabi Special', 150.00, TRUE, 'Veg', 'Punjabi', 'Mild', 'Soft cheese dumplings in mild aromatic gravy.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Cheese Kofta');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Malai Kofta', 'Punjabi Special', 150.00, TRUE, 'Veg', 'Punjabi', 'Mild', 'Melt-in-mouth paneer and potato dumplings in white cashew sauce.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Malai Kofta');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Kashmiri Kofta', 'Punjabi Special', 160.00, TRUE, 'Veg', 'Punjabi', 'Mild', 'Sweet-savory fruit and nut stuffed koftas in Kashmiri sauce.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Kashmiri Kofta');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Dam Aloo Kashmiri', 'Punjabi Special', 160.00, TRUE, 'Vegan', 'Punjabi', 'Mild', 'Slow-dum cooked baby potatoes in mild saffron-tinged gravy.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Dam Aloo Kashmiri');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Cheese Peas Curry', 'Punjabi Special', 160.00, TRUE, 'Veg', 'Punjabi', 'Mild', 'Cheddar cheese and green peas in smooth tomato curry.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Cheese Peas Curry');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Veg Handi', 'Punjabi Special', 160.00, TRUE, 'Veg', 'Punjabi', 'Medium', 'Assorted vegetables cooked in clay pot handi style.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Veg Handi');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Veg Kadai', 'Punjabi Special', 160.00, TRUE, 'Vegan', 'Punjabi', 'Spicy', 'Vegetables tossed with whole spices in an iron wok.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Veg Kadai');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Paneer Handi', 'Punjabi Special', 180.00, TRUE, 'Veg', 'Punjabi', 'Medium', 'Cottage cheese simmered in rich handi gravy.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Paneer Handi');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Paneer Tikka Fry', 'Starters', 200.00, TRUE, 'Veg', 'Indian', 'Medium', 'Tandoor-marinated paneer cubes pan fried to crisp finish.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Paneer Tikka Fry');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Hara Bhara Kabab', 'Starters', 200.00, TRUE, 'Veg', 'Indian', 'Medium', 'Spinach, green peas and potato patties with aromatic herbs.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Hara Bhara Kabab');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Veg Manchurian', 'Starters', 190.00, TRUE, 'Vegan', 'Chinese', 'Medium', 'Deep fried vegetable balls tossed in savory soya ginger sauce.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Veg Manchurian');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Mushroom Manchurian', 'Starters', 200.00, TRUE, 'Vegan', 'Chinese', 'Medium', 'Crispy button mushrooms in tangy manchurian gravy.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Mushroom Manchurian');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Paneer Chilly', 'Starters', 200.00, TRUE, 'Veg', 'Chinese', 'Spicy', 'Batter-fried paneer cubes wok-tossed with peppers and chillies.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Paneer Chilly');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Paneer Manchurian', 'Starters', 200.00, TRUE, 'Veg', 'Chinese', 'Medium', 'Cottage cheese cubes tossed in garlic coriander manchurian glaze.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Paneer Manchurian');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Gobi Manchurian', 'Starters', 190.00, TRUE, 'Vegan', 'Chinese', 'Medium', 'Crispy cauliflower florets in spicy ginger soya sauce.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Gobi Manchurian');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Veg Crispy', 'Starters', 200.00, TRUE, 'Vegan', 'Chinese', 'Spicy', 'Crispy shredded mixed vegetables tossed in sweet and spicy schezwan sauce.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Veg Crispy');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Veg Chilly', 'Starters', 200.00, TRUE, 'Vegan', 'Chinese', 'Spicy', 'Stir-fried vegetables with green chillies and soya.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Veg Chilly');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Veg Spring Roll', 'Starters', 200.00, TRUE, 'Vegan', 'Chinese', 'Mild', 'Golden fried crispy wrappers stuffed with seasoned noodles and vegetables.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Veg Spring Roll');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Paneer Garlic', 'Starters', 200.00, TRUE, 'Veg', 'Chinese', 'Medium', 'Paneer cubes tossed in rich burnt garlic sauce.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Paneer Garlic');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Ginger', 'Starters', 200.00, TRUE, 'Vegan', 'Chinese', 'Medium', 'Vegetable dumplings tossed in zesty ginger sauce.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Ginger');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Veg 65', 'Starters', 190.00, TRUE, 'Vegan', 'Indian', 'Spicy', 'Deep-fried vegetables coated in spicy South-style masala.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Veg 65');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Babycorn Manchurian', 'Starters', 200.00, TRUE, 'Vegan', 'Chinese', 'Medium', 'Crisp baby corn tossed in savory manchurian sauce.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Babycorn Manchurian');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Veg Singapuri', 'Starters', 200.00, TRUE, 'Vegan', 'Chinese', 'Spicy', 'Stir-fried vegetables in tangy Singapore-style curry powder sauce.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Veg Singapuri');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Veg Hakka Noodles', 'Chinese Rice & Noodles', 190.00, TRUE, 'Vegan', 'Chinese', 'Mild', 'Wok-tossed noodles with shredded cabbage, carrots and spring onions.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Veg Hakka Noodles');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Veg Triple Noodles', 'Chinese Rice & Noodles', 195.00, TRUE, 'Vegan', 'Chinese', 'Spicy', 'Combination of noodles, rice and crispy fried noodles in schezwan gravy.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Veg Triple Noodles');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Veg Schezwan Noodles', 'Chinese Rice & Noodles', 195.00, TRUE, 'Vegan', 'Chinese', 'Spicy', 'Noodles tossed in fiery spicy schezwan red paste.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Veg Schezwan Noodles');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Veg Hongkong Noodles', 'Chinese Rice & Noodles', 195.00, TRUE, 'Vegan', 'Chinese', 'Medium', 'Hongkong style noodles with sweet and savory touch.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Veg Hongkong Noodles');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Veg American Chopsuey', 'Chinese Rice & Noodles', 210.00, TRUE, 'Vegan', 'Chinese', 'Mild', 'Crispy fried noodles topped with sweet and sour vegetable gravy.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Veg American Chopsuey');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Veg Chowmein', 'Chinese Rice & Noodles', 210.00, TRUE, 'Vegan', 'Chinese', 'Medium', 'Pan-fried noodles tossed with crisp vegetables and soya.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Veg Chowmein');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Veg Fried Rice', 'Chinese Rice & Noodles', 150.00, TRUE, 'Vegan', 'Chinese', 'Mild', 'Fluffy steamed rice stir-fried in wok with diced vegetables.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Veg Fried Rice');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Veg Triple Fried Rice', 'Chinese Rice & Noodles', 170.00, TRUE, 'Vegan', 'Chinese', 'Spicy', 'Fried rice and hakka noodles served with side of spicy schezwan gravy.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Veg Triple Fried Rice');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Veg Schezwan Fried Rice', 'Chinese Rice & Noodles', 160.00, TRUE, 'Vegan', 'Chinese', 'Spicy', 'Wok-tossed rice flavored with hot schezwan pepper sauce.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Veg Schezwan Fried Rice');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Mushroom Fried Rice', 'Chinese Rice & Noodles', 160.00, TRUE, 'Vegan', 'Chinese', 'Mild', 'Fried rice with sliced button mushrooms and garlic.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Mushroom Fried Rice');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Mushroom Schezwan Rice', 'Chinese Rice & Noodles', 165.00, TRUE, 'Vegan', 'Chinese', 'Spicy', 'Spicy schezwan fried rice loaded with juicy mushrooms.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Mushroom Schezwan Rice');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Veg Pizza', 'Pizza Hut', 140.00, TRUE, 'Veg', 'Continental', 'Mild', 'Baked pizza base topped with marinara, capsicum, onions and cheese.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Veg Pizza');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Cheese Pizza', 'Pizza Hut', 160.00, TRUE, 'Veg', 'Continental', 'Mild', 'Loaded double cheese margherita style pizza.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Cheese Pizza');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Mushroom Pizza', 'Pizza Hut', 160.00, TRUE, 'Veg', 'Continental', 'Mild', 'Pizza topped with sliced button mushrooms and herbs.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Mushroom Pizza');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Mix Pizza', 'Pizza Hut', 160.00, TRUE, 'Veg', 'Continental', 'Medium', 'All-topping pizza with babycorn, mushrooms, peppers and cheese.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Mix Pizza');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Paneer Pizza', 'Pizza Hut', 180.00, TRUE, 'Veg', 'Continental', 'Medium', 'Crispy crust topped with spiced paneer cubes and mozzarella.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Paneer Pizza');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Chass (Butter Milk)', 'Cold Beverages', 32.00, TRUE, 'Veg', 'Indian', 'Mild', 'Traditional churned salted buttermilk with roasted cumin and coriander.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Chass (Butter Milk)');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Chass (Plain)', 'Cold Beverages', 32.00, TRUE, 'Veg', 'Indian', 'Mild', 'Simple refreshing plain chilled buttermilk.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Chass (Plain)');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Lassi', 'Cold Beverages', 70.00, TRUE, 'Veg', 'Indian', 'Mild', 'Thick sweet Punjabi yoghurt shake topped with malai.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Lassi');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Mango Lassi', 'Cold Beverages', 75.00, TRUE, 'Veg', 'Indian', 'Mild', 'Creamy sweet lassi blended with Alphonso mango pulp.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Mango Lassi');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Soft Drinks (300 ml)', 'Cold Beverages', 30.00, TRUE, 'Vegan', 'Continental', 'Mild', 'Chilled bottled soft drink.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Soft Drinks (300 ml)');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Soft Drinks (500 ml)', 'Cold Beverages', 55.00, TRUE, 'Vegan', 'Continental', 'Mild', 'Chilled bottled aerated beverage.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Soft Drinks (500 ml)');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Diet Coke', 'Cold Beverages', 60.00, TRUE, 'Vegan', 'Continental', 'Mild', 'Zero calorie chilled diet cola.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Diet Coke');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Rio', 'Cold Beverages', 50.00, TRUE, 'Vegan', 'Continental', 'Mild', 'Flavored sparkling fruit juice fusion beverage.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Rio');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Fresh Lime Soda', 'Cold Beverages', 45.00, TRUE, 'Vegan', 'Indian', 'Mild', 'Refreshing freshly squeezed lime juice with club soda (Sweet / Salted).'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Fresh Lime Soda');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Mosambi', 'Juices - Seasonal', 100.00, TRUE, 'Vegan', 'Indian', 'Mild', 'Fresh sweet lime juice extracted on order.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Mosambi');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Orange', 'Juices - Seasonal', 100.00, TRUE, 'Vegan', 'Indian', 'Mild', 'Pure fresh citrus orange juice.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Orange');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Ganga Jamuna', 'Juices - Seasonal', 100.00, TRUE, 'Vegan', 'Indian', 'Mild', 'Classic fresh blend of mosambi and orange juice.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Ganga Jamuna');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Pineapple', 'Juices - Seasonal', 100.00, TRUE, 'Vegan', 'Indian', 'Mild', 'Freshly cold-pressed sweet pineapple juice.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Pineapple');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Cocktail Juice', 'Juices - Seasonal', 100.00, TRUE, 'Vegan', 'Indian', 'Mild', 'Medley of seasonal tropical fruit juices.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Cocktail Juice');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Maramari (Pineapple & Mosambi)', 'Juices - Seasonal', 100.00, TRUE, 'Vegan', 'Indian', 'Mild', 'Refreshing combination of sweet pineapple and sweet lime.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Maramari (Pineapple & Mosambi)');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Cold Coffee', 'Milk Shakes - Seasonal', 100.00, TRUE, 'Veg', 'Continental', 'Mild', 'Chilled blended coffee with milk, sugar and chocolate drizzle.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Cold Coffee');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Apple Milk Shake', 'Milk Shakes - Seasonal', 110.00, TRUE, 'Veg', 'Continental', 'Mild', 'Creamy milkshake blended with fresh apples.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Apple Milk Shake');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Chikku Milk Shake', 'Milk Shakes - Seasonal', 110.00, TRUE, 'Veg', 'Indian', 'Mild', 'Thick sweet sapota (chikku) fruit milkshake.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Chikku Milk Shake');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Mango Milk Shake', 'Milk Shakes - Seasonal', 110.00, TRUE, 'Veg', 'Indian', 'Mild', 'Rich milkshake prepared with sweet Alphonso mango pulp.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Mango Milk Shake');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Chocolate Milk Shake', 'Milk Shakes - Seasonal', 110.00, TRUE, 'Veg', 'Continental', 'Mild', 'Decadent blended milkshake with dark chocolate sauce.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Chocolate Milk Shake');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Strawberry Milk Shake', 'Milk Shakes - Seasonal', 120.00, TRUE, 'Veg', 'Continental', 'Mild', 'Sweet pink milkshake made with strawberry puree.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Strawberry Milk Shake');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Vanilla Milk Shake', 'Milk Shakes - Seasonal', 120.00, TRUE, 'Veg', 'Continental', 'Mild', 'Classic smooth vanilla ice cream blended shake.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Vanilla Milk Shake');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Kesar Pista', 'Ice Cream', 70.00, TRUE, 'Veg', 'Indian', 'Mild', 'Saffron flavored ice cream studded with crunchy pistachio bits.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Kesar Pista');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Butter Scotch', 'Ice Cream', 65.00, TRUE, 'Veg', 'Continental', 'Mild', 'Creamy butterscotch ice cream with crunchy praline chunks.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Butter Scotch');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Vanilla', 'Ice Cream', 50.00, TRUE, 'Veg', 'Continental', 'Mild', 'Scoop of classic smooth Madagascar vanilla ice cream.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Vanilla');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Vanilla (Small)', 'Ice Cream', 35.00, TRUE, 'Veg', 'Continental', 'Mild', 'Single scoop of sweet vanilla ice cream.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Vanilla (Small)');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Casatta', 'Ice Cream', 80.00, TRUE, 'Veg', 'Continental', 'Mild', 'Multi-layered rainbow ice cream slice on sponge cake.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Casatta');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Chocobar', 'Ice Cream', 40.00, TRUE, 'Veg', 'Continental', 'Mild', 'Vanilla ice cream bar coated in crisp milk chocolate shell.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Chocobar');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Mango / Raspberry Duet', 'Ice Cream', 45.00, TRUE, 'Veg', 'Continental', 'Mild', 'Dual flavored fruity duet ice cream bar.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Mango / Raspberry Duet');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'King Cone', 'Ice Cream', 60.00, TRUE, 'Veg', 'Continental', 'Mild', 'Jumbo waffle cone filled with rich chocolate ice cream.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'King Cone');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Tricone', 'Ice Cream', 50.00, TRUE, 'Veg', 'Continental', 'Mild', 'Triple layered crispy waffle cone ice cream.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Tricone');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Rajbhog', 'Ice Cream', 75.00, TRUE, 'Veg', 'Indian', 'Mild', 'Royal saffron ice cream with dry fruits and cardamom.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Rajbhog');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Shahi Anjeer', 'Ice Cream', 80.00, TRUE, 'Veg', 'Indian', 'Mild', 'Exotic rich fig ice cream with roasted nuts.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Shahi Anjeer');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Kulfi', 'Ice Cream', 60.00, TRUE, 'Veg', 'Indian', 'Mild', 'Traditional malai matka kulfi with saffron and almonds.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Kulfi');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Alphanso Mango', 'Ice Cream', 75.00, TRUE, 'Veg', 'Indian', 'Mild', 'Authentic Ratnagiri Alphonso mango ice cream.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Alphanso Mango');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Quick Sundae', 'Ice Cream', 90.00, TRUE, 'Veg', 'Continental', 'Mild', 'Ice cream sundae topped with chocolate fudge, nuts and cherry.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Quick Sundae');
INSERT INTO menu_items (name, category, price, is_available, dietary_type, cuisine, taste_profile, description)
SELECT 'Strawberry', 'Ice Cream', 55.00, TRUE, 'Veg', 'Continental', 'Mild', 'Classic sweet strawberry ice cream scoop.'
WHERE NOT EXISTS (SELECT 1 FROM menu_items WHERE name = 'Strawberry');
