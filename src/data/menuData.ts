export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image?: string;
  isPopular?: boolean;
  isSpicy?: boolean;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export const menuItems: MenuItem[] = [
  // Biryanis
  {
    id: "1",
    name: "Chicken Biryani",
    description: "Fragrant basmati rice layered with tender chicken, aromatic spices, and saffron",
    price: 650,
    category: "Biryani",
    isPopular: true,
  },
  {
    id: "2",
    name: "Mutton Biryani",
    description: "Premium mutton slow-cooked with aged basmati rice and traditional Lahori spices",
    price: 850,
    category: "Biryani",
    isPopular: true,
  },
  {
    id: "3",
    name: "Beef Biryani",
    description: "Tender beef pieces with fragrant rice, fried onions, and secret spice blend",
    price: 750,
    category: "Biryani",
  },
  // BBQ & Kebabs
  {
    id: "4",
    name: "Seekh Kebab",
    description: "Minced beef kebabs grilled to perfection with herbs and spices",
    price: 450,
    category: "BBQ",
    isSpicy: true,
  },
  {
    id: "5",
    name: "Chicken Tikka",
    description: "Marinated chicken pieces grilled in tandoor with special tikka masala",
    price: 550,
    category: "BBQ",
    isPopular: true,
  },
  {
    id: "6",
    name: "Malai Boti",
    description: "Creamy, tender chicken chunks marinated in yogurt and cream",
    price: 600,
    category: "BBQ",
  },
  {
    id: "7",
    name: "Reshmi Kebab",
    description: "Silky smooth chicken kebabs with a delicate blend of cream and spices",
    price: 500,
    category: "BBQ",
  },
  // Karahi
  {
    id: "8",
    name: "Chicken Karahi",
    description: "Wok-tossed chicken with tomatoes, green chilies, and ginger",
    price: 1200,
    category: "Karahi",
    isSpicy: true,
    isPopular: true,
  },
  {
    id: "9",
    name: "Mutton Karahi",
    description: "Traditional Lahori mutton karahi with fresh spices and ghee",
    price: 1500,
    category: "Karahi",
    isSpicy: true,
  },
  {
    id: "10",
    name: "Namkeen Gosht",
    description: "Simple salted meat cooked in its own juices with minimal spices",
    price: 1400,
    category: "Karahi",
  },
  // Curries
  {
    id: "11",
    name: "Butter Chicken",
    description: "Creamy tomato-based curry with tender chicken pieces",
    price: 750,
    category: "Curries",
    isPopular: true,
  },
  {
    id: "12",
    name: "Nihari",
    description: "Slow-cooked beef shank in rich, spiced gravy - Lahore's specialty",
    price: 850,
    category: "Curries",
    isPopular: true,
    isSpicy: true,
  },
  {
    id: "13",
    name: "Haleem",
    description: "Slow-cooked blend of wheat, lentils, and meat with aromatic spices",
    price: 650,
    category: "Curries",
  },
  // Naan & Roti
  {
    id: "14",
    name: "Tandoori Naan",
    description: "Freshly baked traditional naan from clay oven",
    price: 50,
    category: "Bread",
  },
  {
    id: "15",
    name: "Garlic Naan",
    description: "Butter-brushed naan topped with fresh garlic and herbs",
    price: 80,
    category: "Bread",
  },
  {
    id: "16",
    name: "Roghni Naan",
    description: "Rich, buttery naan sprinkled with sesame seeds",
    price: 70,
    category: "Bread",
  },
  // Desserts
  {
    id: "17",
    name: "Gulab Jamun",
    description: "Deep-fried milk dumplings soaked in rose-flavored sugar syrup",
    price: 200,
    category: "Desserts",
  },
  {
    id: "18",
    name: "Kheer",
    description: "Creamy rice pudding with cardamom, nuts, and saffron",
    price: 250,
    category: "Desserts",
  },
  // Beverages
  {
    id: "19",
    name: "Lassi",
    description: "Traditional Punjabi yogurt drink - sweet or salted",
    price: 150,
    category: "Beverages",
  },
  {
    id: "20",
    name: "Doodh Patti",
    description: "Strong milk tea brewed the Lahori way",
    price: 100,
    category: "Beverages",
  },
];

export const categories = [
  "All",
  "Biryani",
  "BBQ",
  "Karahi",
  "Curries",
  "Bread",
  "Desserts",
  "Beverages",
];
