// Complete Sarovar Hotel SmartStay Menu Catalog
// Extracted from Menu.jsx with realistic prices assigned to previously unlisted items.

export const sarovarMenu = [
  // ================= HOT BEVERAGES =================
  { id: 1, name: "Tea", category: "Hot Beverages", price: 35, dietaryType: "Veg", cuisine: "Indian", taste: "Mild", course: "BEVERAGE", desc: "Freshly brewed hot tea." },
  { id: 2, name: "Coffee (Filter)", category: "Hot Beverages", price: 40, dietaryType: "Veg", cuisine: "South Indian", taste: "Mild", course: "BEVERAGE", desc: "Traditional filter coffee." },
  { id: 3, name: "Nescafe", category: "Hot Beverages", price: 45, dietaryType: "Veg", cuisine: "Continental", taste: "Mild", course: "BEVERAGE", desc: "Hot Nescafe coffee." },
  { id: 4, name: "Milk", category: "Hot Beverages", price: 55, dietaryType: "Veg", cuisine: "Indian", taste: "Mild", course: "BEVERAGE", desc: "Fresh hot milk." },
  { id: 5, name: "Bisleri", category: "Hot Beverages", price: 35, dietaryType: "Vegan", cuisine: "Indian", taste: "Mild", course: "BEVERAGE", desc: "Packaged drinking water." },
  { id: 6, name: "Black Tea", category: "Hot Beverages", price: 30, dietaryType: "Vegan", cuisine: "Indian", taste: "Mild", course: "BEVERAGE", desc: "Refreshing black tea." },

  // ================= SOUTH INDIAN / SNACKS =================
  { id: 7, name: "Upma", category: "South Indian / Snacks", price: 60, dietaryType: "Vegan", cuisine: "South Indian", taste: "Mild", course: "STARTER", desc: "Semolina cooked with mustard seeds and curry leaves." },
  { id: 8, name: "Idli", category: "South Indian / Snacks", price: 60, dietaryType: "Vegan", cuisine: "South Indian", taste: "Mild", course: "STARTER", desc: "Steamed fermented rice and lentil cakes (2 pcs)." },
  { id: 9, name: "Idli Medu Vada", category: "South Indian / Snacks", price: 70, dietaryType: "Vegan", cuisine: "South Indian", taste: "Mild", course: "STARTER", desc: "Combination of steamed idli and crispy medu vada." },
  { id: 10, name: "Medu Vada", category: "South Indian / Snacks", price: 70, dietaryType: "Vegan", cuisine: "South Indian", taste: "Medium", course: "STARTER", desc: "Crispy fried lentil fritters with sambar and chutney." },
  { id: 11, name: "Medu Vada Single", category: "South Indian / Snacks", price: 45, dietaryType: "Vegan", cuisine: "South Indian", taste: "Medium", course: "STARTER", desc: "Single piece crispy medu vada with chutney." }, // Preferred price
  { id: 12, name: "Potato Vada", category: "South Indian / Snacks", price: 55, dietaryType: "Vegan", cuisine: "Indian", taste: "Medium", course: "STARTER", desc: "Spiced mashed potato balls battered and deep fried." },
  { id: 13, name: "Potato Vada Sambar", category: "South Indian / Snacks", price: 55, dietaryType: "Vegan", cuisine: "Indian", taste: "Medium", course: "STARTER", desc: "Batata vada served immersed in hot tangy sambar." },
  { id: 14, name: "Potato Vada Single", category: "South Indian / Snacks", price: 47, dietaryType: "Vegan", cuisine: "Indian", taste: "Medium", course: "STARTER", desc: "Single portion batata vada." },
  { id: 15, name: "Vada Usal", category: "South Indian / Snacks", price: 75, dietaryType: "Vegan", cuisine: "Indian", taste: "Spicy", course: "STARTER", desc: "Potato vada topped with spicy sprouted bean usal curry." },
  { id: 16, name: "Extra Sambar", category: "South Indian / Snacks", price: 47, dietaryType: "Vegan", cuisine: "South Indian", taste: "Medium", course: "ACCOMPANIMENT", desc: "Bowl of traditional aromatic vegetable sambar." },
  { id: 17, name: "Sada Dosa", category: "South Indian / Snacks", price: 75, dietaryType: "Vegan", cuisine: "South Indian", taste: "Mild", course: "MAIN", desc: "Crispy thin fermented rice crepe." },
  { id: 18, name: "Ghee Sada Dosa", category: "South Indian / Snacks", price: 80, dietaryType: "Veg", cuisine: "South Indian", taste: "Mild", course: "MAIN", desc: "Crispy dosa prepared with aromatic pure ghee." },
  { id: 19, name: "Masala Dosa", category: "South Indian / Snacks", price: 90, dietaryType: "Vegan", cuisine: "South Indian", taste: "Medium", course: "MAIN", desc: "Crispy dosa stuffed with tempered spiced potato bhaji." },
  { id: 20, name: "Ghee Masala Dosa", category: "South Indian / Snacks", price: 100, dietaryType: "Veg", cuisine: "South Indian", taste: "Medium", course: "MAIN", desc: "Golden ghee-roasted dosa with spiced potato filling." },
  { id: 21, name: "Paper Dosa", category: "South Indian / Snacks", price: 120, dietaryType: "Vegan", cuisine: "South Indian", taste: "Mild", course: "MAIN", desc: "Extra thin and jumbo crispy crepe." },
  { id: 22, name: "Paper Masala", category: "South Indian / Snacks", price: 130, dietaryType: "Vegan", cuisine: "South Indian", taste: "Medium", course: "MAIN", desc: "Jumbo crispy paper dosa filled with spiced aloo masala." },
  { id: 23, name: "Cheese Paper Dosa", category: "South Indian / Snacks", price: 150, dietaryType: "Veg", cuisine: "South Indian", taste: "Mild", course: "MAIN", desc: "Crispy thin paper dosa generously topped with cheese." },
  { id: 24, name: "Cheese Masala Dosa", category: "South Indian / Snacks", price: 155, dietaryType: "Veg", cuisine: "South Indian", taste: "Medium", course: "MAIN", desc: "Dosa stuffed with spiced potato and melted cheddar cheese." },
  { id: 25, name: "Mysore Sada Dosa", category: "South Indian / Snacks", price: 90, dietaryType: "Vegan", cuisine: "South Indian", taste: "Spicy", course: "MAIN", desc: "Dosa spread with spicy garlic red chilli chutney." },
  { id: 26, name: "Mysore Masala", category: "South Indian / Snacks", price: 95, dietaryType: "Vegan", cuisine: "South Indian", taste: "Spicy", course: "MAIN", desc: "Spicy red chutney spread with potato masala filling." },
  { id: 27, name: "Ghee Mysore Sada", category: "South Indian / Snacks", price: 100, dietaryType: "Veg", cuisine: "South Indian", taste: "Spicy", course: "MAIN", desc: "Mysore dosa cooked in rich desi ghee." },
  { id: 28, name: "Cheese Mysore Sada Dosa", category: "South Indian / Snacks", price: 110, dietaryType: "Veg", cuisine: "South Indian", taste: "Medium", course: "MAIN", desc: "Mysore crepe with shredded cheese layer." },
  { id: 29, name: "Cheese Mysore Masala Dosa", category: "South Indian / Snacks", price: 150, dietaryType: "Veg", cuisine: "South Indian", taste: "Medium", course: "MAIN", desc: "Mysore masala dosa loaded with gooey cheese." },
  { id: 30, name: "Ghee Mysore Masala", category: "South Indian / Snacks", price: 110, dietaryType: "Veg", cuisine: "South Indian", taste: "Spicy", course: "MAIN", desc: "Ghee-roasted spicy Mysore dosa with potato masala." },
  { id: 31, name: "Rava Dosa Sada", category: "South Indian / Snacks", price: 100, dietaryType: "Vegan", cuisine: "South Indian", taste: "Mild", course: "MAIN", desc: "Net-textured crispy semolina crepe." },
  { id: 32, name: "Cheese Rava Sada Dosa", category: "South Indian / Snacks", price: 120, dietaryType: "Veg", cuisine: "South Indian", taste: "Mild", course: "MAIN", desc: "Crispy semolina dosa topped with cheese." },
  { id: 33, name: "Ghee Rava", category: "South Indian / Snacks", price: 110, dietaryType: "Veg", cuisine: "South Indian", taste: "Mild", course: "MAIN", desc: "Rava dosa prepared with golden ghee." },
  { id: 34, name: "Ragi Rava Dosa", category: "South Indian / Snacks", price: 95, dietaryType: "Vegan", cuisine: "South Indian", taste: "Mild", course: "MAIN", desc: "Nutritious finger millet and semolina dosa." },
  { id: 35, name: "Ragi Rava Masala", category: "South Indian / Snacks", price: 100, dietaryType: "Vegan", cuisine: "South Indian", taste: "Medium", course: "MAIN", desc: "Ragi crepe with flavorful aloo masala." },
  { id: 36, name: "Rava Masala", category: "South Indian / Snacks", price: 110, dietaryType: "Vegan", cuisine: "South Indian", taste: "Medium", course: "MAIN", desc: "Semolina crepe filled with spiced potato masala." },
  { id: 37, name: "Ghee Rava Masala", category: "South Indian / Snacks", price: 120, dietaryType: "Veg", cuisine: "South Indian", taste: "Medium", course: "MAIN", desc: "Ghee-roasted semolina crepe with potato filling." },
  { id: 38, name: "Cheese Rava Masala", category: "South Indian / Snacks", price: 125, dietaryType: "Veg", cuisine: "South Indian", taste: "Medium", course: "MAIN", desc: "Rava masala dosa with shredded cheese." },
  { id: 39, name: "Onion Rava Dosa", category: "South Indian / Snacks", price: 125, dietaryType: "Vegan", cuisine: "South Indian", taste: "Medium", course: "MAIN", desc: "Crispy semolina crepe studded with finely chopped onions." },
  { id: 40, name: "Onion Rava Masala", category: "South Indian / Snacks", price: 130, dietaryType: "Vegan", cuisine: "South Indian", taste: "Medium", course: "MAIN", desc: "Onion rava crepe with potato masala filling." },
  { id: 41, name: "Ghee Onion Rava", category: "South Indian / Snacks", price: 100, dietaryType: "Veg", cuisine: "South Indian", taste: "Medium", course: "MAIN", desc: "Onion semolina dosa cooked in desi ghee." },
  { id: 42, name: "Ghee Onion Rava Masala", category: "South Indian / Snacks", price: 110, dietaryType: "Veg", cuisine: "South Indian", taste: "Medium", course: "MAIN", desc: "Rich ghee onion rava with potato bhaji." },
  { id: 43, name: "Uttappa", category: "South Indian / Snacks", price: 80, dietaryType: "Vegan", cuisine: "South Indian", taste: "Mild", course: "MAIN", desc: "Thick savory rice pancake." },
  { id: 44, name: "Ghee Uttappa", category: "South Indian / Snacks", price: 85, dietaryType: "Veg", cuisine: "South Indian", taste: "Mild", course: "MAIN", desc: "Thick savory pancake cooked in pure ghee." },
  { id: 45, name: "Onion Uttappa", category: "South Indian / Snacks", price: 85, dietaryType: "Vegan", cuisine: "South Indian", taste: "Medium", course: "MAIN", desc: "Thick pancake topped with caramelized onions." },
  { id: 46, name: "Cheese Onion Uttappa", category: "South Indian / Snacks", price: 120, dietaryType: "Veg", cuisine: "South Indian", taste: "Mild", course: "MAIN", desc: "Onion pancake topped with melted cheese." },
  { id: 47, name: "Ghee Onion Uttappa", category: "South Indian / Snacks", price: 90, dietaryType: "Veg", cuisine: "South Indian", taste: "Medium", course: "MAIN", desc: "Onion pancake prepared with aromatic ghee." },
  { id: 48, name: "Tomato Uttappa", category: "South Indian / Snacks", price: 85, dietaryType: "Vegan", cuisine: "South Indian", taste: "Mild", course: "MAIN", desc: "Savory pancake topped with juicy tomatoes." },
  { id: 49, name: "Ghee Tomato Uttappa", category: "South Indian / Snacks", price: 90, dietaryType: "Veg", cuisine: "South Indian", taste: "Mild", course: "MAIN", desc: "Tomato pancake roasted with desi ghee." },
  { id: 50, name: "Tomato Onion Uttappa", category: "South Indian / Snacks", price: 90, dietaryType: "Vegan", cuisine: "South Indian", taste: "Medium", course: "MAIN", desc: "Pancake topped with diced tomatoes and crunchy onions." },
  { id: 51, name: "Tomato Omelette", category: "South Indian / Snacks", price: 95, dietaryType: "Vegan", cuisine: "Indian", taste: "Medium", course: "STARTER", desc: "Vegetarian gram flour pancake with tomatoes and herbs." },
  { id: 52, name: "Ghee Tomato Omelette", category: "South Indian / Snacks", price: 100, dietaryType: "Veg", cuisine: "Indian", taste: "Medium", course: "STARTER", desc: "Besan tomato omelette cooked in desi ghee." },
  { id: 53, name: "Idli Fry", category: "South Indian / Snacks", price: 90, dietaryType: "Vegan", cuisine: "South Indian", taste: "Medium", course: "STARTER", desc: "Crispy pan-fried idli cubes tossed with mustard spices." },
  { id: 54, name: "Butter Idli", category: "South Indian / Snacks", price: 90, dietaryType: "Veg", cuisine: "South Indian", taste: "Mild", course: "STARTER", desc: "Steamed hot idlis topped with melted butter." },
  { id: 55, name: "Veg Cutlet", category: "South Indian / Snacks", price: 90, dietaryType: "Vegan", cuisine: "Indian", taste: "Medium", course: "STARTER", desc: "Crispy breadcrumbed spiced vegetable patties." },
  { id: 56, name: "Punjabi Samosa", category: "South Indian / Snacks", price: 90, dietaryType: "Vegan", cuisine: "Punjabi", taste: "Medium", course: "STARTER", desc: "Crispy pastry stuffed with spiced potatoes and green peas (2 pcs)." },
  { id: 57, name: "Veg Patties", category: "South Indian / Snacks", price: 90, dietaryType: "Vegan", cuisine: "Indian", taste: "Medium", course: "STARTER", desc: "Flaky baked puff pastry filled with mixed vegetables." },
  { id: 58, name: "Finger Chips", category: "South Indian / Snacks", price: 100, dietaryType: "Vegan", cuisine: "Continental", taste: "Mild", course: "STARTER", desc: "Crispy golden fried potato french fries." },
  { id: 59, name: "Puri Bhaji", category: "South Indian / Snacks", price: 100, dietaryType: "Vegan", cuisine: "Indian", taste: "Medium", course: "MAIN", desc: "Puffed wheat puris served with spiced potato bhaji." },
  { id: 60, name: "Puri", category: "South Indian / Snacks", price: 45, dietaryType: "Vegan", cuisine: "Indian", taste: "Mild", course: "BREAD", desc: "Plate of freshly puffed whole wheat puris (4 pcs)." },
  { id: 61, name: "Dahi Vada", category: "South Indian / Snacks", price: 110, dietaryType: "Veg", cuisine: "Indian", taste: "Mild", course: "STARTER", desc: "Lentil dumplings soaked in sweet and spiced chilled yoghurt." },
  { id: 62, name: "Dahi Idli", category: "South Indian / Snacks", price: 120, dietaryType: "Veg", cuisine: "South Indian", taste: "Mild", course: "STARTER", desc: "Steamed idlis immersed in seasoned yoghurt with boondi." },
  { id: 63, name: "Misal", category: "South Indian / Snacks", price: 95, dietaryType: "Vegan", cuisine: "Indian", taste: "Spicy", course: "MAIN", desc: "Fiery sprouted moth bean gravy topped with farsan." },
  { id: 64, name: "Dahi Misal", category: "South Indian / Snacks", price: 95, dietaryType: "Veg", cuisine: "Indian", taste: "Medium", course: "MAIN", desc: "Spicy misal balanced with fresh cool yoghurt." },
  { id: 65, name: "Kachori", category: "South Indian / Snacks", price: 95, dietaryType: "Vegan", cuisine: "Indian", taste: "Spicy", course: "STARTER", desc: "Flaky crispy round pastry filled with spiced lentils." },
  { id: 66, name: "Sabudana Khichadi", category: "South Indian / Snacks", price: 120, dietaryType: "Vegan", cuisine: "Indian", taste: "Mild", course: "MAIN", desc: "Tapioca pearls sauteed with crushed peanuts and potatoes." },
  { id: 67, name: "Sabudana Vada", category: "South Indian / Snacks", price: 95, dietaryType: "Vegan", cuisine: "Indian", taste: "Medium", course: "STARTER", desc: "Deep-fried crispy sago and potato patties." },

  // ================= VEG PAKODA =================
  { id: 68, name: "Veg Pakoda", category: "Veg Pakoda", price: 100, dietaryType: "Vegan", cuisine: "Indian", taste: "Medium", course: "STARTER", desc: "Assorted seasonal vegetables coated in spiced gram flour batter." },
  { id: 69, name: "Paneer Pakoda", category: "Veg Pakoda", price: 135, dietaryType: "Veg", cuisine: "Indian", taste: "Mild", course: "STARTER", desc: "Fresh cottage cheese fritters fried to golden perfection." },
  { id: 70, name: "Cheese Pakoda", category: "Veg Pakoda", price: 135, dietaryType: "Veg", cuisine: "Indian", taste: "Mild", course: "STARTER", desc: "Crispy batter-fried cheddar cheese fritters." },
  { id: 71, name: "Onion Bhajia", category: "Veg Pakoda", price: 100, dietaryType: "Vegan", cuisine: "Indian", taste: "Medium", course: "STARTER", desc: "Crispy sliced onion fritters seasoned with ajwain." },

  // ================= PAV BHAJI =================
  { id: 72, name: "Pav Bhaji", category: "Pav Bhaji", price: 140, dietaryType: "Veg", cuisine: "Indian", taste: "Medium", course: "MAIN", desc: "Spiced mashed vegetable curry served with butter-toasted pav." },
  { id: 73, name: "Jain Pav Bhaji", category: "Pav Bhaji", price: 150, dietaryType: "Veg", cuisine: "Indian", taste: "Medium", course: "MAIN", desc: "Special pav bhaji made without onions and garlic." },
  { id: 74, name: "Cheese Pav Bhaji", category: "Pav Bhaji", price: 160, dietaryType: "Veg", cuisine: "Indian", taste: "Mild", course: "MAIN", desc: "Rich pav bhaji generously topped with grated processed cheese." },
  { id: 75, name: "Paneer Pav Bhaji", category: "Pav Bhaji", price: 160, dietaryType: "Veg", cuisine: "Indian", taste: "Medium", course: "MAIN", desc: "Pav bhaji studded with soft cottage cheese cubes." },
  { id: 76, name: "Paneer Masala Pav", category: "Pav Bhaji", price: 160, dietaryType: "Veg", cuisine: "Indian", taste: "Spicy", course: "STARTER", desc: "Soft pav stuffed with spicy paneer masala and butter." },
  { id: 77, name: "Extra Pav (2 pcs)", category: "Pav Bhaji", price: 30, dietaryType: "Veg", cuisine: "Indian", taste: "Mild", course: "BREAD", desc: "Pair of warm butter-toasted bread rolls." },
  { id: 78, name: "Masala Pav (2 pcs)", category: "Pav Bhaji", price: 80, dietaryType: "Veg", cuisine: "Indian", taste: "Spicy", course: "BREAD", desc: "Pav pan-tossed in buttery spiced tomato gravy." },

  // ================= LUNCH SERVICES =================
  { id: 79, name: "Punjabi Lunch", category: "Lunch Services", price: 183, dietaryType: "Veg", cuisine: "Punjabi", taste: "Medium", course: "MAIN", desc: "Full thali with 2 curries, dal, rice, rotis, salad and sweet." },
  { id: 80, name: "Lunch", category: "Lunch Services", price: 140, dietaryType: "Veg", cuisine: "Indian", taste: "Medium", course: "MAIN", desc: "Standard wholesome vegetarian lunch thali." }, // Preferred price
  { id: 81, name: "Dinner", category: "Lunch Services", price: 160, dietaryType: "Veg", cuisine: "Indian", taste: "Medium", course: "MAIN", desc: "Evening dinner meal with variety curries, dal and rotis." }, // Preferred price
  { id: 82, name: "Lunch with Pulav", category: "Lunch Services", price: 180, dietaryType: "Veg", cuisine: "Indian", taste: "Medium", course: "MAIN", desc: "Lunch thali featuring fragrant vegetable pulav." }, // Preferred price

  // ================= VEG GRAVY / MAIN COURSE =================
  { id: 83, name: "Paneer Kadai", category: "Veg Gravy / Main Course", price: 180, dietaryType: "Veg", cuisine: "Indian", taste: "Spicy", course: "MAIN", desc: "Cottage cheese and bell peppers cooked in freshly pounded kadai masala." },
  { id: 84, name: "Mix Veg", category: "Veg Gravy / Main Course", price: 140, dietaryType: "Vegan", cuisine: "Indian", taste: "Medium", course: "MAIN", desc: "Assorted garden vegetables in spiced onion tomato gravy." },
  { id: 85, name: "Dum Aloo Punjabi", category: "Veg Gravy / Main Course", price: 160, dietaryType: "Vegan", cuisine: "Punjabi", taste: "Medium", course: "MAIN", desc: "Baby potatoes slow-cooked in rich spiced Kashmiri style gravy." },
  { id: 86, name: "Veg Hyderabadi", category: "Veg Gravy / Main Course", price: 150, dietaryType: "Veg", cuisine: "Indian", taste: "Spicy", course: "MAIN", desc: "Mixed vegetables simmered in spicy spinach-infused green gravy." },
  { id: 87, name: "Baby Corn Masala", category: "Veg Gravy / Main Course", price: 160, dietaryType: "Vegan", cuisine: "Indian", taste: "Medium", course: "MAIN", desc: "Tender baby corn spears in spiced onion tomato masala." },
  { id: 88, name: "Baby Corn Mushroom Masala", category: "Veg Gravy / Main Course", price: 160, dietaryType: "Vegan", cuisine: "Indian", taste: "Medium", course: "MAIN", desc: "Fresh button mushrooms and baby corn in rich masala gravy." },
  { id: 89, name: "Veg Kotta", category: "Veg Gravy / Main Course", price: 160, dietaryType: "Veg", cuisine: "Indian", taste: "Medium", course: "MAIN", desc: "Mixed vegetable dumplings simmered in savory golden gravy." },
  { id: 90, name: "Mushroom Kadai", category: "Veg Gravy / Main Course", price: 160, dietaryType: "Vegan", cuisine: "Indian", taste: "Spicy", course: "MAIN", desc: "Wok-cooked button mushrooms with capsicum in kadai gravy." },
  { id: 91, name: "Mushroom Paneer Masala", category: "Veg Gravy / Main Course", price: 160, dietaryType: "Veg", cuisine: "Indian", taste: "Medium", course: "MAIN", desc: "Hearty combination of paneer and button mushrooms in curry." },
  { id: 92, name: "Mushroom Palak", category: "Veg Gravy / Main Course", price: 160, dietaryType: "Vegan", cuisine: "Indian", taste: "Mild", course: "MAIN", desc: "Fresh mushrooms cooked in smooth spiced spinach puree." },
  { id: 93, name: "Lasoon Methi", category: "Veg Gravy / Main Course", price: 150, dietaryType: "Vegan", cuisine: "Indian", taste: "Medium", course: "MAIN", desc: "Fresh fenugreek leaves tempered with golden garlic cloves." },
  { id: 94, name: "Lasoon Palak", category: "Veg Gravy / Main Course", price: 150, dietaryType: "Vegan", cuisine: "Indian", taste: "Mild", course: "MAIN", desc: "Spinach puree enhanced with roasted garlic and spices." },

  // ================= RAITA & SALAD =================
  { id: 95, name: "Veg Raita", category: "Raita", price: 55, dietaryType: "Veg", cuisine: "Indian", taste: "Mild", course: "ACCOMPANIMENT", desc: "Chilled whipped yoghurt with cucumbers, onions and cumin." },
  { id: 96, name: "Bundi Raita", category: "Raita", price: 55, dietaryType: "Veg", cuisine: "Indian", taste: "Mild", course: "ACCOMPANIMENT", desc: "Crispy chickpea flour pearls in seasoned cool yoghurt." },
  { id: 97, name: "Pineapple Raita", category: "Raita", price: 120, dietaryType: "Veg", cuisine: "Indian", taste: "Mild", course: "ACCOMPANIMENT", desc: "Sweet and tangy diced pineapples in chilled creamy yoghurt." },
  { id: 98, name: "Green Salad", category: "Salad", price: 65, dietaryType: "Vegan", cuisine: "Indian", taste: "Mild", course: "ACCOMPANIMENT", desc: "Fresh sliced cucumbers, tomatoes, carrots and onions with lemon." },
  { id: 99, name: "Kakdi Salad", category: "Salad", price: 60, dietaryType: "Vegan", cuisine: "Indian", taste: "Mild", course: "ACCOMPANIMENT", desc: "Freshly sliced garden cucumbers tossed with chaat seasoning." },
  { id: 100, name: "Fruit Salad", category: "Salad", price: 90, dietaryType: "Vegan", cuisine: "Indian", taste: "Mild", course: "DESSERT", desc: "Fresh seasonal chopped fruits tossed with honey dressing." }, // Preferred price

  // ================= SPECIAL RICE DISHES =================
  { id: 101, name: "Dal Khichdi", category: "Special Rice Dishes", price: 145, dietaryType: "Veg", cuisine: "Indian", taste: "Mild", course: "RICE", desc: "Comforting blend of rice and yellow lentils tempered with ghee." },
  { id: 102, name: "Palak Khichdi", category: "Special Rice Dishes", price: 145, dietaryType: "Veg", cuisine: "Indian", taste: "Mild", course: "RICE", desc: "Wholesome dal khichdi infused with nutrient-rich spinach." },
  { id: 103, name: "Green Peas Pulav", category: "Special Rice Dishes", price: 150, dietaryType: "Vegan", cuisine: "Indian", taste: "Mild", course: "RICE", desc: "Long-grain basmati rice cooked with sweet green peas." },
  { id: 104, name: "Biryani", category: "Special Rice Dishes", price: 150, dietaryType: "Veg", cuisine: "Indian", taste: "Medium", course: "RICE", desc: "Traditional aromatic spiced vegetable dum biryani." },
  { id: 105, name: "Kashmiri Pulav", category: "Special Rice Dishes", price: 160, dietaryType: "Veg", cuisine: "Indian", taste: "Mild", course: "RICE", desc: "Sweet fragrant basmati rice garnished with dry fruits and saffron." },
  { id: 106, name: "Kashmiri Biryani", category: "Special Rice Dishes", price: 160, dietaryType: "Veg", cuisine: "Indian", taste: "Mild", course: "RICE", desc: "Exotic layered biryani cooked with nuts, raisins and mild spices." },
  { id: 107, name: "Paneer Pulav", category: "Special Rice Dishes", price: 160, dietaryType: "Veg", cuisine: "Indian", taste: "Medium", course: "RICE", desc: "Basmati rice tossed with sauteed cottage cheese cubes." },
  { id: 108, name: "Cheese Pulav", category: "Special Rice Dishes", price: 160, dietaryType: "Veg", cuisine: "Indian", taste: "Mild", course: "RICE", desc: "Fluffy seasoned rice folded with melted cheddar cheese." },
  { id: 109, name: "Paneer Biryani", category: "Special Rice Dishes", price: 170, dietaryType: "Veg", cuisine: "Indian", taste: "Medium", course: "RICE", desc: "Marinated paneer chunks layered with spiced saffron basmati rice." },
  { id: 110, name: "Veg Biryani", category: "Special Rice Dishes", price: 150, dietaryType: "Veg", cuisine: "Indian", taste: "Medium", course: "RICE", desc: "Hyderabadi style vegetable biryani served with salan." },
  { id: 111, name: "Veg Pulav", category: "Special Rice Dishes", price: 130, dietaryType: "Vegan", cuisine: "Indian", taste: "Mild", course: "RICE", desc: "Classic steamed basmati rice with diced garden vegetables." },

  // ================= TANDOORI BREADS =================
  { id: 112, name: "Wheat Roti", category: "Tandoori", price: 22, dietaryType: "Vegan", cuisine: "Indian", taste: "Mild", course: "BREAD", desc: "Whole wheat flatbread baked in clay oven." },
  { id: 113, name: "Butter Roti", category: "Tandoori", price: 26, dietaryType: "Veg", cuisine: "Indian", taste: "Mild", course: "BREAD", desc: "Clay-oven baked whole wheat roti brushed with fresh butter." },
  { id: 114, name: "Naan", category: "Tandoori", price: 40, dietaryType: "Vegan", cuisine: "Indian", taste: "Mild", course: "BREAD", desc: "Traditional leavened white flour flatbread baked on tandoor walls." },
  { id: 115, name: "Butter Naan", category: "Tandoori", price: 45, dietaryType: "Veg", cuisine: "Indian", taste: "Mild", course: "BREAD", desc: "Crispy-soft leavened naan topped with melted butter." },
  { id: 116, name: "Garlic Naan", category: "Tandoori", price: 45, dietaryType: "Vegan", cuisine: "Indian", taste: "Medium", course: "BREAD", desc: "Tandoor bread infused with chopped roasted garlic." },
  { id: 117, name: "Butter Garlic Naan", category: "Tandoori", price: 50, dietaryType: "Veg", cuisine: "Indian", taste: "Medium", course: "BREAD", desc: "Roasted garlic naan brushed with golden butter." },
  { id: 118, name: "Cheese Naan", category: "Tandoori", price: 50, dietaryType: "Veg", cuisine: "Indian", taste: "Mild", course: "BREAD", desc: "Naan bread stuffed with melted cheese." },
  { id: 119, name: "Cheese Garlic Naan", category: "Tandoori", price: 55, dietaryType: "Veg", cuisine: "Indian", taste: "Medium", course: "BREAD", desc: "Stuffed cheese naan seasoned with minced garlic and herbs." },
  { id: 120, name: "Paratha", category: "Tandoori", price: 35, dietaryType: "Vegan", cuisine: "Indian", taste: "Mild", course: "BREAD", desc: "Layered flaky whole wheat tandoori paratha." },
  { id: 121, name: "Butter Paratha", category: "Tandoori", price: 40, dietaryType: "Veg", cuisine: "Indian", taste: "Mild", course: "BREAD", desc: "Crispy layered paratha coated in butter." },
  { id: 122, name: "Aloo Paratha", category: "Tandoori", price: 60, dietaryType: "Vegan", cuisine: "Punjabi", taste: "Medium", course: "BREAD", desc: "Whole wheat flatbread stuffed with spiced potato mash." },
  { id: 123, name: "Stuff Paratha", category: "Tandoori", price: 60, dietaryType: "Vegan", cuisine: "Indian", taste: "Medium", course: "BREAD", desc: "Tandoori flatbread stuffed with mixed seasoned vegetables." },
  { id: 124, name: "Veg Paratha", category: "Tandoori", price: 60, dietaryType: "Vegan", cuisine: "Indian", taste: "Medium", course: "BREAD", desc: "Spiced grated vegetable paratha baked in tandoor." },
  { id: 125, name: "Methi Roti", category: "Tandoori", price: 25, dietaryType: "Vegan", cuisine: "Indian", taste: "Mild", course: "BREAD", desc: "Whole wheat roti kneaded with fresh fenugreek leaves." },
  { id: 126, name: "Methi Paratha", category: "Tandoori", price: 40, dietaryType: "Vegan", cuisine: "Indian", taste: "Mild", course: "BREAD", desc: "Layered tandoori flatbread with fragrant methi greens." },
  { id: 127, name: "Chapati", category: "Tandoori", price: 15, dietaryType: "Vegan", cuisine: "Indian", taste: "Mild", course: "BREAD", desc: "Thin homestyle whole wheat tawa phulka." },
  { id: 128, name: "Butter Chapati", category: "Tandoori", price: 16, dietaryType: "Veg", cuisine: "Indian", taste: "Mild", course: "BREAD", desc: "Soft tawa chapati brushed with butter." },

  // ================= PAPAD =================
  { id: 129, name: "Masala Papad", category: "Papad", price: 35, dietaryType: "Vegan", cuisine: "Indian", taste: "Medium", course: "ACCOMPANIMENT", desc: "Fried lentil papad topped with spicy onion tomato kachumber." },
  { id: 130, name: "Roasted Masala Papad", category: "Papad", price: 10, dietaryType: "Vegan", cuisine: "Indian", taste: "Medium", course: "ACCOMPANIMENT", desc: "Fire-roasted papad sprinkled with chaat spices." },
  { id: 131, name: "Khicha Papad", category: "Papad", price: 40, dietaryType: "Vegan", cuisine: "Indian", taste: "Mild", course: "ACCOMPANIMENT", desc: "Traditional rice flour khicha papad." },
  { id: 132, name: "Khicha Masala Papad", category: "Papad", price: 45, dietaryType: "Vegan", cuisine: "Indian", taste: "Medium", course: "ACCOMPANIMENT", desc: "Rice khicha topped with chopped salad and tangy spices." },
  { id: 133, name: "Fry Papad", category: "Papad", price: 15, dietaryType: "Vegan", cuisine: "Indian", taste: "Mild", course: "ACCOMPANIMENT", desc: "Crisp golden deep-fried urad dal papad." },
  { id: 134, name: "Roasted Papad", category: "Papad", price: 8, dietaryType: "Vegan", cuisine: "Indian", taste: "Mild", course: "ACCOMPANIMENT", desc: "Dry roasted crunchy lentil wafer." },

  // ================= SOUPS =================
  { id: 135, name: "Tomato Soup", category: "Soups", price: 115, dietaryType: "Veg", cuisine: "Continental", taste: "Mild", course: "STARTER", desc: "Velvety ripe tomato soup served with croutons." },
  { id: 136, name: "Mushroom Soup", category: "Soups", price: 120, dietaryType: "Veg", cuisine: "Continental", taste: "Mild", course: "STARTER", desc: "Creamy earthy button mushroom soup." },
  { id: 137, name: "Sweet Corn Soup", category: "Soups", price: 120, dietaryType: "Veg", cuisine: "Chinese", taste: "Mild", course: "STARTER", desc: "Comforting sweet corn broth with tender kernels." },
  { id: 138, name: "Veg Manchow Soup", category: "Soups", price: 120, dietaryType: "Vegan", cuisine: "Chinese", taste: "Spicy", course: "STARTER", desc: "Spicy Indo-Chinese soup topped with crispy fried noodles." },
  { id: 139, name: "Veg Clear Soup", category: "Soups", price: 120, dietaryType: "Vegan", cuisine: "Chinese", taste: "Mild", course: "STARTER", desc: "Light aromatic vegetable broth with finely diced greens." },
  { id: 140, name: "Veg Lemon Coriander Soup", category: "Soups", price: 130, dietaryType: "Vegan", cuisine: "Chinese", taste: "Mild", course: "STARTER", desc: "Tangy clear broth infused with fresh lemon juice and cilantro." },
  { id: 141, name: "Hot & Sour Soup", category: "Soups", price: 120, dietaryType: "Vegan", cuisine: "Chinese", taste: "Spicy", course: "STARTER", desc: "Pungent spicy and sour broth packed with shredded vegetables." },
  { id: 142, name: "Babycorn Soup", category: "Soups", price: 120, dietaryType: "Veg", cuisine: "Chinese", taste: "Mild", course: "STARTER", desc: "Warm mild broth studded with tender baby corn slices." },
  { id: 143, name: "Veg Noodle Soup", category: "Soups", price: 120, dietaryType: "Vegan", cuisine: "Chinese", taste: "Mild", course: "STARTER", desc: "Hearty broth loaded with soft noodles and vegetables." },
  { id: 144, name: "Babycorn Clear Soup", category: "Soups", price: 120, dietaryType: "Vegan", cuisine: "Chinese", taste: "Mild", course: "STARTER", desc: "Light clear broth with crunchy baby corn." },
  { id: 145, name: "Babycorn Noodle Soup", category: "Soups", price: 120, dietaryType: "Vegan", cuisine: "Chinese", taste: "Mild", course: "STARTER", desc: "Flavorful noodle broth with sweet baby corn." },
  { id: 146, name: "Palak Soup", category: "Soups", price: 120, dietaryType: "Veg", cuisine: "Indian", taste: "Mild", course: "STARTER", desc: "Nutritious creamy puree of fresh garden spinach." },

  // ================= SWEETS / DESSERTS =================
  { id: 147, name: "Shrikhand", category: "Sweets", price: 100, dietaryType: "Veg", cuisine: "Indian", taste: "Mild", course: "DESSERT", desc: "Traditional sweetened strained yoghurt flavored with cardamom." },
  { id: 148, name: "Shrikhand Puri", category: "Sweets", price: 140, dietaryType: "Veg", cuisine: "Indian", taste: "Mild", course: "MAIN", desc: "Hot puffed puris served with sweet chilled shrikhand." },
  { id: 149, name: "Gulab Jamun", category: "Sweets", price: 35, dietaryType: "Veg", cuisine: "Indian", taste: "Mild", course: "DESSERT", desc: "Warm milk-solid dumpling soaked in fragrant rose sugar syrup." },
  { id: 150, name: "Rasgulla", category: "Sweets", price: 80, dietaryType: "Veg", cuisine: "Indian", taste: "Mild", course: "DESSERT", desc: "Spongy cottage cheese balls soaked in light sugar syrup (2 pcs)." },
  { id: 151, name: "Ras Malai", category: "Sweets", price: 80, dietaryType: "Veg", cuisine: "Indian", taste: "Mild", course: "DESSERT", desc: "Delicate paneer discs steeped in thickened saffron cardamom milk." },
  { id: 152, name: "Malai Sandwich", category: "Sweets", price: 140, dietaryType: "Veg", cuisine: "Indian", taste: "Mild", course: "DESSERT", desc: "Layered sweet Bengali paneer confection with rich mawa." },

  // ================= SANDWICH CORNER =================
  { id: 153, name: "Bread Butter", category: "Sandwich Corner", price: 40, dietaryType: "Veg", cuisine: "Continental", taste: "Mild", course: "STARTER", desc: "Fresh bread slices with creamy butter." },
  { id: 154, name: "Toast Butter", category: "Sandwich Corner", price: 50, dietaryType: "Veg", cuisine: "Continental", taste: "Mild", course: "STARTER", desc: "Crispy golden toasted bread with melted butter." },
  { id: 155, name: "Veg Sandwich", category: "Sandwich Corner", price: 75, dietaryType: "Veg", cuisine: "Continental", taste: "Mild", course: "STARTER", desc: "Triple layered sandwich with cucumbers, tomatoes and mint chutney." },
  { id: 156, name: "Veg Toast Sandwich", category: "Sandwich Corner", price: 80, dietaryType: "Veg", cuisine: "Continental", taste: "Mild", course: "STARTER", desc: "Grilled vegetable sandwich with spices and butter." },
  { id: 157, name: "Cheese Sandwich", category: "Sandwich Corner", price: 90, dietaryType: "Veg", cuisine: "Continental", taste: "Mild", course: "STARTER", desc: "Fresh white bread with thick cheddar cheese slice." },
  { id: 158, name: "Cheese Toast Sandwich", category: "Sandwich Corner", price: 90, dietaryType: "Veg", cuisine: "Continental", taste: "Mild", course: "STARTER", desc: "Crisp grilled sandwich stuffed with melted cheese." },
  { id: 159, name: "Omlette Sandwich", category: "Sandwich Corner", price: 95, dietaryType: "Vegan", cuisine: "Continental", taste: "Medium", course: "STARTER", desc: "Savory vegetarian tomato-besan omelette bread sandwich." },
  { id: 160, name: "Omlette Toast Sandwich", category: "Sandwich Corner", price: 120, dietaryType: "Vegan", cuisine: "Continental", taste: "Medium", course: "STARTER", desc: "Toasted sandwich with spiced vegetarian omelette." },
  { id: 161, name: "Paneer Sandwich", category: "Sandwich Corner", price: 125, dietaryType: "Veg", cuisine: "Indian", taste: "Mild", course: "STARTER", desc: "Soft sandwich with marinated cottage cheese cubes." },
  { id: 162, name: "Paneer Toast Sandwich", category: "Sandwich Corner", price: 130, dietaryType: "Veg", cuisine: "Indian", taste: "Medium", course: "STARTER", desc: "Grilled sandwich loaded with spiced paneer filling." },
  { id: 163, name: "Club Sandwich", category: "Sandwich Corner", price: 130, dietaryType: "Veg", cuisine: "Continental", taste: "Medium", course: "STARTER", desc: "Double-decker toasted sandwich packed with cheese and veggies." },

  // ================= PUNJABI DISHES =================
  { id: 164, name: "Dal Fry", category: "Punjabi Dishes", price: 120, dietaryType: "Vegan", cuisine: "Punjabi", taste: "Medium", course: "MAIN", desc: "Yellow lentils pan-fried with onions, tomatoes and garlic." },
  { id: 165, name: "Butter Dal Fry", category: "Punjabi Dishes", price: 125, dietaryType: "Veg", cuisine: "Punjabi", taste: "Medium", course: "MAIN", desc: "Pan-fried dal finished with a generous dollop of butter." },
  { id: 166, name: "Plain Dal", category: "Punjabi Dishes", price: 65, dietaryType: "Vegan", cuisine: "Punjabi", taste: "Mild", course: "MAIN", desc: "Simple boiled yellow lentils lightly seasoned with turmeric." },
  { id: 167, name: "Paneer Chana", category: "Punjabi Dishes", price: 130, dietaryType: "Veg", cuisine: "Punjabi", taste: "Medium", course: "MAIN", desc: "Chickpeas and cottage cheese in robust onion masala." },
  { id: 168, name: "Dal Tadka", category: "Punjabi Dishes", price: 130, dietaryType: "Vegan", cuisine: "Punjabi", taste: "Medium", course: "MAIN", desc: "Simmered lentils tempered with sizzling cumin and red chillies." },
  { id: 169, name: "Chana Masala", category: "Punjabi Dishes", price: 110, dietaryType: "Vegan", cuisine: "Punjabi", taste: "Medium", course: "MAIN", desc: "Tender chickpeas simmered in authentic Punjabi amchur spices." },
  { id: 170, name: "Aloo Mutter", category: "Punjabi Dishes", price: 120, dietaryType: "Vegan", cuisine: "Punjabi", taste: "Mild", course: "MAIN", desc: "Potatoes and fresh green peas in spiced tomato gravy." },
  { id: 171, name: "Veg Kurma", category: "Punjabi Dishes", price: 135, dietaryType: "Veg", cuisine: "Punjabi", taste: "Mild", course: "MAIN", desc: "Mixed vegetables cooked in mild coconut and cashew sauce." },
  { id: 172, name: "Peas Gobi", category: "Punjabi Dishes", price: 125, dietaryType: "Vegan", cuisine: "Punjabi", taste: "Medium", course: "MAIN", desc: "Cauliflower florets and sweet peas sauteed with ginger and cumin." },
  { id: 173, name: "Aloo Gobi", category: "Punjabi Dishes", price: 100, dietaryType: "Vegan", cuisine: "Punjabi", taste: "Medium", course: "MAIN", desc: "Classic dry-tossed potatoes and cauliflower with coriander." },
  { id: 174, name: "Green Peas Masala", category: "Punjabi Dishes", price: 140, dietaryType: "Vegan", cuisine: "Punjabi", taste: "Medium", course: "MAIN", desc: "Green peas simmered in rich spiced onion gravy." },
  { id: 175, name: "Green Peas Palak", category: "Punjabi Dishes", price: 140, dietaryType: "Vegan", cuisine: "Punjabi", taste: "Mild", course: "MAIN", desc: "Sweet peas cooked in fresh vibrant spinach sauce." },
  { id: 176, name: "Baingan Masala", category: "Punjabi Dishes", price: 125, dietaryType: "Vegan", cuisine: "Punjabi", taste: "Medium", course: "MAIN", desc: "Baby eggplants cooked in roasted peanut and sesame gravy." },
  { id: 177, name: "Baingan Bhartha", category: "Punjabi Dishes", price: 145, dietaryType: "Vegan", cuisine: "Punjabi", taste: "Medium", course: "MAIN", desc: "Smoky roasted mashed aubergine cooked with onions and chillies." },
  { id: 178, name: "Bhendi Masala", category: "Punjabi Dishes", price: 120, dietaryType: "Vegan", cuisine: "Punjabi", taste: "Medium", course: "MAIN", desc: "Tender okra sauteed in tomato onion masala." },
  { id: 179, name: "Bhendi Fry", category: "Punjabi Dishes", price: 130, dietaryType: "Vegan", cuisine: "Punjabi", taste: "Medium", course: "MAIN", desc: "Crispy pan-fried ladyfingers with dry ground spices." },
  { id: 180, name: "Aloo Bhendi", category: "Punjabi Dishes", price: 125, dietaryType: "Vegan", cuisine: "Punjabi", taste: "Medium", course: "MAIN", desc: "Homestyle stir-fry of potatoes and okra." },
  { id: 181, name: "Bhendi Oil Fry", category: "Punjabi Dishes", price: 125, dietaryType: "Vegan", cuisine: "Punjabi", taste: "Medium", course: "MAIN", desc: "Deep fried crunchy okra with chaat masala." },
  { id: 182, name: "Aloo Palak", category: "Punjabi Dishes", price: 130, dietaryType: "Vegan", cuisine: "Punjabi", taste: "Mild", course: "MAIN", desc: "Potatoes cooked in seasoned spinach puree." },
  { id: 183, name: "Palak Tadka", category: "Punjabi Dishes", price: 120, dietaryType: "Vegan", cuisine: "Punjabi", taste: "Medium", course: "MAIN", desc: "Pureed spinach tempered with browned garlic and whole chillies." },
  { id: 184, name: "Tomato Fry / Masala", category: "Punjabi Dishes", price: 110, dietaryType: "Vegan", cuisine: "Punjabi", taste: "Medium", course: "MAIN", desc: "Sauteed tomatoes with spicy onion gravy." },
  { id: 185, name: "Tomato Bartha", category: "Punjabi Dishes", price: 130, dietaryType: "Vegan", cuisine: "Punjabi", taste: "Medium", course: "MAIN", desc: "Fire-roasted crushed tomatoes with mustard seasoning." },
  { id: 186, name: "Stuff Tomato", category: "Punjabi Dishes", price: 130, dietaryType: "Veg", cuisine: "Punjabi", taste: "Medium", course: "MAIN", desc: "Whole tomatoes stuffed with paneer and nuts in curry." },
  { id: 187, name: "Green Peas Tomato", category: "Punjabi Dishes", price: 110, dietaryType: "Vegan", cuisine: "Punjabi", taste: "Mild", course: "MAIN", desc: "Sweet peas simmered in fresh tangy tomato puree." },
  { id: 188, name: "Navratan Kurma", category: "Punjabi Dishes", price: 140, dietaryType: "Veg", cuisine: "Punjabi", taste: "Mild", course: "MAIN", desc: "Nine gem vegetables and dry fruits in creamy white gravy." },
  { id: 189, name: "Veg Makhanwala", category: "Punjabi Dishes", price: 140, dietaryType: "Veg", cuisine: "Punjabi", taste: "Mild", course: "MAIN", desc: "Mixed vegetables simmered in buttery tomato cream sauce." },
  { id: 190, name: "Veg Kolhapuri", category: "Punjabi Dishes", price: 140, dietaryType: "Vegan", cuisine: "Punjabi", taste: "Spicy", course: "MAIN", desc: "Fiery Maharashtrian curry with red chillies and coconut." },
  { id: 191, name: "Veg Jaipuri", category: "Punjabi Dishes", price: 130, dietaryType: "Veg", cuisine: "Punjabi", taste: "Medium", course: "MAIN", desc: "Rajasthani style vegetable preparation topped with roasted papad." },
  { id: 192, name: "Veg Jal Fraize", category: "Punjabi Dishes", price: 160, dietaryType: "Vegan", cuisine: "Punjabi", taste: "Spicy", course: "MAIN", desc: "Batons of seasonal vegetables stir-fried with capsicum in thick gravy." },
  { id: 193, name: "Aloo Jeera", category: "Punjabi Dishes", price: 160, dietaryType: "Vegan", cuisine: "Punjabi", taste: "Mild", course: "MAIN", desc: "Boiled potatoes tossed with roasted cumin seeds and fresh coriander." },
  { id: 194, name: "Dahi Kadi", category: "Punjabi Dishes", price: 90, dietaryType: "Veg", cuisine: "Punjabi", taste: "Mild", course: "MAIN", desc: "Tangy gram flour and yoghurt curry with vegetable pakodas." },

  // ================= PUNJABI SPECIAL =================
  { id: 195, name: "Veg Patiala", category: "Punjabi Special", price: 240, dietaryType: "Veg", cuisine: "Punjabi", taste: "Medium", course: "MAIN", desc: "Stuffed vegetable rolls in rich dual-flavored rich gravy." },
  { id: 196, name: "Mushroom Masala", category: "Punjabi Special", price: 155, dietaryType: "Vegan", cuisine: "Punjabi", taste: "Medium", course: "MAIN", desc: "Plump button mushrooms cooked in spiced onion masala." },
  { id: 197, name: "Paneer Tikka Masala", category: "Punjabi Special", price: 182, dietaryType: "Veg", cuisine: "Punjabi", taste: "Medium", course: "MAIN", desc: "Charcoal-grilled paneer cubes in thick creamy gravy." },
  { id: 198, name: "Paneer Kolhapuri", category: "Punjabi Special", price: 182, dietaryType: "Veg", cuisine: "Punjabi", taste: "Spicy", course: "MAIN", desc: "Cottage cheese simmered in spicy Kolhapuri red chilli gravy." },
  { id: 199, name: "Paneer Makhanwala", category: "Punjabi Special", price: 182, dietaryType: "Veg", cuisine: "Punjabi", taste: "Mild", course: "MAIN", desc: "Paneer cubes bathed in velvety butter-laden tomato gravy." },
  { id: 200, name: "Paneer Bhurji", category: "Punjabi Special", price: 190, dietaryType: "Veg", cuisine: "Punjabi", taste: "Medium", course: "MAIN", desc: "Scrambled cottage cheese tossed with onions, tomatoes and green chillies." },
  { id: 201, name: "Paneer Mutter", category: "Punjabi Special", price: 150, dietaryType: "Veg", cuisine: "Punjabi", taste: "Mild", course: "MAIN", desc: "Traditional pairing of soft paneer and sweet peas in gravy." },
  { id: 202, name: "Paneer Palak", category: "Punjabi Special", price: 150, dietaryType: "Veg", cuisine: "Punjabi", taste: "Mild", course: "MAIN", desc: "Cottage cheese cubes in smooth seasoned spinach puree." },
  { id: 203, name: "Paneer Kurma", category: "Punjabi Special", price: 155, dietaryType: "Veg", cuisine: "Punjabi", taste: "Mild", course: "MAIN", desc: "Paneer in rich aromatic cashew and coconut white sauce." },
  { id: 204, name: "Bhindi Masala", category: "Punjabi Special", price: 120, dietaryType: "Vegan", cuisine: "Punjabi", taste: "Medium", course: "MAIN", desc: "Tender okra cooked with sliced onions and Indian spices." },
  { id: 205, name: "Bhindi Crispy", category: "Punjabi Special", price: 140, dietaryType: "Vegan", cuisine: "Punjabi", taste: "Medium", course: "STARTER", desc: "Crunchy fried julienned okra tossed with chaat spices." },
  { id: 206, name: "Shahi Paneer", category: "Punjabi Special", price: 165, dietaryType: "Veg", cuisine: "Punjabi", taste: "Mild", course: "MAIN", desc: "Royal preparation of paneer in fragrant almond-cashew cream gravy." },
  { id: 207, name: "Shahi Palak", category: "Punjabi Special", price: 150, dietaryType: "Veg", cuisine: "Punjabi", taste: "Mild", course: "MAIN", desc: "Spinach puree finished with cream, butter and mild spices." },
  { id: 208, name: "Paneer Masala", category: "Punjabi Special", price: 155, dietaryType: "Veg", cuisine: "Punjabi", taste: "Medium", course: "MAIN", desc: "Paneer cubes cooked in homestyle onion tomato masala." },
  { id: 209, name: "Mushroom Paneer Masala", category: "Punjabi Special", price: 155, dietaryType: "Veg", cuisine: "Punjabi", taste: "Medium", course: "MAIN", desc: "Hearty blend of button mushrooms and cottage cheese." },
  { id: 210, name: "Methi Masala", category: "Punjabi Special", price: 125, dietaryType: "Vegan", cuisine: "Punjabi", taste: "Medium", course: "MAIN", desc: "Fresh fenugreek leaves in spicy onion curry." },
  { id: 211, name: "Malai Methi Mutter", category: "Punjabi Special", price: 160, dietaryType: "Veg", cuisine: "Punjabi", taste: "Mild", course: "MAIN", desc: "Sweet peas and fenugreek in rich velvety cream gravy." },
  { id: 212, name: "Aloo Methi", category: "Punjabi Special", price: 110, dietaryType: "Vegan", cuisine: "Punjabi", taste: "Mild", course: "MAIN", desc: "Potatoes sauteed with fresh bitter fenugreek greens." },
  { id: 213, name: "Veg Chilly Fry Shimla", category: "Punjabi Special", price: 110, dietaryType: "Vegan", cuisine: "Punjabi", taste: "Spicy", course: "MAIN", desc: "Stir-fried bell peppers and green chillies." },
  { id: 214, name: "Aloo Shimla", category: "Punjabi Special", price: 120, dietaryType: "Vegan", cuisine: "Punjabi", taste: "Medium", course: "MAIN", desc: "Diced potatoes and capsicum pan-fried with cumin." },
  { id: 215, name: "Stuff Shimla", category: "Punjabi Special", price: 130, dietaryType: "Veg", cuisine: "Punjabi", taste: "Medium", course: "MAIN", desc: "Whole capsicum stuffed with spiced paneer and potatoes." },
  { id: 216, name: "Paneer Kofta", category: "Punjabi Special", price: 170, dietaryType: "Veg", cuisine: "Punjabi", taste: "Medium", course: "MAIN", desc: "Cottage cheese dumplings simmered in rich silky gravy." },
  { id: 217, name: "Kaju Curry", category: "Punjabi Special", price: 175, dietaryType: "Veg", cuisine: "Punjabi", taste: "Mild", course: "MAIN", desc: "Roasted whole cashews in royal creamy tomato gravy." },
  { id: 218, name: "Kaju Paneer", category: "Punjabi Special", price: 190, dietaryType: "Veg", cuisine: "Punjabi", taste: "Mild", course: "MAIN", desc: "Rich combination of whole cashews and cottage cheese cubes." },
  { id: 219, name: "Cheese Kofta", category: "Punjabi Special", price: 150, dietaryType: "Veg", cuisine: "Punjabi", taste: "Mild", course: "MAIN", desc: "Soft cheese dumplings in mild aromatic gravy." },
  { id: 220, name: "Malai Kofta", category: "Punjabi Special", price: 150, dietaryType: "Veg", cuisine: "Punjabi", taste: "Mild", course: "MAIN", desc: "Melt-in-mouth paneer and potato dumplings in white cashew sauce." },
  { id: 221, name: "Kashmiri Kofta", category: "Punjabi Special", price: 160, dietaryType: "Veg", cuisine: "Punjabi", taste: "Mild", course: "MAIN", desc: "Sweet-savory fruit and nut stuffed koftas in Kashmiri sauce." },
  { id: 222, name: "Dam Aloo Kashmiri", category: "Punjabi Special", price: 160, dietaryType: "Vegan", cuisine: "Punjabi", taste: "Mild", course: "MAIN", desc: "Slow-dum cooked baby potatoes in mild saffron-tinged gravy." },
  { id: 223, name: "Cheese Peas Curry", category: "Punjabi Special", price: 160, dietaryType: "Veg", cuisine: "Punjabi", taste: "Mild", course: "MAIN", desc: "Cheddar cheese and green peas in smooth tomato curry." },
  { id: 224, name: "Veg Handi", category: "Punjabi Special", price: 160, dietaryType: "Veg", cuisine: "Punjabi", taste: "Medium", course: "MAIN", desc: "Assorted vegetables cooked in clay pot handi style." },
  { id: 225, name: "Veg Kadai", category: "Punjabi Special", price: 160, dietaryType: "Vegan", cuisine: "Punjabi", taste: "Spicy", course: "MAIN", desc: "Vegetables tossed with whole spices in an iron wok." },
  { id: 226, name: "Paneer Handi", category: "Punjabi Special", price: 180, dietaryType: "Veg", cuisine: "Punjabi", taste: "Medium", course: "MAIN", desc: "Cottage cheese simmered in rich handi gravy." },

  // ================= STARTERS =================
  { id: 227, name: "Paneer Tikka Fry", category: "Starters", price: 200, dietaryType: "Veg", cuisine: "Indian", taste: "Medium", course: "STARTER", desc: "Tandoor-marinated paneer cubes pan fried to crisp finish." },
  { id: 228, name: "Hara Bhara Kabab", category: "Starters", price: 200, dietaryType: "Veg", cuisine: "Indian", taste: "Medium", course: "STARTER", desc: "Spinach, green peas and potato patties with aromatic herbs." },
  { id: 229, name: "Veg Manchurian", category: "Starters", price: 190, dietaryType: "Vegan", cuisine: "Chinese", taste: "Medium", course: "STARTER", desc: "Deep fried vegetable balls tossed in savory soya ginger sauce." },
  { id: 230, name: "Mushroom Manchurian", category: "Starters", price: 200, dietaryType: "Vegan", cuisine: "Chinese", taste: "Medium", course: "STARTER", desc: "Crispy button mushrooms in tangy manchurian gravy." },
  { id: 231, name: "Paneer Chilly", category: "Starters", price: 200, dietaryType: "Veg", cuisine: "Chinese", taste: "Spicy", course: "STARTER", desc: "Batter-fried paneer cubes wok-tossed with peppers and chillies." },
  { id: 232, name: "Paneer Manchurian", category: "Starters", price: 200, dietaryType: "Veg", cuisine: "Chinese", taste: "Medium", course: "STARTER", desc: "Cottage cheese cubes tossed in garlic coriander manchurian glaze." },
  { id: 233, name: "Gobi Manchurian", category: "Starters", price: 190, dietaryType: "Vegan", cuisine: "Chinese", taste: "Medium", course: "STARTER", desc: "Crispy cauliflower florets in spicy ginger soya sauce." },
  { id: 234, name: "Veg Crispy", category: "Starters", price: 200, dietaryType: "Vegan", cuisine: "Chinese", taste: "Spicy", course: "STARTER", desc: "Crispy shredded mixed vegetables tossed in sweet and spicy schezwan sauce." },
  { id: 235, name: "Veg Chilly", category: "Starters", price: 200, dietaryType: "Vegan", cuisine: "Chinese", taste: "Spicy", course: "STARTER", desc: "Stir-fried vegetables with green chillies and soya." },
  { id: 236, name: "Veg Spring Roll", category: "Starters", price: 200, dietaryType: "Vegan", cuisine: "Chinese", taste: "Mild", course: "STARTER", desc: "Golden fried crispy wrappers stuffed with seasoned noodles and vegetables." },
  { id: 237, name: "Paneer Garlic", category: "Starters", price: 200, dietaryType: "Veg", cuisine: "Chinese", taste: "Medium", course: "STARTER", desc: "Paneer cubes tossed in rich burnt garlic sauce." },
  { id: 238, name: "Ginger", category: "Starters", price: 200, dietaryType: "Vegan", cuisine: "Chinese", taste: "Medium", course: "STARTER", desc: "Vegetable dumplings tossed in zesty ginger sauce." },
  { id: 239, name: "Veg 65", category: "Starters", price: 190, dietaryType: "Vegan", cuisine: "Indian", taste: "Spicy", course: "STARTER", desc: "Deep-fried vegetables coated in spicy South-style masala." },
  { id: 240, name: "Babycorn Manchurian", category: "Starters", price: 200, dietaryType: "Vegan", cuisine: "Chinese", taste: "Medium", course: "STARTER", desc: "Crisp baby corn tossed in savory manchurian sauce." },
  { id: 241, name: "Veg Singapuri", category: "Starters", price: 200, dietaryType: "Vegan", cuisine: "Chinese", taste: "Spicy", course: "STARTER", desc: "Stir-fried vegetables in tangy Singapore-style curry powder sauce." },

  // ================= CHINESE RICE & NOODLES =================
  { id: 242, name: "Veg Hakka Noodles", category: "Chinese Rice & Noodles", price: 190, dietaryType: "Vegan", cuisine: "Chinese", taste: "Mild", course: "RICE", desc: "Wok-tossed noodles with shredded cabbage, carrots and spring onions." },
  { id: 243, name: "Veg Triple Noodles", category: "Chinese Rice & Noodles", price: 195, dietaryType: "Vegan", cuisine: "Chinese", taste: "Spicy", course: "RICE", desc: "Combination of noodles, rice and crispy fried noodles in schezwan gravy." },
  { id: 244, name: "Veg Schezwan Noodles", category: "Chinese Rice & Noodles", price: 195, dietaryType: "Vegan", cuisine: "Chinese", taste: "Spicy", course: "RICE", desc: "Noodles tossed in fiery spicy schezwan red paste." },
  { id: 245, name: "Veg Hongkong Noodles", category: "Chinese Rice & Noodles", price: 195, dietaryType: "Vegan", cuisine: "Chinese", taste: "Medium", course: "RICE", desc: "Hongkong style noodles with sweet and savory touch." },
  { id: 246, name: "Veg American Chopsuey", category: "Chinese Rice & Noodles", price: 210, dietaryType: "Vegan", cuisine: "Chinese", taste: "Mild", course: "MAIN", desc: "Crispy fried noodles topped with sweet and sour vegetable gravy." },
  { id: 247, name: "Veg Chowmein", category: "Chinese Rice & Noodles", price: 210, dietaryType: "Vegan", cuisine: "Chinese", taste: "Medium", course: "RICE", desc: "Pan-fried noodles tossed with crisp vegetables and soya." },
  { id: 248, name: "Veg Fried Rice", category: "Chinese Rice & Noodles", price: 150, dietaryType: "Vegan", cuisine: "Chinese", taste: "Mild", course: "RICE", desc: "Fluffy steamed rice stir-fried in wok with diced vegetables." },
  { id: 249, name: "Veg Triple Fried Rice", category: "Chinese Rice & Noodles", price: 170, dietaryType: "Vegan", cuisine: "Chinese", taste: "Spicy", course: "RICE", desc: "Fried rice and hakka noodles served with side of spicy schezwan gravy." },
  { id: 250, name: "Veg Schezwan Fried Rice", category: "Chinese Rice & Noodles", price: 160, dietaryType: "Vegan", cuisine: "Chinese", taste: "Spicy", course: "RICE", desc: "Wok-tossed rice flavored with hot schezwan pepper sauce." },
  { id: 251, name: "Mushroom Fried Rice", category: "Chinese Rice & Noodles", price: 160, dietaryType: "Vegan", cuisine: "Chinese", taste: "Mild", course: "RICE", desc: "Fried rice with sliced button mushrooms and garlic." },
  { id: 252, name: "Mushroom Schezwan Rice", category: "Chinese Rice & Noodles", price: 165, dietaryType: "Vegan", cuisine: "Chinese", taste: "Spicy", course: "RICE", desc: "Spicy schezwan fried rice loaded with juicy mushrooms." },

  // ================= PIZZA HUT =================
  { id: 253, name: "Veg Pizza", category: "Pizza Hut", price: 140, dietaryType: "Veg", cuisine: "Continental", taste: "Mild", course: "MAIN", desc: "Baked pizza base topped with marinara, capsicum, onions and cheese." },
  { id: 254, name: "Cheese Pizza", category: "Pizza Hut", price: 160, dietaryType: "Veg", cuisine: "Continental", taste: "Mild", course: "MAIN", desc: "Loaded double cheese margherita style pizza." },
  { id: 255, name: "Mushroom Pizza", category: "Pizza Hut", price: 160, dietaryType: "Veg", cuisine: "Continental", taste: "Mild", course: "MAIN", desc: "Pizza topped with sliced button mushrooms and herbs." },
  { id: 256, name: "Mix Pizza", category: "Pizza Hut", price: 160, dietaryType: "Veg", cuisine: "Continental", taste: "Medium", course: "MAIN", desc: "All-topping pizza with babycorn, mushrooms, peppers and cheese." },
  { id: 257, name: "Paneer Pizza", category: "Pizza Hut", price: 180, dietaryType: "Veg", cuisine: "Continental", taste: "Medium", course: "MAIN", desc: "Crispy crust topped with spiced paneer cubes and mozzarella." },

  // ================= COLD BEVERAGES =================
  { id: 258, name: "Chass (Butter Milk)", category: "Cold Beverages", price: 32, dietaryType: "Veg", cuisine: "Indian", taste: "Mild", course: "BEVERAGE", desc: "Traditional churned salted buttermilk with roasted cumin and coriander." },
  { id: 259, name: "Chass (Plain)", category: "Cold Beverages", price: 32, dietaryType: "Veg", cuisine: "Indian", taste: "Mild", course: "BEVERAGE", desc: "Simple refreshing plain chilled buttermilk." },
  { id: 260, name: "Lassi", category: "Cold Beverages", price: 70, dietaryType: "Veg", cuisine: "Indian", taste: "Mild", course: "BEVERAGE", desc: "Thick sweet Punjabi yoghurt shake topped with malai." },
  { id: 261, name: "Mango Lassi", category: "Cold Beverages", price: 75, dietaryType: "Veg", cuisine: "Indian", taste: "Mild", course: "BEVERAGE", desc: "Creamy sweet lassi blended with Alphonso mango pulp." },
  { id: 262, name: "Soft Drinks (300 ml)", category: "Cold Beverages", price: 30, dietaryType: "Vegan", cuisine: "Continental", taste: "Mild", course: "BEVERAGE", desc: "Chilled bottled soft drink." },
  { id: 263, name: "Soft Drinks (500 ml)", category: "Cold Beverages", price: 55, dietaryType: "Vegan", cuisine: "Continental", taste: "Mild", course: "BEVERAGE", desc: "Chilled bottled aerated beverage." },
  { id: 264, name: "Diet Coke", category: "Cold Beverages", price: 60, dietaryType: "Vegan", cuisine: "Continental", taste: "Mild", course: "BEVERAGE", desc: "Zero calorie chilled diet cola." },
  { id: 265, name: "Rio", category: "Cold Beverages", price: 50, dietaryType: "Vegan", cuisine: "Continental", taste: "Mild", course: "BEVERAGE", desc: "Flavored sparkling fruit juice fusion beverage." }, // Preferred price
  { id: 266, name: "Fresh Lime Soda", category: "Cold Beverages", price: 45, dietaryType: "Vegan", cuisine: "Indian", taste: "Mild", course: "BEVERAGE", desc: "Refreshing freshly squeezed lime juice with club soda (Sweet / Salted)." },

  // ================= JUICES — SEASONAL =================
  { id: 267, name: "Mosambi", category: "Juices - Seasonal", price: 100, dietaryType: "Vegan", cuisine: "Indian", taste: "Mild", course: "BEVERAGE", desc: "Fresh sweet lime juice extracted on order." },
  { id: 268, name: "Orange", category: "Juices - Seasonal", price: 100, dietaryType: "Vegan", cuisine: "Indian", taste: "Mild", course: "BEVERAGE", desc: "Pure fresh citrus orange juice." },
  { id: 269, name: "Ganga Jamuna", category: "Juices - Seasonal", price: 100, dietaryType: "Vegan", cuisine: "Indian", taste: "Mild", course: "BEVERAGE", desc: "Classic fresh blend of mosambi and orange juice." },
  { id: 270, name: "Pineapple", category: "Juices - Seasonal", price: 100, dietaryType: "Vegan", cuisine: "Indian", taste: "Mild", course: "BEVERAGE", desc: "Freshly cold-pressed sweet pineapple juice." },
  { id: 271, name: "Cocktail Juice", category: "Juices - Seasonal", price: 100, dietaryType: "Vegan", cuisine: "Indian", taste: "Mild", course: "BEVERAGE", desc: "Medley of seasonal tropical fruit juices." },
  { id: 272, name: "Maramari (Pineapple & Mosambi)", category: "Juices - Seasonal", price: 100, dietaryType: "Vegan", cuisine: "Indian", taste: "Mild", course: "BEVERAGE", desc: "Refreshing combination of sweet pineapple and sweet lime." },

  // ================= MILK SHAKES — SEASONAL =================
  { id: 273, name: "Cold Coffee", category: "Milk Shakes - Seasonal", price: 100, dietaryType: "Veg", cuisine: "Continental", taste: "Mild", course: "BEVERAGE", desc: "Chilled blended coffee with milk, sugar and chocolate drizzle." },
  { id: 274, name: "Apple Milk Shake", category: "Milk Shakes - Seasonal", price: 110, dietaryType: "Veg", cuisine: "Continental", taste: "Mild", course: "BEVERAGE", desc: "Creamy milkshake blended with fresh apples." },
  { id: 275, name: "Chikku Milk Shake", category: "Milk Shakes - Seasonal", price: 110, dietaryType: "Veg", cuisine: "Indian", taste: "Mild", course: "BEVERAGE", desc: "Thick sweet sapota (chikku) fruit milkshake." },
  { id: 276, name: "Mango Milk Shake", category: "Milk Shakes - Seasonal", price: 110, dietaryType: "Veg", cuisine: "Indian", taste: "Mild", course: "BEVERAGE", desc: "Rich milkshake prepared with sweet Alphonso mango pulp." },
  { id: 277, name: "Chocolate Milk Shake", category: "Milk Shakes - Seasonal", price: 110, dietaryType: "Veg", cuisine: "Continental", taste: "Mild", course: "BEVERAGE", desc: "Decadent blended milkshake with dark chocolate sauce." },
  { id: 278, name: "Strawberry Milk Shake", category: "Milk Shakes - Seasonal", price: 120, dietaryType: "Veg", cuisine: "Continental", taste: "Mild", course: "BEVERAGE", desc: "Sweet pink milkshake made with strawberry puree." },
  { id: 279, name: "Vanilla Milk Shake", category: "Milk Shakes - Seasonal", price: 120, dietaryType: "Veg", cuisine: "Continental", taste: "Mild", course: "BEVERAGE", desc: "Classic smooth vanilla ice cream blended shake." },

  // ================= ICE CREAM =================
  { id: 280, name: "Kesar Pista", category: "Ice Cream", price: 70, dietaryType: "Veg", cuisine: "Indian", taste: "Mild", course: "DESSERT", desc: "Saffron flavored ice cream studded with crunchy pistachio bits." }, // Preferred price
  { id: 281, name: "Butter Scotch", category: "Ice Cream", price: 65, dietaryType: "Veg", cuisine: "Continental", taste: "Mild", course: "DESSERT", desc: "Creamy butterscotch ice cream with crunchy praline chunks." }, // Preferred price
  { id: 282, name: "Vanilla", category: "Ice Cream", price: 50, dietaryType: "Veg", cuisine: "Continental", taste: "Mild", course: "DESSERT", desc: "Scoop of classic smooth Madagascar vanilla ice cream." }, // Preferred price
  { id: 283, name: "Vanilla (Small)", category: "Ice Cream", price: 35, dietaryType: "Veg", cuisine: "Continental", taste: "Mild", course: "DESSERT", desc: "Single scoop of sweet vanilla ice cream." }, // Preferred price
  { id: 284, name: "Casatta", category: "Ice Cream", price: 80, dietaryType: "Veg", cuisine: "Continental", taste: "Mild", course: "DESSERT", desc: "Multi-layered rainbow ice cream slice on sponge cake." }, // Preferred price
  { id: 285, name: "Chocobar", category: "Ice Cream", price: 40, dietaryType: "Veg", cuisine: "Continental", taste: "Mild", course: "DESSERT", desc: "Vanilla ice cream bar coated in crisp milk chocolate shell." }, // Preferred price
  { id: 286, name: "Mango / Raspberry Duet", category: "Ice Cream", price: 45, dietaryType: "Veg", cuisine: "Continental", taste: "Mild", course: "DESSERT", desc: "Dual flavored fruity duet ice cream bar." }, // Preferred price
  { id: 287, name: "King Cone", category: "Ice Cream", price: 60, dietaryType: "Veg", cuisine: "Continental", taste: "Mild", course: "DESSERT", desc: "Jumbo waffle cone filled with rich chocolate ice cream." }, // Preferred price
  { id: 288, name: "Tricone", category: "Ice Cream", price: 50, dietaryType: "Veg", cuisine: "Continental", taste: "Mild", course: "DESSERT", desc: "Triple layered crispy waffle cone ice cream." }, // Preferred price
  { id: 289, name: "Rajbhog", category: "Ice Cream", price: 75, dietaryType: "Veg", cuisine: "Indian", taste: "Mild", course: "DESSERT", desc: "Royal saffron ice cream with dry fruits and cardamom." }, // Preferred price
  { id: 290, name: "Shahi Anjeer", category: "Ice Cream", price: 80, dietaryType: "Veg", cuisine: "Indian", taste: "Mild", course: "DESSERT", desc: "Exotic rich fig ice cream with roasted nuts." }, // Preferred price
  { id: 291, name: "Kulfi", category: "Ice Cream", price: 60, dietaryType: "Veg", cuisine: "Indian", taste: "Mild", course: "DESSERT", desc: "Traditional malai matka kulfi with saffron and almonds." }, // Preferred price
  { id: 292, name: "Alphanso Mango", category: "Ice Cream", price: 75, dietaryType: "Veg", cuisine: "Indian", taste: "Mild", course: "DESSERT", desc: "Authentic Ratnagiri Alphonso mango ice cream." }, // Preferred price
  { id: 293, name: "Quick Sundae", category: "Ice Cream", price: 90, dietaryType: "Veg", cuisine: "Continental", taste: "Mild", course: "DESSERT", desc: "Ice cream sundae topped with chocolate fudge, nuts and cherry." }, // Preferred price
  { id: 294, name: "Strawberry", category: "Ice Cream", price: 55, dietaryType: "Veg", cuisine: "Continental", taste: "Mild", course: "DESSERT", desc: "Classic sweet strawberry ice cream scoop." } // Preferred price
];
