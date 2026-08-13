import { useState } from "react";
import {
  UtensilsCrossed,
  Search,
  Plus,
  Pencil,
  Trash2,
  CheckCircle2,
  XCircle,
  Leaf,
  Drumstick,
  Coffee,
  Soup,
  Salad,
  CakeSlice,
  GlassWater,
  Wheat,
  X,
  ChevronRight,
  PackageX,
} from "lucide-react";

const createMenuItems = () => [
  // =========================================================
  // 1. HOT BEVERAGES
  // =========================================================
  {
    id: 1,
    name: "Tea",
    category: "Hot Beverages",
    type: "Veg",
    price: 35,
    available: true,
    description: "Freshly brewed hot tea.",
  },
  {
    id: 2,
    name: "Coffee (Filter)",
    category: "Hot Beverages",
    type: "Veg",
    price: 40,
    available: true,
    description: "Traditional filter coffee.",
  },
  {
    id: 3,
    name: "Nescafe",
    category: "Hot Beverages",
    type: "Veg",
    price: 45,
    available: true,
    description: "Hot Nescafe coffee.",
  },
  {
    id: 4,
    name: "Milk",
    category: "Hot Beverages",
    type: "Veg",
    price: 55,
    available: true,
    description: "Fresh hot milk.",
  },
  {
    id: 5,
    name: "Bisleri",
    category: "Hot Beverages",
    type: "Veg",
    price: 35,
    available: true,
    description: "Packaged drinking water.",
  },
  {
    id: 6,
    name: "Black Tea",
    category: "Hot Beverages",
    type: "Veg",
    price: 30,
    available: true,
    description: "Refreshing black tea.",
  },

  // =========================================================
  // 2. SOUTH INDIAN / SNACKS
  // =========================================================
  {
    id: 7,
    name: "Upma",
    category: "South Indian / Snacks",
    type: "Veg",
    price: 60,
    available: true,
    description: "Traditional South Indian semolina breakfast.",
  },
  {
    id: 8,
    name: "Idli",
    category: "South Indian / Snacks",
    type: "Veg",
    price: 60,
    available: true,
    description: "Soft steamed rice cakes.",
  },
  {
    id: 9,
    name: "Idli Medu Vada",
    category: "South Indian / Snacks",
    type: "Veg",
    price: 70,
    available: true,
    description: "Idli served with crispy medu vada.",
  },
  {
    id: 10,
    name: "Medu Vada",
    category: "South Indian / Snacks",
    type: "Veg",
    price: 70,
    available: true,
    description: "Crispy South Indian lentil fritters.",
  },
  {
    id: 11,
    name: "Medu Vada Single",
    category: "South Indian / Snacks",
    type: "Veg",
    price: null,
    available: true,
    description: "Single serving of medu vada. Price not visible in menu.",
  },
  {
    id: 12,
    name: "Potato Vada",
    category: "South Indian / Snacks",
    type: "Veg",
    price: 55,
    available: true,
    description: "Crispy potato vada.",
  },
  {
    id: 13,
    name: "Potato Vada Sambar",
    category: "South Indian / Snacks",
    type: "Veg",
    price: 55,
    available: true,
    description: "Potato vada served with sambar.",
  },
  {
    id: 14,
    name: "Potato Vada Single",
    category: "South Indian / Snacks",
    type: "Veg",
    price: 47,
    available: true,
    description: "Single potato vada.",
  },
  {
    id: 15,
    name: "Vada Usal",
    category: "South Indian / Snacks",
    type: "Veg",
    price: 75,
    available: true,
    description: "Vada served with flavorful usal.",
  },
  {
    id: 16,
    name: "Extra Sambar",
    category: "South Indian / Snacks",
    type: "Veg",
    price: 47,
    available: true,
    description: "Extra serving of sambar.",
  },
  {
    id: 17,
    name: "Sada Dosa",
    category: "South Indian / Snacks",
    type: "Veg",
    price: 75,
    available: true,
    description: "Classic crispy plain dosa.",
  },
  {
    id: 18,
    name: "Ghee Sada Dosa",
    category: "South Indian / Snacks",
    type: "Veg",
    price: 80,
    available: true,
    description: "Plain dosa prepared with ghee.",
  },
  {
    id: 19,
    name: "Masala Dosa",
    category: "South Indian / Snacks",
    type: "Veg",
    price: 90,
    available: true,
    description: "Crispy dosa filled with potato masala.",
  },
  {
    id: 20,
    name: "Ghee Masala Dosa",
    category: "South Indian / Snacks",
    type: "Veg",
    price: 100,
    available: true,
    description: "Masala dosa prepared with ghee.",
  },
  {
    id: 21,
    name: "Paper Dosa",
    category: "South Indian / Snacks",
    type: "Veg",
    price: 120,
    available: true,
    description: "Extra thin and crispy paper dosa.",
  },
  {
    id: 22,
    name: "Paper Masala",
    category: "South Indian / Snacks",
    type: "Veg",
    price: 130,
    available: true,
    description: "Paper dosa with potato masala.",
  },
  {
    id: 23,
    name: "Cheese Paper Dosa",
    category: "South Indian / Snacks",
    type: "Veg",
    price: 150,
    available: true,
    description: "Paper dosa topped with cheese.",
  },
  {
    id: 24,
    name: "Cheese Masala Dosa",
    category: "South Indian / Snacks",
    type: "Veg",
    price: 155,
    available: true,
    description: "Masala dosa with cheese.",
  },
  {
    id: 25,
    name: "Mysore Sada Dosa",
    category: "South Indian / Snacks",
    type: "Veg",
    price: 90,
    available: true,
    description: "Mysore-style plain dosa.",
  },
  {
    id: 26,
    name: "Mysore Masala",
    category: "South Indian / Snacks",
    type: "Veg",
    price: 95,
    available: true,
    description: "Mysore dosa with potato masala.",
  },
  {
    id: 27,
    name: "Ghee Mysore Sada",
    category: "South Indian / Snacks",
    type: "Veg",
    price: 100,
    available: true,
    description: "Mysore plain dosa prepared with ghee.",
  },
  {
    id: 28,
    name: "Cheese Mysore Sada Dosa",
    category: "South Indian / Snacks",
    type: "Veg",
    price: 110,
    available: true,
    description: "Mysore plain dosa with cheese.",
  },
  {
    id: 29,
    name: "Cheese Mysore Masala Dosa",
    category: "South Indian / Snacks",
    type: "Veg",
    price: 150,
    available: true,
    description: "Mysore masala dosa with cheese.",
  },
  {
    id: 30,
    name: "Ghee Mysore Masala",
    category: "South Indian / Snacks",
    type: "Veg",
    price: 110,
    available: true,
    description: "Mysore masala dosa prepared with ghee.",
  },
  {
    id: 31,
    name: "Rava Dosa Sada",
    category: "South Indian / Snacks",
    type: "Veg",
    price: 100,
    available: true,
    description: "Crispy plain rava dosa.",
  },
  {
    id: 32,
    name: "Cheese Rava Sada Dosa",
    category: "South Indian / Snacks",
    type: "Veg",
    price: 120,
    available: true,
    description: "Rava dosa topped with cheese.",
  },
  {
    id: 33,
    name: "Ghee Rava",
    category: "South Indian / Snacks",
    type: "Veg",
    price: 110,
    available: true,
    description: "Rava dosa prepared with ghee.",
  },
  {
    id: 34,
    name: "Ragi Rava Dosa",
    category: "South Indian / Snacks",
    type: "Veg",
    price: 95,
    available: true,
    description: "Crispy ragi rava dosa.",
  },
  {
    id: 35,
    name: "Ragi Rava Masala",
    category: "South Indian / Snacks",
    type: "Veg",
    price: 100,
    available: true,
    description: "Ragi rava dosa with masala.",
  },
  {
    id: 36,
    name: "Rava Masala",
    category: "South Indian / Snacks",
    type: "Veg",
    price: 110,
    available: true,
    description: "Rava dosa with potato masala.",
  },
  {
    id: 37,
    name: "Ghee Rava Masala",
    category: "South Indian / Snacks",
    type: "Veg",
    price: 120,
    available: true,
    description: "Rava masala dosa prepared with ghee.",
  },
  {
    id: 38,
    name: "Cheese Rava Masala",
    category: "South Indian / Snacks",
    type: "Veg",
    price: 125,
    available: true,
    description: "Rava masala dosa with cheese.",
  },
  {
    id: 39,
    name: "Onion Rava Dosa",
    category: "South Indian / Snacks",
    type: "Veg",
    price: 125,
    available: true,
    description: "Crispy rava dosa with onion.",
  },
  {
    id: 40,
    name: "Onion Rava Masala",
    category: "South Indian / Snacks",
    type: "Veg",
    price: 130,
    available: true,
    description: "Onion rava dosa with potato masala.",
  },
  {
    id: 41,
    name: "Ghee Onion Rava",
    category: "South Indian / Snacks",
    type: "Veg",
    price: 100,
    available: true,
    description: "Onion rava dosa prepared with ghee.",
  },
  {
    id: 42,
    name: "Ghee Onion Rava Masala",
    category: "South Indian / Snacks",
    type: "Veg",
    price: 110,
    available: true,
    description: "Ghee onion rava dosa with masala.",
  },
  {
    id: 43,
    name: "Uttappa",
    category: "South Indian / Snacks",
    type: "Veg",
    price: 80,
    available: true,
    description: "Soft South Indian uttappa.",
  },
  {
    id: 44,
    name: "Ghee Uttappa",
    category: "South Indian / Snacks",
    type: "Veg",
    price: 85,
    available: true,
    description: "Uttappa prepared with ghee.",
  },
  {
    id: 45,
    name: "Onion Uttappa",
    category: "South Indian / Snacks",
    type: "Veg",
    price: 85,
    available: true,
    description: "Uttappa topped with onion.",
  },
  {
    id: 46,
    name: "Cheese Onion Uttappa",
    category: "South Indian / Snacks",
    type: "Veg",
    price: 120,
    available: true,
    description: "Onion uttappa with cheese.",
  },
  {
    id: 47,
    name: "Ghee Onion Uttappa",
    category: "South Indian / Snacks",
    type: "Veg",
    price: 90,
    available: true,
    description: "Onion uttappa prepared with ghee.",
  },
  {
    id: 48,
    name: "Tomato Uttappa",
    category: "South Indian / Snacks",
    type: "Veg",
    price: 85,
    available: true,
    description: "Uttappa topped with tomato.",
  },
  {
    id: 49,
    name: "Ghee Tomato Uttappa",
    category: "South Indian / Snacks",
    type: "Veg",
    price: 90,
    available: true,
    description: "Tomato uttappa prepared with ghee.",
  },
  {
    id: 50,
    name: "Tomato Onion Uttappa",
    category: "South Indian / Snacks",
    type: "Veg",
    price: 90,
    available: true,
    description: "Uttappa with tomato and onion.",
  },
  {
    id: 51,
    name: "Tomato Omelette",
    category: "South Indian / Snacks",
    type: "Veg",
    price: 95,
    available: true,
    description: "Tomato-based vegetarian omelette-style preparation.",
  },
  {
    id: 52,
    name: "Ghee Tomato Omelette",
    category: "South Indian / Snacks",
    type: "Veg",
    price: 100,
    available: true,
    description: "Tomato omelette prepared with ghee.",
  },
  {
    id: 53,
    name: "Idli Fry",
    category: "South Indian / Snacks",
    type: "Veg",
    price: 90,
    available: true,
    description: "Crispy fried idli.",
  },
  {
    id: 54,
    name: "Butter Idli",
    category: "South Indian / Snacks",
    type: "Veg",
    price: 90,
    available: true,
    description: "Idli served with butter.",
  },
  {
    id: 55,
    name: "Veg Cutlet",
    category: "South Indian / Snacks",
    type: "Veg",
    price: 90,
    available: true,
    description: "Crispy vegetable cutlet.",
  },
  {
    id: 56,
    name: "Punjabi Samosa",
    category: "South Indian / Snacks",
    type: "Veg",
    price: 90,
    available: true,
    description: "Punjabi-style crispy samosa.",
  },
  {
    id: 57,
    name: "Veg Patties",
    category: "South Indian / Snacks",
    type: "Veg",
    price: 90,
    available: true,
    description: "Crispy vegetable patties.",
  },
  {
    id: 58,
    name: "Finger Chips",
    category: "South Indian / Snacks",
    type: "Veg",
    price: 100,
    available: true,
    description: "Crispy potato finger chips.",
  },
  {
    id: 59,
    name: "Puri Bhaji",
    category: "South Indian / Snacks",
    type: "Veg",
    price: 100,
    available: true,
    description: "Puri served with vegetable bhaji.",
  },
  {
    id: 60,
    name: "Puri",
    category: "South Indian / Snacks",
    type: "Veg",
    price: 45,
    available: true,
    description: "Deep-fried Indian bread.",
  },
  {
    id: 61,
    name: "Dahi Vada",
    category: "South Indian / Snacks",
    type: "Veg",
    price: 110,
    available: true,
    description: "Vada served with seasoned yogurt.",
  },
  {
    id: 62,
    name: "Dahi Idli",
    category: "South Indian / Snacks",
    type: "Veg",
    price: 120,
    available: true,
    description: "Idli served with curd.",
  },
  {
    id: 63,
    name: "Misal",
    category: "South Indian / Snacks",
    type: "Veg",
    price: 95,
    available: true,
    description: "Traditional spicy Maharashtrian misal.",
  },
  {
    id: 64,
    name: "Dahi Misal",
    category: "South Indian / Snacks",
    type: "Veg",
    price: 95,
    available: true,
    description: "Misal served with curd.",
  },
  {
    id: 65,
    name: "Kachori",
    category: "South Indian / Snacks",
    type: "Veg",
    price: 95,
    available: true,
    description: "Crispy stuffed Indian snack.",
  },
  {
    id: 66,
    name: "Sabudana Khichadi",
    category: "South Indian / Snacks",
    type: "Veg",
    price: 120,
    available: true,
    description: "Traditional sabudana khichadi.",
  },
  {
    id: 67,
    name: "Sabudana Vada",
    category: "South Indian / Snacks",
    type: "Veg",
    price: 95,
    available: true,
    description: "Crispy sabudana vada.",
  },

  // =========================================================
  // 3. VEG PAKODA
  // =========================================================
  {
    id: 68,
    name: "Veg Pakoda",
    category: "Veg Pakoda",
    type: "Veg",
    price: 100,
    available: true,
    description: "Crispy mixed vegetable pakoda.",
  },
  {
    id: 69,
    name: "Paneer Pakoda",
    category: "Veg Pakoda",
    type: "Veg",
    price: 135,
    available: true,
    description: "Paneer coated and fried until crisp.",
  },
  {
    id: 70,
    name: "Cheese Pakoda",
    category: "Veg Pakoda",
    type: "Veg",
    price: 135,
    available: true,
    description: "Crispy cheese pakoda.",
  },
  {
    id: 71,
    name: "Onion Bhajia",
    category: "Veg Pakoda",
    type: "Veg",
    price: 100,
    available: true,
    description: "Crispy onion bhajia.",
  },

  // =========================================================
  // 4. PAV BHAJI
  // =========================================================
  {
    id: 72,
    name: "Pav Bhaji",
    category: "Pav Bhaji",
    type: "Veg",
    price: 140,
    available: true,
    description: "Classic Mumbai-style pav bhaji.",
  },
  {
    id: 73,
    name: "Jain Pav Bhaji",
    category: "Pav Bhaji",
    type: "Veg",
    price: 150,
    available: true,
    description: "Jain-style pav bhaji.",
  },
  {
    id: 74,
    name: "Cheese Pav Bhaji",
    category: "Pav Bhaji",
    type: "Veg",
    price: 160,
    available: true,
    description: "Pav bhaji topped with cheese.",
  },
  {
    id: 75,
    name: "Paneer Pav Bhaji",
    category: "Pav Bhaji",
    type: "Veg",
    price: 160,
    available: true,
    description: "Pav bhaji with paneer.",
  },
  {
    id: 76,
    name: "Paneer Masala Pav",
    category: "Pav Bhaji",
    type: "Veg",
    price: 160,
    available: true,
    description: "Masala pav with paneer.",
  },
  {
    id: 77,
    name: "Extra Pav (2 pcs)",
    category: "Pav Bhaji",
    type: "Veg",
    price: 30,
    available: true,
    description: "Two extra pav pieces.",
  },
  {
    id: 78,
    name: "Masala Pav (2 pcs)",
    category: "Pav Bhaji",
    type: "Veg",
    price: 80,
    available: true,
    description: "Two pieces of masala pav.",
  },

  // =========================================================
  // 5. LUNCH SERVICES
  // =========================================================
  {
    id: 79,
    name: "Punjabi Lunch",
    category: "Lunch Services",
    type: "Veg",
    price: 183,
    available: true,
    description: "Punjabi-style lunch service.",
  },
  {
    id: 80,
    name: "Lunch",
    category: "Lunch Services",
    type: "Veg",
    price: null,
    available: true,
    description: "Lunch service. Price not visible in menu.",
  },
  {
    id: 81,
    name: "Dinner",
    category: "Lunch Services",
    type: "Veg",
    price: null,
    available: true,
    description: "Dinner service. Price not visible in menu.",
  },
  {
    id: 82,
    name: "Lunch with Pulav",
    category: "Lunch Services",
    type: "Veg",
    price: null,
    available: true,
    description: "Lunch served with pulav. Price not visible in menu.",
  },

  // =========================================================
  // 6. VEG GRAVY / MAIN COURSE
  // =========================================================
  {
    id: 83,
    name: "Paneer Kadai",
    category: "Veg Gravy / Main Course",
    type: "Veg",
    price: 180,
    available: true,
    description: "Paneer cooked in rich kadai gravy.",
  },
  {
    id: 84,
    name: "Mix Veg",
    category: "Veg Gravy / Main Course",
    type: "Veg",
    price: 140,
    available: true,
    description: "Mixed vegetables cooked in Indian gravy.",
  },
  {
    id: 85,
    name: "Dum Aloo Punjabi",
    category: "Veg Gravy / Main Course",
    type: "Veg",
    price: 160,
    available: true,
    description: "Punjabi-style dum aloo.",
  },
  {
    id: 86,
    name: "Veg Hyderabadi",
    category: "Veg Gravy / Main Course",
    type: "Veg",
    price: 150,
    available: true,
    description: "Hyderabadi-style mixed vegetable gravy.",
  },
  {
    id: 87,
    name: "Baby Corn Masala",
    category: "Veg Gravy / Main Course",
    type: "Veg",
    price: 160,
    available: true,
    description: "Baby corn cooked in masala gravy.",
  },
  {
    id: 88,
    name: "Baby Corn Mushroom Masala",
    category: "Veg Gravy / Main Course",
    type: "Veg",
    price: 160,
    available: true,
    description: "Baby corn and mushroom in masala.",
  },
  {
    id: 89,
    name: "Veg Kotta",
    category: "Veg Gravy / Main Course",
    type: "Veg",
    price: 160,
    available: true,
    description: "Special mixed vegetable preparation.",
  },
  {
    id: 90,
    name: "Mushroom Kadai",
    category: "Veg Gravy / Main Course",
    type: "Veg",
    price: 160,
    available: true,
    description: "Mushrooms cooked in kadai masala.",
  },
  {
    id: 91,
    name: "Mushroom Paneer Masala",
    category: "Veg Gravy / Main Course",
    type: "Veg",
    price: 160,
    available: true,
    description: "Mushroom and paneer cooked in masala.",
  },
  {
    id: 92,
    name: "Mushroom Palak",
    category: "Veg Gravy / Main Course",
    type: "Veg",
    price: 160,
    available: true,
    description: "Mushrooms cooked with spinach.",
  },
  {
    id: 93,
    name: "Lasoon Methi",
    category: "Veg Gravy / Main Course",
    type: "Veg",
    price: 150,
    available: true,
    description: "Garlic and fenugreek preparation.",
  },
  {
    id: 94,
    name: "Lasoon Palak",
    category: "Veg Gravy / Main Course",
    type: "Veg",
    price: 150,
    available: true,
    description: "Garlic spinach preparation.",
  },

  // =========================================================
  // 7. RAITA
  // =========================================================
  {
    id: 95,
    name: "Veg Raita",
    category: "Raita",
    type: "Veg",
    price: 55,
    available: true,
    description: "Yogurt with fresh vegetables.",
  },
  {
    id: 96,
    name: "Bundi Raita",
    category: "Raita",
    type: "Veg",
    price: 55,
    available: true,
    description: "Yogurt topped with boondi.",
  },
  {
    id: 97,
    name: "Pineapple Raita",
    category: "Raita",
    type: "Veg",
    price: 120,
    available: true,
    description: "Creamy yogurt with pineapple.",
  },

  // =========================================================
  // 8. SALAD
  // =========================================================
  {
    id: 98,
    name: "Green Salad",
    category: "Salad",
    type: "Veg",
    price: 65,
    available: true,
    description: "Fresh seasonal green salad.",
  },
  {
    id: 99,
    name: "Kakdi Salad",
    category: "Salad",
    type: "Veg",
    price: 60,
    available: true,
    description: "Fresh cucumber salad.",
  },
  {
    id: 100,
    name: "Fruit Salad",
    category: "Salad",
    type: "Veg",
    price: null,
    available: true,
    description: "Fresh fruit salad. Price not visible in menu.",
  },

  // =========================================================
  // 9. SPECIAL RICE DISHES
  // =========================================================
  {
    id: 101,
    name: "Dal Khichdi",
    category: "Special Rice Dishes",
    type: "Veg",
    price: 145,
    available: true,
    description: "Comforting rice and lentil khichdi.",
  },
  {
    id: 102,
    name: "Palak Khichdi",
    category: "Special Rice Dishes",
    type: "Veg",
    price: 145,
    available: true,
    description: "Khichdi prepared with spinach.",
  },
  {
    id: 103,
    name: "Green Peas Pulav",
    category: "Special Rice Dishes",
    type: "Veg",
    price: 150,
    available: true,
    description: "Fragrant rice cooked with green peas.",
  },
  {
    id: 104,
    name: "Biryani",
    category: "Special Rice Dishes",
    type: "Veg",
    price: 150,
    available: true,
    description: "Aromatic vegetarian biryani.",
  },
  {
    id: 105,
    name: "Kashmiri Pulav",
    category: "Special Rice Dishes",
    type: "Veg",
    price: 160,
    available: true,
    description: "Kashmiri-style sweet and aromatic pulav.",
  },
  {
    id: 106,
    name: "Kashmiri Biryani",
    category: "Special Rice Dishes",
    type: "Veg",
    price: 160,
    available: true,
    description: "Kashmiri-style vegetarian biryani.",
  },
  {
    id: 107,
    name: "Paneer Pulav",
    category: "Special Rice Dishes",
    type: "Veg",
    price: 160,
    available: true,
    description: "Fragrant pulav with paneer.",
  },
  {
    id: 108,
    name: "Cheese Pulav",
    category: "Special Rice Dishes",
    type: "Veg",
    price: 160,
    available: true,
    description: "Pulav prepared with cheese.",
  },
  {
    id: 109,
    name: "Paneer Biryani",
    category: "Special Rice Dishes",
    type: "Veg",
    price: 170,
    available: true,
    description: "Aromatic biryani with paneer.",
  },
  {
    id: 110,
    name: "Veg Biryani",
    category: "Special Rice Dishes",
    type: "Veg",
    price: 150,
    available: true,
    description: "Classic vegetable biryani.",
  },
  {
    id: 111,
    name: "Veg Pulav",
    category: "Special Rice Dishes",
    type: "Veg",
    price: 130,
    available: true,
    description: "Fragrant vegetable pulav.",
  },

  // =========================================================
  // 10. TANDOORI
  // =========================================================
  {
    id: 112,
    name: "Wheat Roti",
    category: "Tandoori",
    type: "Veg",
    price: 22,
    available: true,
    description: "Fresh wheat tandoori roti.",
  },
  {
    id: 113,
    name: "Butter Roti",
    category: "Tandoori",
    type: "Veg",
    price: 26,
    available: true,
    description: "Tandoori roti with butter.",
  },
  {
    id: 114,
    name: "Naan",
    category: "Tandoori",
    type: "Veg",
    price: 40,
    available: true,
    description: "Traditional Indian naan.",
  },
  {
    id: 115,
    name: "Butter Naan",
    category: "Tandoori",
    type: "Veg",
    price: 45,
    available: true,
    description: "Naan topped with butter.",
  },
  {
    id: 116,
    name: "Garlic Naan",
    category: "Tandoori",
    type: "Veg",
    price: 45,
    available: true,
    description: "Naan topped with garlic.",
  },
  {
    id: 117,
    name: "Butter Garlic Naan",
    category: "Tandoori",
    type: "Veg",
    price: 50,
    available: true,
    description: "Garlic naan with butter.",
  },
  {
    id: 118,
    name: "Cheese Naan",
    category: "Tandoori",
    type: "Veg",
    price: 50,
    available: true,
    description: "Naan filled with cheese.",
  },
  {
    id: 119,
    name: "Cheese Garlic Naan",
    category: "Tandoori",
    type: "Veg",
    price: 55,
    available: true,
    description: "Garlic naan with cheese.",
  },
  {
    id: 120,
    name: "Paratha",
    category: "Tandoori",
    type: "Veg",
    price: 35,
    available: true,
    description: "Traditional Indian paratha.",
  },
  {
    id: 121,
    name: "Butter Paratha",
    category: "Tandoori",
    type: "Veg",
    price: 40,
    available: true,
    description: "Paratha topped with butter.",
  },
  {
    id: 122,
    name: "Aloo Paratha",
    category: "Tandoori",
    type: "Veg",
    price: 60,
    available: true,
    description: "Paratha stuffed with potato.",
  },
  {
    id: 123,
    name: "Stuff Paratha",
    category: "Tandoori",
    type: "Veg",
    price: 60,
    available: true,
    description: "Stuffed Indian paratha.",
  },
  {
    id: 124,
    name: "Veg Paratha",
    category: "Tandoori",
    type: "Veg",
    price: 60,
    available: true,
    description: "Paratha stuffed with vegetables.",
  },
  {
    id: 125,
    name: "Methi Roti",
    category: "Tandoori",
    type: "Veg",
    price: 25,
    available: true,
    description: "Indian flatbread with fenugreek.",
  },
  {
    id: 126,
    name: "Methi Paratha",
    category: "Tandoori",
    type: "Veg",
    price: 40,
    available: true,
    description: "Paratha prepared with fenugreek.",
  },
  {
    id: 127,
    name: "Chapati",
    category: "Tandoori",
    type: "Veg",
    price: 15,
    available: true,
    description: "Fresh Indian chapati.",
  },
  {
    id: 128,
    name: "Butter Chapati",
    category: "Tandoori",
    type: "Veg",
    price: 16,
    available: true,
    description: "Chapati served with butter.",
  },

  // =========================================================
  // 11. PAPAD
  // =========================================================
  {
    id: 129,
    name: "Masala Papad",
    category: "Papad",
    type: "Veg",
    price: 35,
    available: true,
    description: "Crispy papad topped with masala.",
  },
  {
    id: 130,
    name: "Roasted Masala Papad",
    category: "Papad",
    type: "Veg",
    price: 10,
    available: true,
    description: "Roasted papad with masala.",
  },
  {
    id: 131,
    name: "Khicha Papad",
    category: "Papad",
    type: "Veg",
    price: 40,
    available: true,
    description: "Traditional khicha papad.",
  },
  {
    id: 132,
    name: "Khicha Masala Papad",
    category: "Papad",
    type: "Veg",
    price: 45,
    available: true,
    description: "Khicha papad with masala.",
  },
  {
    id: 133,
    name: "Fry Papad",
    category: "Papad",
    type: "Veg",
    price: 15,
    available: true,
    description: "Crispy fried papad.",
  },
  {
    id: 134,
    name: "Roasted Papad",
    category: "Papad",
    type: "Veg",
    price: 8,
    available: true,
    description: "Roasted papad.",
  },

  // =========================================================
  // 12. SOUPS
  // =========================================================
  {
    id: 135,
    name: "Tomato Soup",
    category: "Soups",
    type: "Veg",
    price: 115,
    available: true,
    description: "Classic creamy tomato soup.",
  },
  {
    id: 136,
    name: "Mushroom Soup",
    category: "Soups",
    type: "Veg",
    price: 120,
    available: true,
    description: "Warm mushroom soup.",
  },
  {
    id: 137,
    name: "Sweet Corn Soup",
    category: "Soups",
    type: "Veg",
    price: 120,
    available: true,
    description: "Sweet corn vegetable soup.",
  },
  {
    id: 138,
    name: "Veg Manchow Soup",
    category: "Soups",
    type: "Veg",
    price: 120,
    available: true,
    description: "Spicy Indo-Chinese Manchow soup.",
  },
  {
    id: 139,
    name: "Veg Clear Soup",
    category: "Soups",
    type: "Veg",
    price: 120,
    available: true,
    description: "Light clear vegetable soup.",
  },
  {
    id: 140,
    name: "Veg Lemon Coriander Soup",
    category: "Soups",
    type: "Veg",
    price: 130,
    available: true,
    description: "Vegetable soup with lemon and coriander.",
  },
  {
    id: 141,
    name: "Hot & Sour Soup",
    category: "Soups",
    type: "Veg",
    price: 120,
    available: true,
    description: "Hot and sour Indo-Chinese soup.",
  },
  {
    id: 142,
    name: "Babycorn Soup",
    category: "Soups",
    type: "Veg",
    price: 120,
    available: true,
    description: "Soup prepared with baby corn.",
  },
  {
    id: 143,
    name: "Veg Noodle Soup",
    category: "Soups",
    type: "Veg",
    price: 120,
    available: true,
    description: "Vegetable soup with noodles.",
  },
  {
    id: 144,
    name: "Babycorn Clear Soup",
    category: "Soups",
    type: "Veg",
    price: 120,
    available: true,
    description: "Clear soup with baby corn.",
  },
  {
    id: 145,
    name: "Babycorn Noodle Soup",
    category: "Soups",
    type: "Veg",
    price: 120,
    available: true,
    description: "Noodle soup with baby corn.",
  },
  {
    id: 146,
    name: "Palak Soup",
    category: "Soups",
    type: "Veg",
    price: 120,
    available: true,
    description: "Warm spinach soup.",
  },

  // =========================================================
  // 13. SWEETS
  // =========================================================
  {
    id: 147,
    name: "Shrikhand",
    category: "Sweets",
    type: "Veg",
    price: 100,
    available: true,
    description: "Sweetened strained yogurt dessert.",
  },
  {
    id: 148,
    name: "Shrikhand Puri",
    category: "Sweets",
    type: "Veg",
    price: 140,
    available: true,
    description: "Shrikhand served with puri.",
  },
  {
    id: 149,
    name: "Gulab Jamun",
    category: "Sweets",
    type: "Veg",
    price: 35,
    available: true,
    description: "Soft milk-solid dumplings in sugar syrup.",
  },
  {
    id: 150,
    name: "Rasgulla",
    category: "Sweets",
    type: "Veg",
    price: 80,
    available: true,
    description: "Soft Bengali-style syrupy sweet.",
  },
  {
    id: 151,
    name: "Ras Malai",
    category: "Sweets",
    type: "Veg",
    price: 80,
    available: true,
    description: "Soft paneer dumplings in sweetened milk.",
  },
  {
    id: 152,
    name: "Malai Sandwich",
    category: "Sweets",
    type: "Veg",
    price: 140,
    available: true,
    description: "Rich milk-based dessert.",
  },

  // =========================================================
  // 14. SANDWICH CORNER
  // =========================================================
  {
    id: 153,
    name: "Bread Butter",
    category: "Sandwich Corner",
    type: "Veg",
    price: 40,
    available: true,
    description: "Fresh bread served with butter.",
  },
  {
    id: 154,
    name: "Toast Butter",
    category: "Sandwich Corner",
    type: "Veg",
    price: 50,
    available: true,
    description: "Toasted bread with butter.",
  },
  {
    id: 155,
    name: "Veg Sandwich",
    category: "Sandwich Corner",
    type: "Veg",
    price: 75,
    available: true,
    description: "Sandwich filled with fresh vegetables.",
  },
  {
    id: 156,
    name: "Veg Toast Sandwich",
    category: "Sandwich Corner",
    type: "Veg",
    price: 80,
    available: true,
    description: "Toasted vegetable sandwich.",
  },
  {
    id: 157,
    name: "Cheese Sandwich",
    category: "Sandwich Corner",
    type: "Veg",
    price: 90,
    available: true,
    description: "Sandwich filled with cheese.",
  },
  {
    id: 158,
    name: "Cheese Toast Sandwich",
    category: "Sandwich Corner",
    type: "Veg",
    price: 90,
    available: true,
    description: "Toasted cheese sandwich.",
  },
  {
    id: 159,
    name: "Omlette Sandwich",
    category: "Sandwich Corner",
    type: "Veg",
    price: 95,
    available: true,
    description: "Menu-listed omelette sandwich.",
  },
  {
    id: 160,
    name: "Omlette Toast Sandwich",
    category: "Sandwich Corner",
    type: "Veg",
    price: 120,
    available: true,
    description: "Toasted omelette sandwich.",
  },
  {
    id: 161,
    name: "Paneer Sandwich",
    category: "Sandwich Corner",
    type: "Veg",
    price: 125,
    available: true,
    description: "Sandwich filled with paneer.",
  },
  {
    id: 162,
    name: "Paneer Toast Sandwich",
    category: "Sandwich Corner",
    type: "Veg",
    price: 130,
    available: true,
    description: "Toasted paneer sandwich.",
  },
  {
    id: 163,
    name: "Club Sandwich",
    category: "Sandwich Corner",
    type: "Veg",
    price: 130,
    available: true,
    description: "Layered club-style sandwich.",
  },

  // =========================================================
  // 15. PUNJABI DISHES
  // =========================================================
  {
    id: 164,
    name: "Dal Fry",
    category: "Punjabi Dishes",
    type: "Veg",
    price: 120,
    available: true,
    description: "Yellow dal tempered with Indian spices.",
  },
  {
    id: 165,
    name: "Butter Dal Fry",
    category: "Punjabi Dishes",
    type: "Veg",
    price: 125,
    available: true,
    description: "Dal fry finished with butter.",
  },
  {
    id: 166,
    name: "Plain Dal",
    category: "Punjabi Dishes",
    type: "Veg",
    price: 65,
    available: true,
    description: "Simple dal preparation.",
  },
  {
    id: 167,
    name: "Paneer Chana",
    category: "Punjabi Dishes",
    type: "Veg",
    price: 130,
    available: true,
    description: "Paneer and chickpeas in Indian gravy.",
  },
  {
    id: 168,
    name: "Dal Tadka",
    category: "Punjabi Dishes",
    type: "Veg",
    price: 130,
    available: true,
    description: "Dal finished with aromatic tadka.",
  },
  {
    id: 169,
    name: "Chana Masala",
    category: "Punjabi Dishes",
    type: "Veg",
    price: 110,
    available: true,
    description: "Chickpeas cooked in spicy masala.",
  },
  {
    id: 170,
    name: "Aloo Mutter",
    category: "Punjabi Dishes",
    type: "Veg",
    price: 120,
    available: true,
    description: "Potato and green peas curry.",
  },
  {
    id: 171,
    name: "Veg Kurma",
    category: "Punjabi Dishes",
    type: "Veg",
    price: 135,
    available: true,
    description: "Mixed vegetables in rich kurma gravy.",
  },
  {
    id: 172,
    name: "Peas Gobi",
    category: "Punjabi Dishes",
    type: "Veg",
    price: 125,
    available: true,
    description: "Green peas and cauliflower preparation.",
  },
  {
    id: 173,
    name: "Aloo Gobi",
    category: "Punjabi Dishes",
    type: "Veg",
    price: 100,
    available: true,
    description: "Potato and cauliflower curry.",
  },
  {
    id: 174,
    name: "Green Peas Masala",
    category: "Punjabi Dishes",
    type: "Veg",
    price: 140,
    available: true,
    description: "Green peas in masala gravy.",
  },
  {
    id: 175,
    name: "Green Peas Palak",
    category: "Punjabi Dishes",
    type: "Veg",
    price: 140,
    available: true,
    description: "Green peas cooked with spinach.",
  },
  {
    id: 176,
    name: "Baingan Masala",
    category: "Punjabi Dishes",
    type: "Veg",
    price: 125,
    available: true,
    description: "Eggplant cooked in masala.",
  },
  {
    id: 177,
    name: "Baingan Bhartha",
    category: "Punjabi Dishes",
    type: "Veg",
    price: 145,
    available: true,
    description: "Smoky mashed eggplant preparation.",
  },
  {
    id: 178,
    name: "Bhendi Masala",
    category: "Punjabi Dishes",
    type: "Veg",
    price: 120,
    available: true,
    description: "Okra cooked with Indian spices.",
  },
  {
    id: 179,
    name: "Bhendi Fry",
    category: "Punjabi Dishes",
    type: "Veg",
    price: 130,
    available: true,
    description: "Crispy fried okra.",
  },
  {
    id: 180,
    name: "Aloo Bhendi",
    category: "Punjabi Dishes",
    type: "Veg",
    price: 125,
    available: true,
    description: "Potato and okra preparation.",
  },
  {
    id: 181,
    name: "Bhendi Oil Fry",
    category: "Punjabi Dishes",
    type: "Veg",
    price: 125,
    available: true,
    description: "Okra fried with spices.",
  },
  {
    id: 182,
    name: "Aloo Palak",
    category: "Punjabi Dishes",
    type: "Veg",
    price: 130,
    available: true,
    description: "Potato cooked with spinach.",
  },
  {
    id: 183,
    name: "Palak Tadka",
    category: "Punjabi Dishes",
    type: "Veg",
    price: 120,
    available: true,
    description: "Spinach finished with tadka.",
  },
  {
    id: 184,
    name: "Tomato Fry / Masala",
    category: "Punjabi Dishes",
    type: "Veg",
    price: 110,
    available: true,
    description: "Tomato cooked with Indian spices.",
  },
  {
    id: 185,
    name: "Tomato Bartha",
    category: "Punjabi Dishes",
    type: "Veg",
    price: 130,
    available: true,
    description: "Cooked tomato-based preparation.",
  },
  {
    id: 186,
    name: "Stuff Tomato",
    category: "Punjabi Dishes",
    type: "Veg",
    price: 130,
    available: true,
    description: "Stuffed tomato preparation.",
  },
  {
    id: 187,
    name: "Green Peas Tomato",
    category: "Punjabi Dishes",
    type: "Veg",
    price: 110,
    available: true,
    description: "Green peas cooked with tomato.",
  },
  {
    id: 188,
    name: "Navratan Kurma",
    category: "Punjabi Dishes",
    type: "Veg",
    price: 140,
    available: true,
    description: "Rich mixed vegetable navratan kurma.",
  },
  {
    id: 189,
    name: "Veg Makhanwala",
    category: "Punjabi Dishes",
    type: "Veg",
    price: 140,
    available: true,
    description: "Vegetables in creamy makhanwala gravy.",
  },
  {
    id: 190,
    name: "Veg Kolhapuri",
    category: "Punjabi Dishes",
    type: "Veg",
    price: 140,
    available: true,
    description: "Spicy Kolhapuri-style vegetable curry.",
  },
  {
    id: 191,
    name: "Veg Jaipuri",
    category: "Punjabi Dishes",
    type: "Veg",
    price: 130,
    available: true,
    description: "Jaipuri-style vegetable preparation.",
  },
  {
    id: 192,
    name: "Veg Jal Fraize",
    category: "Punjabi Dishes",
    type: "Veg",
    price: 160,
    available: true,
    description: "Mixed vegetable preparation.",
  },
  {
    id: 193,
    name: "Aloo Jeera",
    category: "Punjabi Dishes",
    type: "Veg",
    price: 160,
    available: true,
    description: "Potatoes tempered with cumin.",
  },
  {
    id: 194,
    name: "Dahi Kadi",
    category: "Punjabi Dishes",
    type: "Veg",
    price: 90,
    available: true,
    description: "Yogurt-based Indian kadhi.",
  },

  // =========================================================
  // 16. PUNJABI SPECIAL
  // =========================================================
  {
    id: 195,
    name: "Veg Patiala",
    category: "Punjabi Special",
    type: "Veg",
    price: 240,
    available: true,
    description: "Special Punjabi-style vegetable preparation.",
  },
  {
    id: 196,
    name: "Mushroom Masala",
    category: "Punjabi Special",
    type: "Veg",
    price: 155,
    available: true,
    description: "Mushrooms in rich masala gravy.",
  },
  {
    id: 197,
    name: "Paneer Tikka Masala",
    category: "Punjabi Special",
    type: "Veg",
    price: 182,
    available: true,
    description: "Paneer tikka in creamy masala gravy.",
  },
  {
    id: 198,
    name: "Paneer Kolhapuri",
    category: "Punjabi Special",
    type: "Veg",
    price: 182,
    available: true,
    description: "Paneer cooked in spicy Kolhapuri gravy.",
  },
  {
    id: 199,
    name: "Paneer Makhanwala",
    category: "Punjabi Special",
    type: "Veg",
    price: 182,
    available: true,
    description: "Paneer in creamy buttery gravy.",
  },
  {
    id: 200,
    name: "Paneer Bhurji",
    category: "Punjabi Special",
    type: "Veg",
    price: 190,
    available: true,
    description: "Crumbled paneer cooked with spices.",
  },
  {
    id: 201,
    name: "Paneer Mutter",
    category: "Punjabi Special",
    type: "Veg",
    price: 150,
    available: true,
    description: "Paneer and green peas curry.",
  },
  {
    id: 202,
    name: "Paneer Palak",
    category: "Punjabi Special",
    type: "Veg",
    price: 150,
    available: true,
    description: "Paneer cooked in spinach gravy.",
  },
  {
    id: 203,
    name: "Paneer Kurma",
    category: "Punjabi Special",
    type: "Veg",
    price: 155,
    available: true,
    description: "Paneer in rich kurma gravy.",
  },
  {
    id: 204,
    name: "Bhindi Masala",
    category: "Punjabi Special",
    type: "Veg",
    price: 120,
    available: true,
    description: "Okra cooked with masala.",
  },
  {
    id: 205,
    name: "Bhindi Crispy",
    category: "Punjabi Special",
    type: "Veg",
    price: 140,
    available: true,
    description: "Crispy fried okra.",
  },
  {
    id: 206,
    name: "Shahi Paneer",
    category: "Punjabi Special",
    type: "Veg",
    price: 165,
    available: true,
    description: "Royal-style creamy paneer curry.",
  },
  {
    id: 207,
    name: "Shahi Palak",
    category: "Punjabi Special",
    type: "Veg",
    price: 150,
    available: true,
    description: "Rich spinach-based preparation.",
  },
  {
    id: 208,
    name: "Paneer Masala",
    category: "Punjabi Special",
    type: "Veg",
    price: 155,
    available: true,
    description: "Paneer cooked in Indian masala.",
  },
  {
    id: 209,
    name: "Mushroom Paneer Masala",
    category: "Punjabi Special",
    type: "Veg",
    price: 155,
    available: true,
    description: "Mushroom and paneer in masala gravy.",
  },
  {
    id: 210,
    name: "Methi Masala",
    category: "Punjabi Special",
    type: "Veg",
    price: 125,
    available: true,
    description: "Fenugreek-based masala preparation.",
  },
  {
    id: 211,
    name: "Malai Methi Mutter",
    category: "Punjabi Special",
    type: "Veg",
    price: 160,
    available: true,
    description: "Creamy fenugreek and peas curry.",
  },
  {
    id: 212,
    name: "Aloo Methi",
    category: "Punjabi Special",
    type: "Veg",
    price: 110,
    available: true,
    description: "Potato and fenugreek preparation.",
  },
  {
    id: 213,
    name: "Veg Chilly Fry Shimla",
    category: "Punjabi Special",
    type: "Veg",
    price: 110,
    available: true,
    description: "Spicy vegetable preparation with Shimla flavors.",
  },
  {
    id: 214,
    name: "Aloo Shimla",
    category: "Punjabi Special",
    type: "Veg",
    price: 120,
    available: true,
    description: "Potato and capsicum preparation.",
  },
  {
    id: 215,
    name: "Stuff Shimla",
    category: "Punjabi Special",
    type: "Veg",
    price: 130,
    available: true,
    description: "Stuffed Shimla mirch preparation.",
  },
  {
    id: 216,
    name: "Paneer Kofta",
    category: "Punjabi Special",
    type: "Veg",
    price: 170,
    available: true,
    description: "Paneer kofta in rich gravy.",
  },
  {
    id: 217,
    name: "Kaju Curry",
    category: "Punjabi Special",
    type: "Veg",
    price: 175,
    available: true,
    description: "Cashew curry in rich gravy.",
  },
  {
    id: 218,
    name: "Kaju Paneer",
    category: "Punjabi Special",
    type: "Veg",
    price: 190,
    available: true,
    description: "Paneer and cashews in creamy gravy.",
  },
  {
    id: 219,
    name: "Cheese Kofta",
    category: "Punjabi Special",
    type: "Veg",
    price: 150,
    available: true,
    description: "Cheese kofta in Indian gravy.",
  },
  {
    id: 220,
    name: "Malai Kofta",
    category: "Punjabi Special",
    type: "Veg",
    price: 150,
    available: true,
    description: "Soft kofta in creamy malai gravy.",
  },
  {
    id: 221,
    name: "Kashmiri Kofta",
    category: "Punjabi Special",
    type: "Veg",
    price: 160,
    available: true,
    description: "Kashmiri-style vegetable kofta.",
  },
  {
    id: 222,
    name: "Dam Aloo Kashmiri",
    category: "Punjabi Special",
    type: "Veg",
    price: 160,
    available: true,
    description: "Kashmiri-style dum aloo.",
  },
  {
    id: 223,
    name: "Cheese Peas Curry",
    category: "Punjabi Special",
    type: "Veg",
    price: 160,
    available: true,
    description: "Cheese and peas in rich curry.",
  },
  {
    id: 224,
    name: "Veg Handi",
    category: "Punjabi Special",
    type: "Veg",
    price: 160,
    available: true,
    description: "Mixed vegetables cooked in handi style.",
  },
  {
    id: 225,
    name: "Veg Kadai",
    category: "Punjabi Special",
    type: "Veg",
    price: 160,
    available: true,
    description: "Mixed vegetables in kadai masala.",
  },
  {
    id: 226,
    name: "Paneer Handi",
    category: "Punjabi Special",
    type: "Veg",
    price: 180,
    available: true,
    description: "Paneer cooked in handi-style gravy.",
  },

  // =========================================================
  // 17. STARTERS
  // =========================================================
  {
    id: 227,
    name: "Paneer Tikka Fry",
    category: "Starters",
    type: "Veg",
    price: 200,
    available: true,
    description: "Crispy fried paneer tikka.",
  },
  {
    id: 228,
    name: "Hara Bhara Kabab",
    category: "Starters",
    type: "Veg",
    price: 200,
    available: true,
    description: "Green vegetable and spinach kebab.",
  },
  {
    id: 229,
    name: "Veg Manchurian",
    category: "Starters",
    type: "Veg",
    price: 190,
    available: true,
    description: "Crispy vegetable balls in Manchurian sauce.",
  },
  {
    id: 230,
    name: "Mushroom Manchurian",
    category: "Starters",
    type: "Veg",
    price: 200,
    available: true,
    description: "Mushrooms tossed in Manchurian sauce.",
  },
  {
    id: 231,
    name: "Paneer Chilly",
    category: "Starters",
    type: "Veg",
    price: 200,
    available: true,
    description: "Paneer tossed with chilli and vegetables.",
  },
  {
    id: 232,
    name: "Paneer Manchurian",
    category: "Starters",
    type: "Veg",
    price: 200,
    available: true,
    description: "Paneer in Manchurian sauce.",
  },
  {
    id: 233,
    name: "Gobi Manchurian",
    category: "Starters",
    type: "Veg",
    price: 190,
    available: true,
    description: "Crispy cauliflower in Manchurian sauce.",
  },
  {
    id: 234,
    name: "Veg Crispy",
    category: "Starters",
    type: "Veg",
    price: 200,
    available: true,
    description: "Crispy fried mixed vegetables.",
  },
  {
    id: 235,
    name: "Veg Chilly",
    category: "Starters",
    type: "Veg",
    price: 200,
    available: true,
    description: "Vegetables tossed in chilli sauce.",
  },
  {
    id: 236,
    name: "Veg Spring Roll",
    category: "Starters",
    type: "Veg",
    price: 200,
    available: true,
    description: "Crispy vegetable spring rolls.",
  },
  {
    id: 237,
    name: "Paneer Garlic",
    category: "Starters",
    type: "Veg",
    price: 200,
    available: true,
    description: "Paneer cooked with garlic.",
  },
  {
    id: 238,
    name: "Ginger",
    category: "Starters",
    type: "Veg",
    price: 200,
    available: true,
    description: "Ginger-flavored starter preparation.",
  },
  {
    id: 239,
    name: "Veg 65",
    category: "Starters",
    type: "Veg",
    price: 190,
    available: true,
    description: "Crispy spicy vegetable 65.",
  },
  {
    id: 240,
    name: "Babycorn Manchurian",
    category: "Starters",
    type: "Veg",
    price: 200,
    available: true,
    description: "Baby corn in Manchurian sauce.",
  },
  {
    id: 241,
    name: "Veg Singapuri",
    category: "Starters",
    type: "Veg",
    price: 200,
    available: true,
    description: "Spicy Singapore-style vegetable starter.",
  },

  // =========================================================
  // 18. CHINESE RICE & NOODLES
  // =========================================================
  {
    id: 242,
    name: "Veg Hakka Noodles",
    category: "Chinese Rice & Noodles",
    type: "Veg",
    price: 190,
    available: true,
    description: "Stir-fried noodles with fresh vegetables.",
  },
  {
    id: 243,
    name: "Veg Triple Noodles",
    category: "Chinese Rice & Noodles",
    type: "Veg",
    price: 195,
    available: true,
    description: "Triple-style vegetable noodles.",
  },
  {
    id: 244,
    name: "Veg Schezwan Noodles",
    category: "Chinese Rice & Noodles",
    type: "Veg",
    price: 195,
    available: true,
    description: "Spicy Schezwan vegetable noodles.",
  },
  {
    id: 245,
    name: "Veg Hongkong Noodles",
    category: "Chinese Rice & Noodles",
    type: "Veg",
    price: 195,
    available: true,
    description: "Hong Kong-style vegetable noodles.",
  },
  {
    id: 246,
    name: "Veg American Chopsuey",
    category: "Chinese Rice & Noodles",
    type: "Veg",
    price: 210,
    available: true,
    description: "Crispy noodles with vegetable topping.",
  },
  {
    id: 247,
    name: "Veg Chowmein",
    category: "Chinese Rice & Noodles",
    type: "Veg",
    price: 210,
    available: true,
    description: "Classic vegetable chowmein.",
  },
  {
    id: 248,
    name: "Veg Fried Rice",
    category: "Chinese Rice & Noodles",
    type: "Veg",
    price: 150,
    available: true,
    description: "Chinese-style vegetable fried rice.",
  },
  {
    id: 249,
    name: "Veg Triple Fried Rice",
    category: "Chinese Rice & Noodles",
    type: "Veg",
    price: 170,
    available: true,
    description: "Triple-style vegetable fried rice.",
  },
  {
    id: 250,
    name: "Veg Schezwan Fried Rice",
    category: "Chinese Rice & Noodles",
    type: "Veg",
    price: 160,
    available: true,
    description: "Spicy Schezwan vegetable fried rice.",
  },
  {
    id: 251,
    name: "Mushroom Fried Rice",
    category: "Chinese Rice & Noodles",
    type: "Veg",
    price: 160,
    available: true,
    description: "Fried rice with mushrooms.",
  },
  {
    id: 252,
    name: "Mushroom Schezwan Rice",
    category: "Chinese Rice & Noodles",
    type: "Veg",
    price: 165,
    available: true,
    description: "Mushroom fried rice with Schezwan flavor.",
  },

  // =========================================================
  // 19. PIZZA HUT
  // =========================================================
  {
    id: 253,
    name: "Veg Pizza",
    category: "Pizza Hut",
    type: "Veg",
    price: 140,
    available: true,
    description: "Pizza topped with fresh vegetables.",
  },
  {
    id: 254,
    name: "Cheese Pizza",
    category: "Pizza Hut",
    type: "Veg",
    price: 160,
    available: true,
    description: "Classic cheese pizza.",
  },
  {
    id: 255,
    name: "Mushroom Pizza",
    category: "Pizza Hut",
    type: "Veg",
    price: 160,
    available: true,
    description: "Pizza topped with mushrooms.",
  },
  {
    id: 256,
    name: "Mix Pizza",
    category: "Pizza Hut",
    type: "Veg",
    price: 160,
    available: true,
    description: "Mixed vegetable pizza.",
  },
  {
    id: 257,
    name: "Paneer Pizza",
    category: "Pizza Hut",
    type: "Veg",
    price: 180,
    available: true,
    description: "Pizza topped with paneer.",
  },

  // =========================================================
  // 20. COLD BEVERAGES
  // =========================================================
  {
    id: 258,
    name: "Chass (Butter Milk)",
    category: "Cold Beverages",
    type: "Veg",
    price: 32,
    available: true,
    description: "Refreshing spiced buttermilk.",
  },
  {
    id: 259,
    name: "Chass (Plain)",
    category: "Cold Beverages",
    type: "Veg",
    price: 32,
    available: true,
    description: "Plain chilled buttermilk.",
  },
  {
    id: 260,
    name: "Lassi",
    category: "Cold Beverages",
    type: "Veg",
    price: 70,
    available: true,
    description: "Traditional chilled yogurt drink.",
  },
  {
    id: 261,
    name: "Mango Lassi",
    category: "Cold Beverages",
    type: "Veg",
    price: 75,
    available: true,
    description: "Creamy mango lassi.",
  },
  {
    id: 262,
    name: "Soft Drinks (300 ml)",
    category: "Cold Beverages",
    type: "Veg",
    price: 30,
    available: true,
    description: "Assorted soft drink, 300 ml.",
  },
  {
    id: 263,
    name: "Soft Drinks (500 ml)",
    category: "Cold Beverages",
    type: "Veg",
    price: 55,
    available: true,
    description: "Assorted soft drink, 500 ml.",
  },
  {
    id: 264,
    name: "Diet Coke",
    category: "Cold Beverages",
    type: "Veg",
    price: 60,
    available: true,
    description: "Diet Coke.",
  },
  {
    id: 265,
    name: "Rio",
    category: "Cold Beverages",
    type: "Veg",
    price: null,
    available: true,
    description: "Rio beverage. Price not visible in menu.",
  },
  {
    id: 266,
    name: "Fresh Lime Soda",
    category: "Cold Beverages",
    type: "Veg",
    price: 45,
    available: true,
    description: "Refreshing fresh lime soda.",
  },

  // =========================================================
  // 21. JUICES — SEASONAL
  // =========================================================
  {
    id: 267,
    name: "Mosambi",
    category: "Juices — Seasonal",
    type: "Veg",
    price: 100,
    available: true,
    description: "Fresh seasonal sweet lime juice.",
  },
  {
    id: 268,
    name: "Orange",
    category: "Juices — Seasonal",
    type: "Veg",
    price: 100,
    available: true,
    description: "Fresh seasonal orange juice.",
  },
  {
    id: 269,
    name: "Ganga Jamuna",
    category: "Juices — Seasonal",
    type: "Veg",
    price: 100,
    available: true,
    description: "Fresh mixed fruit juice.",
  },
  {
    id: 270,
    name: "Pineapple",
    category: "Juices — Seasonal",
    type: "Veg",
    price: 100,
    available: true,
    description: "Fresh pineapple juice.",
  },
  {
    id: 271,
    name: "Cocktail Juice",
    category: "Juices — Seasonal",
    type: "Veg",
    price: 100,
    available: true,
    description: "Mixed seasonal fruit cocktail juice.",
  },
  {
    id: 272,
    name: "Maramari (Pineapple & Mosambi)",
    category: "Juices — Seasonal",
    type: "Veg",
    price: 100,
    available: true,
    description: "Blend of pineapple and mosambi juice.",
  },

  // =========================================================
  // 22. MILK SHAKES — SEASONAL
  // =========================================================
  {
    id: 273,
    name: "Cold Coffee",
    category: "Milk Shakes — Seasonal",
    type: "Veg",
    price: 100,
    available: true,
    description: "Chilled creamy cold coffee.",
  },
  {
    id: 274,
    name: "Apple Milk Shake",
    category: "Milk Shakes — Seasonal",
    type: "Veg",
    price: 110,
    available: true,
    description: "Creamy apple milk shake.",
  },
  {
    id: 275,
    name: "Chikku Milk Shake",
    category: "Milk Shakes — Seasonal",
    type: "Veg",
    price: 110,
    available: true,
    description: "Creamy chikku milk shake.",
  },
  {
    id: 276,
    name: "Mango Milk Shake",
    category: "Milk Shakes — Seasonal",
    type: "Veg",
    price: 110,
    available: true,
    description: "Creamy mango milk shake.",
  },
  {
    id: 277,
    name: "Chocolate Milk Shake",
    category: "Milk Shakes — Seasonal",
    type: "Veg",
    price: 110,
    available: true,
    description: "Rich chocolate milk shake.",
  },
  {
    id: 278,
    name: "Strawberry Milk Shake",
    category: "Milk Shakes — Seasonal",
    type: "Veg",
    price: 120,
    available: true,
    description: "Creamy strawberry milk shake.",
  },
  {
    id: 279,
    name: "Vanilla Milk Shake",
    category: "Milk Shakes — Seasonal",
    type: "Veg",
    price: 120,
    available: true,
    description: "Classic vanilla milk shake.",
  },

  // =========================================================
  // 23. ICE CREAM
  // =========================================================
  {
    id: 280,
    name: "Kesar Pista",
    category: "Ice Cream",
    type: "Veg",
    price: null,
    available: true,
    description: "Kesar pista ice cream. Price not visible in menu.",
  },
  {
    id: 281,
    name: "Butter Scotch",
    category: "Ice Cream",
    type: "Veg",
    price: null,
    available: true,
    description: "Butterscotch ice cream. Price not visible in menu.",
  },
  {
    id: 282,
    name: "Vanilla",
    category: "Ice Cream",
    type: "Veg",
    price: null,
    available: true,
    description: "Classic vanilla ice cream. Price not visible in menu.",
  },
  {
    id: 283,
    name: "Vanilla (Small)",
    category: "Ice Cream",
    type: "Veg",
    price: null,
    available: true,
    description: "Small vanilla ice cream. Price not visible in menu.",
  },
  {
    id: 284,
    name: "Casatta",
    category: "Ice Cream",
    type: "Veg",
    price: null,
    available: true,
    description: "Casatta ice cream. Price not visible in menu.",
  },
  {
    id: 285,
    name: "Chocobar",
    category: "Ice Cream",
    type: "Veg",
    price: null,
    available: true,
    description: "Chocolate-coated ice cream bar. Price not visible in menu.",
  },
  {
    id: 286,
    name: "Mango / Raspberry Duet",
    category: "Ice Cream",
    type: "Veg",
    price: null,
    available: true,
    description: "Mango and raspberry duet ice cream. Price not visible in menu.",
  },
  {
    id: 287,
    name: "King Cone",
    category: "Ice Cream",
    type: "Veg",
    price: null,
    available: true,
    description: "King Cone ice cream. Price not visible in menu.",
  },
  {
    id: 288,
    name: "Tricone",
    category: "Ice Cream",
    type: "Veg",
    price: null,
    available: true,
    description: "Tricone ice cream. Price not visible in menu.",
  },
  {
    id: 289,
    name: "Rajbhog",
    category: "Ice Cream",
    type: "Veg",
    price: null,
    available: true,
    description: "Rajbhog ice cream. Price not visible in menu.",
  },
  {
    id: 290,
    name: "Shahi Anjeer",
    category: "Ice Cream",
    type: "Veg",
    price: null,
    available: true,
    description: "Shahi Anjeer ice cream. Price not visible in menu.",
  },
  {
    id: 291,
    name: "Kulfi",
    category: "Ice Cream",
    type: "Veg",
    price: null,
    available: true,
    description: "Traditional Indian kulfi. Price not visible in menu.",
  },
  {
    id: 292,
    name: "Alphanso Mango",
    category: "Ice Cream",
    type: "Veg",
    price: null,
    available: true,
    description: "Alphonso mango ice cream. Price not visible in menu.",
  },
  {
    id: 293,
    name: "Quick Sundae",
    category: "Ice Cream",
    type: "Veg",
    price: null,
    available: true,
    description: "Quick sundae. Price not visible in menu.",
  },
  {
    id: 294,
    name: "Strawberry",
    category: "Ice Cream",
    type: "Veg",
    price: null,
    available: true,
    description: "Strawberry ice cream. Price not visible in menu.",
  },
];

function Menu() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  const [menuItems, setMenuItems] = useState(createMenuItems());

  const [form, setForm] = useState({
    name: "",
    category: "Hot Beverages",
    type: "Veg",
    price: "",
    description: "",
    available: true,
  });

  const categoryConfig = [
    {
      name: "All",
      icon: UtensilsCrossed,
      description: "Entire menu",
    },
    {
      name: "Hot Beverages",
      icon: Coffee,
      description: "Tea & coffee",
    },
    {
      name: "South Indian / Snacks",
      icon: Salad,
      description: "South Indian & snacks",
    },
    {
      name: "Veg Pakoda",
      icon: Leaf,
      description: "Crispy pakodas",
    },
    {
      name: "Pav Bhaji",
      icon: UtensilsCrossed,
      description: "Pav & bhaji",
    },
    {
      name: "Lunch Services",
      icon: UtensilsCrossed,
      description: "Lunch & dinner",
    },
    {
      name: "Veg Gravy / Main Course",
      icon: Soup,
      description: "Main course",
    },
    {
      name: "Raita",
      icon: Salad,
      description: "Fresh raita",
    },
    {
      name: "Salad",
      icon: Salad,
      description: "Fresh salads",
    },
    {
      name: "Special Rice Dishes",
      icon: Wheat,
      description: "Rice specialties",
    },
    {
      name: "Tandoori",
      icon: Wheat,
      description: "Rotis & breads",
    },
    {
      name: "Papad",
      icon: UtensilsCrossed,
      description: "Papad varieties",
    },
    {
      name: "Soups",
      icon: Soup,
      description: "Hot soups",
    },
    {
      name: "Sweets",
      icon: CakeSlice,
      description: "Indian sweets",
    },
    {
      name: "Sandwich Corner",
      icon: UtensilsCrossed,
      description: "Sandwiches",
    },
    {
      name: "Punjabi Dishes",
      icon: Soup,
      description: "Punjabi favorites",
    },
    {
      name: "Punjabi Special",
      icon: Soup,
      description: "Special Punjabi dishes",
    },
    {
      name: "Starters",
      icon: UtensilsCrossed,
      description: "Veg starters",
    },
    {
      name: "Chinese Rice & Noodles",
      icon: UtensilsCrossed,
      description: "Chinese favorites",
    },
    {
      name: "Pizza Hut",
      icon: UtensilsCrossed,
      description: "Fresh pizzas",
    },
    {
      name: "Cold Beverages",
      icon: GlassWater,
      description: "Cold drinks",
    },
    {
      name: "Juices — Seasonal",
      icon: GlassWater,
      description: "Fresh juices",
    },
    {
      name: "Milk Shakes — Seasonal",
      icon: GlassWater,
      description: "Milk shakes",
    },
    {
      name: "Ice Cream",
      icon: CakeSlice,
      description: "Ice cream & desserts",
    },
  ];

  const categories = categoryConfig.map(
    (category) => category.name
  );

  const getCategoryIcon = (category) => {
    const found = categoryConfig.find(
      (item) => item.name === category
    );

    return found ? found.icon : UtensilsCrossed;
  };

  const getCategoryCount = (category) => {
    if (category === "All") {
      return menuItems.length;
    }

    return menuItems.filter(
      (item) => item.category === category
    ).length;
  };

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory =
      activeCategory === "All" ||
      item.category === activeCategory;

    const searchText = search.toLowerCase().trim();

    const matchesSearch =
      item.name.toLowerCase().includes(searchText) ||
      item.category.toLowerCase().includes(searchText) ||
      item.description.toLowerCase().includes(searchText);

    return matchesCategory && matchesSearch;
  });

  const totalItems = menuItems.length;

  const availableItems = menuItems.filter(
    (item) => item.available
  ).length;

  const unavailableItems = menuItems.filter(
    (item) => !item.available
  ).length;

  const vegetarianItems = menuItems.filter(
    (item) => item.type === "Veg"
  ).length;

  const nonVegetarianItems = menuItems.filter(
    (item) => item.type === "Non-Veg"
  ).length;

  const handleFormChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm((current) => ({
      ...current,
      [name]:
        type === "checkbox" ? checked : value,
    }));
  };

  const resetForm = () => {
    setForm({
      name: "",
      category: "Hot Beverages",
      type: "Veg",
      price: "",
      description: "",
      available: true,
    });

    setEditingItem(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.category) {
      alert("Please fill all required fields.");
      return;
    }

    if (editingItem) {
      setMenuItems((current) =>
        current.map((item) =>
          item.id === editingItem.id
            ? {
                ...item,
                name: form.name.trim(),
                category: form.category,
                type: form.type,
                price:
                  form.price === ""
                    ? null
                    : Number(form.price),
                description:
                  form.description.trim(),
                available: form.available,
              }
            : item
        )
      );
    } else {
      const newItem = {
        id: Date.now(),
        name: form.name.trim(),
        category: form.category,
        type: form.type,
        price:
          form.price === ""
            ? null
            : Number(form.price),
        description:
          form.description.trim(),
        available: form.available,
      };

      setMenuItems((current) => [
        newItem,
        ...current,
      ]);
    }

    resetForm();
    setShowForm(false);
  };

  const handleEdit = (item) => {
    setEditingItem(item);

    setForm({
      name: item.name,
      category: item.category,
      type: item.type,
      price: item.price ?? "",
      description: item.description || "",
      available: item.available,
    });

    setShowForm(true);
  };

  const handleDelete = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this menu item?"
    );

    if (!confirmed) return;

    setMenuItems((current) =>
      current.filter((item) => item.id !== id)
    );
  };

  const toggleAvailability = (id) => {
    setMenuItems((current) =>
      current.map((item) =>
        item.id === id
          ? {
              ...item,
              available: !item.available,
            }
          : item
      )
    );
  };

  return (
    <div className="menu-page">

      {/* HEADER */}

      <div className="menu-page-header">
        <div>
          <div className="menu-title-row">
            <div className="menu-title-icon">
              <UtensilsCrossed size={18} />
            </div>

            <div>
              <p className="module-label">
                FOOD & BEVERAGE
              </p>

              <h2>Menu Management</h2>
            </div>
          </div>

          <p className="menu-page-description">
            Manage dishes, pricing and availability
            for the restaurant.
          </p>
        </div>

        <button
          className="menu-add-button"
          onClick={() => {
            resetForm();
            setShowForm(true);
          }}
        >
          <Plus size={16} />
          Add Menu Item
        </button>
      </div>

      {/* SUMMARY */}

      <div className="menu-summary">

        <div className="menu-summary-card">
          <div className="menu-summary-icon">
            <UtensilsCrossed size={17} />
          </div>

          <div>
            <span>Total Items</span>
            <strong>{totalItems}</strong>
          </div>
        </div>

        <div className="menu-summary-card success">
          <div className="menu-summary-icon">
            <CheckCircle2 size={17} />
          </div>

          <div>
            <span>Available</span>
            <strong>{availableItems}</strong>
          </div>
        </div>

        <div className="menu-summary-card danger">
          <div className="menu-summary-icon">
            <XCircle size={17} />
          </div>

          <div>
            <span>Unavailable</span>
            <strong>{unavailableItems}</strong>
          </div>
        </div>

        <div className="menu-summary-card veg-card">
          <div className="menu-summary-icon">
            <Leaf size={17} />
          </div>

          <div>
            <span>Vegetarian</span>
            <strong>{vegetarianItems}</strong>
          </div>
        </div>

        <div className="menu-summary-card nonveg-card">
          <div className="menu-summary-icon">
            <Drumstick size={17} />
          </div>

          <div>
            <span>Non-Vegetarian</span>
            <strong>{nonVegetarianItems}</strong>
          </div>
        </div>

      </div>

      {/* CATEGORY SECTION */}

      <div className="menu-category-section">

        <div className="menu-section-heading">
          <div>
            <h3>Browse Menu</h3>
            <p>Select a category to view dishes</p>
          </div>
        </div>

        <div className="menu-category-grid">

          {categoryConfig.map((category) => {
            const Icon = category.icon;
            const count = getCategoryCount(
              category.name
            );

            const active =
              activeCategory === category.name;

            return (
              <button
                key={category.name}
                className={
                  active
                    ? "menu-category-card active"
                    : "menu-category-card"
                }
                onClick={() =>
                  setActiveCategory(category.name)
                }
              >
                <div className="menu-category-icon">
                  <Icon size={19} />
                </div>

                <div className="menu-category-info">
                  <strong>{category.name}</strong>
                  <span>{category.description}</span>
                </div>

                <div className="menu-category-count">
                  {count}
                </div>

                <ChevronRight
                  size={14}
                  className="menu-category-arrow"
                />
              </button>
            );
          })}

        </div>
      </div>

      {/* SEARCH / FILTER BAR */}

      <div className="menu-toolbar">

        <div>
          <strong>
            {activeCategory === "All"
              ? "All Menu Items"
              : activeCategory}
          </strong>

          <span>
            {filteredItems.length}{" "}
            {filteredItems.length === 1
              ? "item"
              : "items"}
          </span>
        </div>

        <div className="menu-search-new">
          <Search size={15} />

          <input
            type="text"
            placeholder="Search dishes, categories..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

          {search && (
            <button
              onClick={() => setSearch("")}
              className="clear-search"
            >
              <X size={13} />
            </button>
          )}
        </div>

      </div>

      {/* MENU GRID */}

      <div className="menu-grid-new">

        {filteredItems.map((item) => {
          const CategoryIcon = getCategoryIcon(
            item.category
          );

          return (
            <div
              className={`menu-card-new ${
                !item.available
                  ? "menu-card-disabled"
                  : ""
              }`}
              key={item.id}
            >

              {/* VISUAL HEADER */}

              <div className="menu-card-visual">

                <div className="menu-food-icon">
                  <CategoryIcon size={30} />
                </div>

                <div className="menu-card-visual-category">
                  <span>
                    {item.category}
                  </span>
                </div>

                <div
                  className={
                    item.type === "Veg"
                      ? "food-type-badge veg"
                      : "food-type-badge nonveg"
                  }
                >
                  {item.type === "Veg" ? (
                    <Leaf size={10} />
                  ) : (
                    <Drumstick size={10} />
                  )}

                  {item.type}
                </div>

                {!item.available && (
                  <div className="unavailable-overlay">
                    <PackageX size={15} />
                    Currently Unavailable
                  </div>
                )}

              </div>

              {/* CONTENT */}

              <div className="menu-card-body">

                <div className="menu-card-name-row">
                  <h3>{item.name}</h3>

                  <div className="menu-price">
                    {item.price !== null
                      ? `₹${item.price.toLocaleString()}`
                      : "Price unavailable"}
                  </div>
                </div>

                <p className="menu-card-description">
                  {item.description}
                </p>

                <div className="menu-card-status-row">

                  <span
                    className={
                      item.available
                        ? "menu-status available"
                        : "menu-status unavailable"
                    }
                  >
                    {item.available ? (
                      <CheckCircle2 size={12} />
                    ) : (
                      <XCircle size={12} />
                    )}

                    {item.available
                      ? "Available"
                      : "Unavailable"}
                  </span>

                  <span className="menu-card-id">
                    ITEM #{String(item.id).slice(-4)}
                  </span>

                </div>

              </div>

              {/* ACTIONS */}

              <div className="menu-card-actions">

                <button
                  className="availability-action"
                  onClick={() =>
                    toggleAvailability(item.id)
                  }
                >
                  {item.available ? (
                    <>
                      <XCircle size={13} />
                      Mark Unavailable
                    </>
                  ) : (
                    <>
                      <CheckCircle2 size={13} />
                      Make Available
                    </>
                  )}
                </button>

                <button
                  className="icon-action edit"
                  title="Edit item"
                  onClick={() =>
                    handleEdit(item)
                  }
                >
                  <Pencil size={14} />
                </button>

                <button
                  className="icon-action delete"
                  title="Delete item"
                  onClick={() =>
                    handleDelete(item.id)
                  }
                >
                  <Trash2 size={14} />
                </button>

              </div>

            </div>
          );
        })}

      </div>

      {/* EMPTY STATE */}

      {filteredItems.length === 0 && (
        <div className="menu-empty-state">

          <div className="menu-empty-icon">
            <Search size={27} />
          </div>

          <h3>No menu items found</h3>

          <p>
            Try changing your search or selecting
            another category.
          </p>

          <button
            onClick={() => {
              setSearch("");
              setActiveCategory("All");
            }}
          >
            Clear Filters
          </button>

        </div>
      )}

      {/* ADD / EDIT MODAL */}

      {showForm && (
        <div
          className="modal-overlay"
          onClick={() => {
            setShowForm(false);
            resetForm();
          }}
        >
          <div
            className="menu-modal-new"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            <div className="menu-modal-header">

              <div className="menu-modal-title">

                <div className="menu-modal-icon">
                  {editingItem ? (
                    <Pencil size={17} />
                  ) : (
                    <Plus size={18} />
                  )}
                </div>

                <div>
                  <p>FOOD & BEVERAGE</p>

                  <h2>
                    {editingItem
                      ? "Edit Menu Item"
                      : "Add Menu Item"}
                  </h2>
                </div>

              </div>

              <button
                className="modal-close"
                onClick={() => {
                  setShowForm(false);
                  resetForm();
                }}
              >
                <X size={17} />
              </button>

            </div>

            <form
              className="menu-form-new"
              onSubmit={handleSubmit}
            >

              <div className="form-group">
                <label>
                  Item Name <span>*</span>
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="e.g. Paneer Tikka"
                  value={form.name}
                  onChange={handleFormChange}
                />
              </div>

              <div className="form-grid">

                <div className="form-group">
                  <label>
                    Category <span>*</span>
                  </label>

                  <select
                    name="category"
                    value={form.category}
                    onChange={handleFormChange}
                  >
                    {categories
                      .filter(
                        (category) =>
                          category !== "All"
                      )
                      .map((category) => (
                        <option
                          key={category}
                          value={category}
                        >
                          {category}
                        </option>
                      ))}
                  </select>
                </div>

                <div className="form-group">
                  <label>
                    Food Type <span>*</span>
                  </label>

                  <select
                    name="type"
                    value={form.type}
                    onChange={handleFormChange}
                  >
                    <option value="Veg">
                      Vegetarian
                    </option>

                    <option value="Non-Veg">
                      Non-Vegetarian
                    </option>
                  </select>
                </div>

              </div>

              <div className="form-group">
                <label>
                  Price (₹)
                </label>

                <div className="price-input">
                  <span>₹</span>

                  <input
                    type="number"
                    name="price"
                    min="0"
                    placeholder="Leave blank if unavailable"
                    value={form.price}
                    onChange={handleFormChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Description</label>

                <textarea
                  name="description"
                  rows="4"
                  placeholder="Describe the dish..."
                  value={form.description}
                  onChange={handleFormChange}
                />
              </div>

              <label className="menu-availability-toggle-new">

                <input
                  type="checkbox"
                  name="available"
                  checked={form.available}
                  onChange={handleFormChange}
                />

                <div>
                  <strong>
                    Item is currently available
                  </strong>

                  <span>
                    Customers can order this item
                  </span>
                </div>

              </label>

              <div className="form-actions">

                <button
                  type="button"
                  className="secondary-button"
                  onClick={() => {
                    setShowForm(false);
                    resetForm();
                  }}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="menu-save-button"
                >
                  {editingItem ? (
                    <>
                      <CheckCircle2 size={14} />
                      Save Changes
                    </>
                  ) : (
                    <>
                      <Plus size={14} />
                      Add Menu Item
                    </>
                  )}
                </button>

              </div>

            </form>

          </div>
        </div>
      )}

    </div>
  );
}

export default Menu;