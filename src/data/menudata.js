import {
  FaLeaf,
  FaDrumstickBite,
  FaIceCream,
  FaGlassWhiskey,
  FaUtensilSpoon,
  FaFish,
  FaUsers,
  FaSmoking,
  FaPizzaSlice,
} from "react-icons/fa";
import { GiRiceCooker } from "react-icons/gi";
import { MdSoupKitchen } from "react-icons/md";
import { BiSolidDrink } from "react-icons/bi";

const TOAST_MENU_URL = "https://order.toasttab.com/online/aban-restaurant";

export const menuData = [
  {
    id: "appetizers",
    name: "Appetizers",
    icon: <FaLeaf size={20} />,
    items: [
      {
        name: "Kashk O Bademjan",
        price: 7.95,
        image: "/menu/Kashk_o_Bademjan_1.jpg",
        description:
          "Roasted eggplant blended with whey, caramelized onion, and mint.",
        link: "https://order.toasttab.com/online/aban-restaurant",
      },
      {
        name: "Mast O Khiar",
        price: 6.95,
        image: "/menu/Mast_o_Khiar_1.jpg",
        description: "Yogurt, cucumber, dry mint",
        link: "https://order.toasttab.com/online/aban-restaurant",
      },
      {
        name: "Baba Ghanouj",
        price: 6.95,
        image: "/menu/Mirza_Ghasemi_2.jpg",
        description: "Smoky eggplant dip with tahini, lemon, and olive oil.",
        link: TOAST_MENU_URL,
      },
      {
        name: "Hummus",
        price: 6.95,
        image: "/menu/Hummus_1.jpg",
        description:
          "Creamy chickpea dip with tahini, lemon, garlic, and olive oil.",
        link: "https://order.toasttab.com/online/aban-restaurant",
      },
      {
        name: "Labneh",
        price: 6.95,
        image: "/menu/Mast_o_Khiar_1.jpg",
        description: "Strained yogurt dip finished with olive oil and herbs.",
        link: TOAST_MENU_URL,
      },
      {
        name: "Falafel",
        price: 6.95,
        image: "/menu/Falafel_2.jpg",
        description: "Crispy chickpea fritters with herbs and warm pita.",
        link: "https://order.toasttab.com/online/aban-restaurant",
      },
      {
        name: "Herb Plate",
        price: 5.95,
        image: "/menu/Herb_Plate_1.jpg",
        description: "Fresh herbs, feta cheese, walnuts, and warm bread.",
        link: "https://order.toasttab.com/online/aban-restaurant",
      },
      {
        name: "Kibbeh",
        price: 8.95,
        image: "/menu/Falafel_2.jpg",
        description: "Crispy bulgur shells stuffed with seasoned beef and onions.",
        link: TOAST_MENU_URL,
      },
      {
        name: "Sambousik",
        price: 7.95,
        image: "/menu/Appetizer_Hero_3.jpg",
        description: "Hand pies filled with cheese, spinach, or seasoned beef.",
        link: TOAST_MENU_URL,
      },
      {
        name: "Appetizer Sampler",
        price: 16.95,
        image: "/menu/Appetizer_Hero_3.jpg",
        description: "A shareable sampler of Aban's favorite hot and cold appetizers.",
        link: TOAST_MENU_URL,
      },
    ],
  },
  {
    id: "soups-salads",
    name: "Soup & Salad",
    icon: <FaUtensilSpoon size={20} />,
    items: [
      {
        name: "Barley Soup",
        price: 7.95,
        image: "/menu/Daily_Soup_1.jpg",
        description: "Creamy barley soup simmered daily with vegetables and herbs.",
        link: "https://order.toasttab.com/online/aban-restaurant",
      },
      {
        name: "Greek Salad",
        price: 8.95,
        image: "/menu/Greek_Salad_1.jpg",
        description:
          "Romaine, tomato, cucumber, olives, and feta with house dressing.",
        link: "https://order.toasttab.com/online/aban-restaurant",
      },
      {
        name: "Shirazi Salad",
        price: 7.95,
        image: "/menu/Shirazi_Salad_1.jpg",
        description:
          "Finely chopped cucumber, tomato, onion, and parsley with citrus dressing.",
        link: "https://order.toasttab.com/online/aban-restaurant",
      },
      {
        name: "House Salad",
        price: 7.95,
        image: "/menu/House_Salad_1.jpg",
        description: "Lettuce, carrot, cucumber, red cabbage",
        link: "https://order.toasttab.com/online/aban-restaurant",
      },
      {
        name: "Tabbouli",
        price: 7.95,
        image: "/menu/Shirazi_Salad_1.jpg",
        description: "Parsley, bulgur, tomato, onion, lemon, and olive oil.",
        link: TOAST_MENU_URL,
      },
    ],
  },
  {
    id: "stews",
    name: "Stews",
    icon: <MdSoupKitchen size={20} />,
    items: [
      {
        name: "Ghormeh Sabzi",
        price: 15.95,
        image: "/menu/ghrome-sabzi.jpg",
        description:
          "Traditional herb stew with beef, red beans, dried lime, and saffron rice.",
        link: "https://order.toasttab.com/online/aban-restaurant",
      },
      {
        name: "Gheimeh",
        price: 13.95,
        image: "/menu/gheyme.jpg",
        description:
          "Yellow split pea stew with beef, tomato, fried potato, and saffron rice.",
        link: "https://order.toasttab.com/online/aban-restaurant",
      },
      {
        name: "Gheimeh Bademjan",
        price: 14.95,
        image: "/menu/Gheymeh_Bademjan_2.jpg",
        description:
          "Yellow split pea stew with beef, eggplant, tomato, and saffron rice.",
        link: "https://order.toasttab.com/online/aban-restaurant",
      },
    ],
  },
  {
    id: "rice-sides",
    name: "Rice & Sides",
    icon: <GiRiceCooker size={20} />,
    items: [
      {
        name: "White Rice",
        price: 5,
        image: "/menu/White_Rice_1.jpg",
        description: "Steamed white basmati rice",
        link: "https://order.toasttab.com/online/aban-restaurant",
      },
      {
        name: "Baghali Polo",
        price: 4.95,
        image: "/menu/Baghali_Polo_1.jpg",
        description: "Dill rice with fava beans",
        link: "https://order.toasttab.com/online/aban-restaurant",
      },
      {
        name: "Zereshk Polo",
        price: 6.95,
        image: "/menu/Zereshk_Polo_1.jpg",
        description: "Rice with dried barberries",
        link: "https://order.toasttab.com/online/aban-restaurant",
      },
      {
        name: "Feta Cheese",
        price: 4,
        image: "/menu/feta-cheese.jpg",
        description: "Feta cheese side",
        link: "https://order.toasttab.com/online/aban-restaurant",
      },
      {
        name: "Bread",
        price: 2,
        image: "/menu/bread.jpg",
        description: "Fresh bread",
        link: "https://order.toasttab.com/online/aban-restaurant",
      },
    ],
  },
  {
    id: "pizzas",
    name: "Pizzas",
    icon: <FaPizzaSlice size={20} />,
    items: [
      {
        name: "Cheese Pizza",
        price: 16.95,
        image: "/menu/Pizza_Cheese_1.jpg",
        description: "Classic tomato sauce with melted mozzarella cheese.",
        link: TOAST_MENU_URL,
      },
      {
        name: "Vegetarian Pizza",
        price: 17.95,
        image: "/menu/Pizza_Vegetarian_1.jpg",
        description: "Fresh mushrooms, bell peppers, black olives, and mozzarella.",
        link: TOAST_MENU_URL,
      },
      {
        name: "Aban Pizza",
        price: 23.95,
        image: "/menu/Pizza_Aban_1.jpg",
        description: "Aban's signature pizza loaded with premium toppings.",
        link: TOAST_MENU_URL,
      },
    ],
  },
  {
    id: "entrees",
    name: "Entrees",
    icon: <FaDrumstickBite size={20} />,
    items: [
      {
        name: "Beef Koobideh",
        price: 13.95,
        image: "/menu/AbanPersianRestaurant_KoobidehKabab.jpg",
        description:
          "Two skewers of seasoned ground beef with basmati rice and grilled tomato.",
        link: "https://order.toasttab.com/online/aban-restaurant",
      },
      {
        name: "Barg Kabab",
        price: 20.95,
        image: "/menu/Barg_Kabab_1.jpg",
        description:
          "Charbroiled beef tenderloin kebab with basmati rice and grilled tomato.",
        link: "https://order.toasttab.com/online/aban-restaurant",
      },
      {
        name: "Sultani Kabab",
        price: 23.95,
        image: "/menu/AbanPersianRestaurant_SultaniKabab 2.jpg",
        description:
          "One skewer of barg and one skewer of koobideh with basmati rice and grilled tomato.",
        link: "https://order.toasttab.com/online/aban-restaurant",
      },
      {
        name: "Chenjeh Kabab",
        price: 22.95,
        image: "/menu/AbanPersianRestaurant_ChenjehKabab.jpg",
        description:
          "Marinated beef tenderloin cubes with basmati rice and grilled tomato.",
        link: "https://order.toasttab.com/online/aban-restaurant",
      },
      {
        name: "Combo Koobideh",
        price: 13.95,
        image: "/menu/Combo_Koobideh_2 (1).jpg",
        description:
          "One chicken koobideh skewer and one beef koobideh skewer with rice and tomato.",
        link: "https://order.toasttab.com/online/aban-restaurant",
      },
      {
        name: "Chicken Boneless",
        price: 14.95,
        image: "/menu/AbanPersianRestaurant_ChickenBonelessKabab.jpg",
        description:
          "Saffron-marinated boneless chicken kebab with basmati rice and grilled tomato.",
        link: "https://order.toasttab.com/online/aban-restaurant",
      },
      {
        name: "Chicken Koobideh",
        price: 12.95,
        image: "/menu/Chicken_Koobideh_2.jpg",
        description:
          "Two skewers of seasoned ground chicken with basmati rice and grilled tomato.",
        link: TOAST_MENU_URL,
      },
      {
        name: "Chicken with Bone",
        price: 17.95,
        image: "/menu/AbanPersianRestaurant_ChickenWithBone.jpg",
        description:
          "Saffron-marinated chicken on the bone with basmati rice and grilled tomato.",
        link: "https://order.toasttab.com/online/aban-restaurant",
      },
      {
        name: "Zereshk Polo with Chicken",
        price: 18.95,
        image: "/menu/Zereshk_Polo_Chicken_1.jpg",
        description: "Half chicken served over barberry rice with saffron.",
        link: "https://order.toasttab.com/online/aban-restaurant",
      },
      {
        name: "Vaziri Kabab",
        price: 19.95,
        image: "/menu/AbanPersianRestaurant_BaziriKabab.jpg",
        description:
          "Boneless chicken kebab and one koobideh skewer with basmati rice and grilled tomato.",
        link: "https://order.toasttab.com/online/aban-restaurant",
      },
      {
        name: "Lamb Chops",
        price: 39.95,
        image: "/menu/lampchops.jpg",
        description:
          "Four grilled lamb chops served with basmati rice and tomato.",
        link: "https://order.toasttab.com/online/aban-restaurant",
      },
      {
        name: "Lamb Shank",
        price: 20.95,
        image: "/menu/AbanPersianRestaurant_LambShank.jpg",
        description: "Slow-braised lamb shank served with basmati rice.",
        link: "https://order.toasttab.com/online/aban-restaurant",
      },
      {
        name: "Lamb Dizi",
        price: 18,
        image: "/menu/Lamb_Dizi_1.jpg",
        description:
          "Traditional lamb, chickpea, potato, and dried lime stew served on Sundays only.",
        link: "https://order.toasttab.com/online/aban-restaurant",
      },
      {
        name: "Kaleh Pacheh",
        price: 18.95,
        image: "/menu/Kaleh_Pacheh_1.jpg",
        description:
          "Traditional slow-simmered head and trotter soup available on Sundays only.",
        link: TOAST_MENU_URL,
      },
    ],
  },
  {
    id: "seafood",
    name: "Seafood",
    icon: <FaFish size={20} />,
    items: [
      {
        name: "Salmon Kabab",
        price: 22.95,
        image: "/menu/Salmon_1.jpg",
        description:
          "Grilled salmon served with basmati rice and grilled vegetables.",
        link: "https://order.toasttab.com/online/aban-restaurant",
      },
      {
        name: "Shrimp Kabab",
        price: 20.95,
        image: "/menu/AbanPersianRestaurant_ShrimpKabab.jpg",
        description:
          "Grilled shrimp served with basmati rice and grilled vegetables.",
        link: "https://order.toasttab.com/online/aban-restaurant",
      },
      {
        name: "Seafood Combo",
        price: 24.95,
        image: "/menu/Combo_Seafood_1 (1).jpg",
        description:
          "Salmon and shrimp combo served with basmati rice and grilled vegetables.",
        link: "https://order.toasttab.com/online/aban-restaurant",
      },
    ],
  },
  {
    id: "family-plates",
    name: "Family Plates",
    icon: <FaUsers size={20} />,
    items: [
      {
        name: "Lamb Shoulder",
        price: 99.95,
        image: "/menu/Lamb_Shoulder_1.jpg",
        description:
          "Slow-cooked lamb shoulder platter built for sharing with rice and traditional sides.",
        link: TOAST_MENU_URL,
      },
      {
        name: "Mix Grill Family Platter",
        price: 110,
        image: "/menu/Mix_Grill_(3–4 People).jpg",
        description:
          "Two skewers of koobideh, two skewers of chicken boneless, and one skewer of barg served with dill rice or white rice.",
        link: "https://order.toasttab.com/online/aban-restaurant",
      },
      {
        name: "Aban Platter (6–8 People)",
        price: 160,
        image: "/menu/Aban_Platter_(6–8 People).jpg",
        description:
          "Two skewers of koobideh, two skewers of chicken boneless, one skewer chicken with bone, one skewer of barg, one skewer of chenjeh; served with dill rice, white rice, barberry rice",
        link: "https://order.toasttab.com/online/aban-restaurant",
      },
    ],
  },

  {
    id: "desserts",
    name: "Desserts",
    icon: <FaIceCream size={20} />,
    items: [
      {
        name: "Persian Ice Cream",
        price: 7.95,
        image: "/menu/Ice_Cream_1.jpg",
        description:
          "Traditional saffron, rosewater, and pistachio Persian ice cream.",
        link: "https://order.toasttab.com/online/aban-restaurant",
      },
      {
        name: "Baklava",
        price: 8.95,
        image: "/menu/Turkish_Baklava_1.jpg",
        description: "Layered phyllo pastry with pistachios and syrup.",
        link: "https://order.toasttab.com/online/aban-restaurant",
      },
      {
        name: "Kunafeh",
        price: 10.95,
        image: "/menu/Knafeh_1.jpg",
        description: "Warm shredded pastry with sweet cheese and syrup.",
        link: "https://order.toasttab.com/online/aban-restaurant",
      },
      {
        name: "Ice Cream Sandwich",
        price: 9.95,
        image: "/menu/Ice_cream_Sandwich_1.jpg",
        description: "Ice cream sandwich",
        link: "https://order.toasttab.com/online/aban-restaurant",
      },
      {
        name: "Fruit Plate",
        price: 14.95,
        image: "/menu/Fruit_Plate_1.jpg",
        description: "Assorted fresh fruit",
        link: "https://order.toasttab.com/online/aban-restaurant",
      },
      {
        name: "Faloodeh",
        price: 7.95,
        image: "/menu/Falloodeh_1.jpg",
        description: "Persian frozen vermicelli dessert with rosewater and lime.",
        link: "https://order.toasttab.com/online/aban-restaurant",
      },
      {
        name: "Persian Rollet",
        price: 9,
        image: "/menu/Rolet_1.jpg",
        description: "Light Persian cream roll cake.",
        link: "https://order.toasttab.com/online/aban-restaurant",
      },
    ],
  },
  {
    id: "drinks",
    name: "Drinks",
    icon: <BiSolidDrink size={20} />,
    items: [
      {
        name: "Water",
        price: 3,
        image: "/menu/water.jpg",
        description: "Bottled water",
        link: "https://order.toasttab.com/online/aban-restaurant",
      },
      {
        name: "Soft Drink",
        price: 3,
        image: "/menu/2148014867.jpg",
        description: "Assorted sodas",
        link: "https://order.toasttab.com/online/aban-restaurant",
      },
      {
        name: "Ayran",
        price: 5,
        image: "/menu/21428.jpg",
        description: "Chilled yogurt drink with mint and a touch of salt.",
        link: "https://order.toasttab.com/online/aban-restaurant",
      },
      {
        name: "Sparkling Water",
        price: 4,
        image: "/menu/18030.jpg",
        description: "Carbonated mineral water",
        link: "https://order.toasttab.com/online/aban-restaurant",
      },
      {
        name: "Red Bull",
        price: 6,
        image: "/menu/efeitos-pro-thumbnail0000.jpg",
        description: "Energy drink",
        link: "https://order.toasttab.com/online/aban-restaurant",
      },
      {
        name: "Tea",
        price: 7,
        image: "/menu/tea.jpg",
        description: "Persian black tea served hot.",
        link: "https://order.toasttab.com/online/aban-restaurant",
      },
      {
        name: "Iced Tea",
        price: 3,
        image: "/menu/2398.jpg",
        description: "Iced black tea",
        link: "https://order.toasttab.com/online/aban-restaurant",
      },
      {
        name: "Jasmine Tea",
        price: 5,
        image: "/menu/2149055825.jpg",
        description: "Jasmine-scented hot tea",
        link: "https://order.toasttab.com/online/aban-restaurant",
      },
      {
        name: "Green Tea",
        price: 5,
        image: "/menu/350.jpg",
        description: "Hot green tea",
        link: "https://order.toasttab.com/online/aban-restaurant",
      },
      {
        name: "Coffee",
        price: 3,
        image: "/menu/2061.jpg",
        description: "Hot brewed coffee",
        link: "https://order.toasttab.com/online/aban-restaurant",
      },
      {
        name: "Turkish Coffee",
        price: 6,
        image: "/menu/Turkish_Coffee_2.jpg",
        description: "Rich traditional Turkish coffee.",
        link: "https://order.toasttab.com/online/aban-restaurant",
      },
      {
        name: "Strawberry Smoothie",
        price: 8,
        image: "/menu/Smoothie_Strawberry_1.jpg",
        description: "Fresh strawberry smoothie",
        link: "https://order.toasttab.com/online/aban-restaurant",
      },
      {
        name: "Strawberry Lemon Mint",
        price: 8,
        image: "/menu/Smoothie_Lemon_Mint_1.jpg",
        description: "Strawberry, lemon & mint smoothie",
        link: "https://order.toasttab.com/online/aban-restaurant",
      },
      {
        name: "Mango Smoothie",
        price: 8,
        image: "/menu/Smoothie_Mango_1.jpg",
        description: "Fresh mango smoothie",
        link: "https://order.toasttab.com/online/aban-restaurant",
      },
    ],
  },
  {
    id: "hookah",
    name: "Hookah",
    icon: <FaSmoking size={20} />,
    items: [
      {
        name: "Regualr Head",
        price: 16,
        image: "/menu/2149297125.jpg",
        description: "Regular hookah head",
        link: "https://order.toasttab.com/online/aban-restaurant",
      },
      {
        name: "Orange Head",
        price: 20,
        image: "/menu/2149297125.jpg",
        description: "Orange-flavored hookah head",
        link: "https://order.toasttab.com/online/aban-restaurant",
      },
      {
        name: "Refill Head Regular",
        price: 10,
        image: "/menu/2149297125.jpg",
        description: "Refill for regular head",
        link: "https://order.toasttab.com/online/aban-restaurant",
      },
      {
        name: "Refill Orange Head",
        price: 10,
        image: "/menu/2341421.jpg",
        description: "Refill for orange head",
        link: "https://order.toasttab.com/online/aban-restaurant",
      },
    ],
  },
];
