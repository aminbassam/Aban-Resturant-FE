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

const TOAST_MENU_URL =
  "https://order.toasttab.com/online/aban%20restaurant%20-9527-westheimer-rd-bavbn";

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
        link: "https://order.toasttab.com/online/aban restaurant -9527-westheimer-rd-bavbn/item-kashk-bademjan_620d684c-64bd-460c-aac0-7b442e6fbc4a",
      },
      {
        name: "Mast O Khiar",
        price: 6.95,
        image: "/menu/Mast_o_Khiar_1.jpg",
        description: "Yogurt, cucumber, dry mint",
        link: "https://order.toasttab.com/online/aban restaurant -9527-westheimer-rd-bavbn/item-mast-khiar_f496a810-55e5-4a8b-a0dd-e5a0fa6ced17",
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
        link: "https://order.toasttab.com/online/aban restaurant -9527-westheimer-rd-bavbn/item-hummus_d7c02ca9-9575-4a80-8893-52a8316e5690",
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
        link: "https://order.toasttab.com/online/aban restaurant -9527-westheimer-rd-bavbn/item-felafel_d6277365-ab2c-45c7-b56f-ae7fdc778101",
      },
      {
        name: "Herb Plate",
        price: 5.95,
        image: "/menu/Herb_Plate_1.jpg",
        description: "Fresh herbs, feta cheese, walnuts, and warm bread.",
        link: "https://order.toasttab.com/online/aban restaurant -9527-westheimer-rd-bavbn/item-herb-plate_798cef27-25a1-4c05-8246-4751916fbe42",
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
        link: "https://order.toasttab.com/online/aban restaurant -9527-westheimer-rd-bavbn/item-soup-joe_80bcc489-ce20-4b16-8a4a-1b083b78de29",
      },
      {
        name: "Greek Salad",
        price: 8.95,
        image: "/menu/Greek_Salad_1.jpg",
        description:
          "Romaine, tomato, cucumber, olives, and feta with house dressing.",
        link: "https://order.toasttab.com/online/aban restaurant -9527-westheimer-rd-bavbn/item-greek-salad_191fcda2-174b-4c3c-bff8-fcfa108eae7c",
      },
      {
        name: "Shirazi Salad",
        price: 7.95,
        image: "/menu/Shirazi_Salad_1.jpg",
        description:
          "Finely chopped cucumber, tomato, onion, and parsley with citrus dressing.",
        link: "https://order.toasttab.com/online/aban restaurant -9527-westheimer-rd-bavbn/item-shirazi-salad_857106b4-c5c5-4210-a7c1-1aa54ffa7f69",
      },
      {
        name: "House Salad",
        price: 7.95,
        image: "/menu/House_Salad_1.jpg",
        description: "Lettuce, carrot, cucumber, red cabbage",
        link: "https://order.toasttab.com/online/aban restaurant -9527-westheimer-rd-bavbn/item-house-salad_1d718d6f-9699-4cc6-a896-721cc93378c4",
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
        link: "https://order.toasttab.com/online/aban restaurant -9527-westheimer-rd-bavbn/item-ghormeh-sabzi_14114b4a-f105-4e37-b3ae-c0aacf24a081",
      },
      {
        name: "Gheimeh",
        price: 13.95,
        image: "/menu/gheyme.jpg",
        description:
          "Yellow split pea stew with beef, tomato, fried potato, and saffron rice.",
        link: "https://order.toasttab.com/online/aban restaurant -9527-westheimer-rd-bavbn/item-gheymeh_c572d28f-e27c-4c6c-9490-10f6ec1f2a05",
      },
      {
        name: "Gheimeh Bademjan",
        price: 14.95,
        image: "/menu/Gheymeh_Bademjan_2.jpg",
        description:
          "Yellow split pea stew with beef, eggplant, tomato, and saffron rice.",
        link: "https://order.toasttab.com/online/aban restaurant -9527-westheimer-rd-bavbn/item-gheymeh-bademjoon_aa6644bb-8beb-470a-9334-3b74f0038d53",
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
        link: "https://order.toasttab.com/online/aban restaurant -9527-westheimer-rd-bavbn/item-white-rice_3d973a4d-3a3c-41e4-8f24-44b0c4f9defd",
      },
      {
        name: "Baghali Polo",
        price: 4.95,
        image: "/menu/Baghali_Polo_1.jpg",
        description: "Dill rice with fava beans",
        link: "https://order.toasttab.com/online/aban restaurant -9527-westheimer-rd-bavbn/item-dill-rice_bd2ebecd-8306-414d-bb2d-a475c34bcc59",
      },
      {
        name: "Zereshk Polo",
        price: 6.95,
        image: "/menu/Zereshk_Polo_Chicken_1.jpg",
        description: "Rice with dried barberries",
        link: "https://order.toasttab.com/online/aban restaurant -9527-westheimer-rd-bavbn/item-zereshk-rice_892aae50-6995-442d-a3dc-cb68ad3fb7ef",
      },
      {
        name: "Feta Cheese",
        price: 4,
        image: "/menu/feta-cheese.jpg",
        description: "Feta cheese side",
        link: "https://order.toasttab.com/online/aban restaurant -9527-westheimer-rd-bavbn/item-feta-cheese_78b06b80-7054-4916-940b-84dc51792a1d",
      },
      {
        name: "Bread",
        price: 2,
        image: "/menu/bread.jpg",
        description: "Fresh bread",
        link: "https://order.toasttab.com/online/aban restaurant -9527-westheimer-rd-bavbn/item-bread_f630392a-fc63-4ffd-9e99-7fa1606ffe89",
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
        link: "https://order.toasttab.com/online/aban restaurant -9527-westheimer-rd-bavbn/item-koobideh-kabab_a3633666-0f85-4734-98a7-5baf268a0fc6",
      },
      {
        name: "Barg Kabab",
        price: 20.95,
        image: "/menu/Barg_Kabab_1.jpg",
        description:
          "Charbroiled beef tenderloin kebab with basmati rice and grilled tomato.",
        link: "https://order.toasttab.com/online/aban restaurant -9527-westheimer-rd-bavbn/item-barg-kabab_d4a1934f-a558-49f0-af09-7a6e745799d0",
      },
      {
        name: "Sultani Kabab",
        price: 23.95,
        image: "/menu/AbanPersianRestaurant_SultaniKabab 2.jpg",
        description:
          "One skewer of barg and one skewer of koobideh with basmati rice and grilled tomato.",
        link: "https://order.toasttab.com/online/aban restaurant -9527-westheimer-rd-bavbn/item-sultani-kabab_4d139a34-81e2-4e63-85e1-698f424dbb3b",
      },
      {
        name: "Chenjeh Kabab",
        price: 22.95,
        image: "/menu/AbanPersianRestaurant_ChenjehKabab.jpg",
        description:
          "Marinated beef tenderloin cubes with basmati rice and grilled tomato.",
        link: "https://order.toasttab.com/online/aban restaurant -9527-westheimer-rd-bavbn/item-chenjeh-kabab_dbafeb9b-de69-4240-9a55-c848394b1be3",
      },
      {
        name: "Combo Koobideh",
        price: 13.95,
        image: "/menu/Combo_Koobideh_2 (1).jpg",
        description:
          "One chicken koobideh skewer and one beef koobideh skewer with rice and tomato.",
        link: "https://order.toasttab.com/online/aban restaurant -9527-westheimer-rd-bavbn/item-combo-koobideh_e9efc64e-6847-4fb4-b9ed-d96b6f907fa5",
      },
      {
        name: "Chicken Boneless",
        price: 14.95,
        image: "/menu/AbanPersianRestaurant_ChickenBonelessKabab.jpg",
        description:
          "Saffron-marinated boneless chicken kebab with basmati rice and grilled tomato.",
        link: "https://order.toasttab.com/online/aban restaurant -9527-westheimer-rd-bavbn/item-chicken-boneless_442cb9d9-e991-4199-b03e-eed7e11775bb",
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
        link: "https://order.toasttab.com/online/aban restaurant -9527-westheimer-rd-bavbn/item-chicken-with-bone_6b038270-7ef9-4366-95d4-8a5ad5ecc31c",
      },
      {
        name: "Zereshk Polo with Chicken",
        price: 18.95,
        image: "/menu/Zereshk_Polo_1.jpg",
        description: "Half chicken served over barberry rice with saffron.",
        link: "https://order.toasttab.com/online/aban restaurant -9527-westheimer-rd-bavbn/item-zereshk-polo-with-chicken_a53ee747-fc7f-447b-aa37-d63214daf610",
      },
      {
        name: "Vaziri Kabab",
        price: 19.95,
        image: "/menu/AbanPersianRestaurant_BaziriKabab.jpg",
        description:
          "Boneless chicken kebab and one koobideh skewer with basmati rice and grilled tomato.",
        link: "https://order.toasttab.com/online/aban restaurant -9527-westheimer-rd-bavbn/item-vaziri_37356dda-8e8d-49ba-b69e-0f00a37a7f19",
      },
      {
        name: "Lamb Chops",
        price: 39.95,
        image: "/menu/lampchops.jpg",
        description:
          "Four grilled lamb chops served with basmati rice and tomato.",
        link: "https://order.toasttab.com/online/aban restaurant -9527-westheimer-rd-bavbn/item-lamb-chops_11eb20ad-573a-4f05-9e09-30aac63cfbd9",
      },
      {
        name: "Lamb Shank",
        price: 20.95,
        image: "/menu/AbanPersianRestaurant_LambShank.jpg",
        description: "Slow-braised lamb shank served with basmati rice.",
        link: "https://order.toasttab.com/online/aban restaurant -9527-westheimer-rd-bavbn/item-lamb-shank_44dd3ded-6e86-46d2-ba81-bfea215aa550",
      },
      {
        name: "Lamb Dizi",
        price: 18,
        image: "/menu/Lamb_Dizi_1.jpg",
        description:
          "Traditional lamb, chickpea, potato, and dried lime stew served on Sundays only.",
        link: "https://order.toasttab.com/online/aban restaurant -9527-westheimer-rd-bavbn/item-lamb-dizi_c71a68e7-1396-4810-8108-a0a71ef04dad",
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
        link: "https://order.toasttab.com/online/aban restaurant -9527-westheimer-rd-bavbn/item-salmon-kabab_c60d3d57-9482-470f-9e00-79f7bdc5273a",
      },
      {
        name: "Shrimp Kabab",
        price: 20.95,
        image: "/menu/AbanPersianRestaurant_ShrimpKabab.jpg",
        description:
          "Grilled shrimp served with basmati rice and grilled vegetables.",
        link: "https://order.toasttab.com/online/aban restaurant -9527-westheimer-rd-bavbn/item-shrimp-kabab_01dd671a-6e3c-4f21-9e3d-aacd4000de4a",
      },
      {
        name: "Seafood Combo",
        price: 24.95,
        image: "/menu/Combo_Seafood_1 (1).jpg",
        description:
          "Salmon and shrimp combo served with basmati rice and grilled vegetables.",
        link: "https://order.toasttab.com/online/aban restaurant -9527-westheimer-rd-bavbn/item-combo-seafood_70da2430-fb63-4443-9278-cb74fe0cd7f3",
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
        link: "https://order.toasttab.com/online/aban restaurant -9527-westheimer-rd-bavbn/item-mix-grill_3d0ba309-5640-47be-8c18-dbf5ac57eb49",
      },
      {
        name: "Aban Platter (6–8 People)",
        price: 160,
        image: "/menu/Aban_Platter_(6–8 People).jpg",
        description:
          "Two skewers of koobideh, two skewers of chicken boneless, one skewer chicken with bone, one skewer of barg, one skewer of chenjeh; served with dill rice, white rice, barberry rice",
        link: "https://order.toasttab.com/online/aban restaurant -9527-westheimer-rd-bavbn/item-aban-family-platers_a3ee5b99-2199-46e2-b465-875952f119ad",
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
        link: "https://order.toasttab.com/online/aban restaurant -9527-westheimer-rd-bavbn/item-persian-ice-cream_ea66449a-9271-4361-a8ec-d8303f0166a8",
      },
      {
        name: "Baklava",
        price: 8.95,
        image: "/menu/Turkish_Baklava_1.jpg",
        description: "Layered phyllo pastry with pistachios and syrup.",
        link: "https://order.toasttab.com/online/aban restaurant -9527-westheimer-rd-bavbn/item-turkish-bakiava_a404a7c5-fccc-40de-b3a3-a6a1b52c2cb8",
      },
      {
        name: "Kunafeh",
        price: 10.95,
        image: "/menu/Knafeh_1.jpg",
        description: "Warm shredded pastry with sweet cheese and syrup.",
        link: "https://order.toasttab.com/online/aban restaurant -9527-westheimer-rd-bavbn/item-knafeh_ef8d577f-892e-44d7-b46f-90bff8fc2f0a",
      },
      {
        name: "Ice Cream Sandwich",
        price: 9.95,
        image: "/menu/Ice_cream_Sandwich_1.jpg",
        description: "Ice cream sandwich",
        link: "https://order.toasttab.com/online/aban restaurant -9527-westheimer-rd-bavbn/item-ice-cream-sandwich_95df2135-f7a3-486e-96e3-960dbc980d03",
      },
      {
        name: "Fruit Plate",
        price: 14.95,
        image: "/menu/Fruit_Plate_1.jpg",
        description: "Assorted fresh fruit",
        link: "https://order.toasttab.com/online/aban restaurant -9527-westheimer-rd-bavbn/item-fruit-plates_17e8b4c0-3cef-4537-9a17-c4844aab1981",
      },
      {
        name: "Faloodeh",
        price: 7.95,
        image: "/menu/Falloodeh_1.jpg",
        description: "Persian frozen vermicelli dessert with rosewater and lime.",
        link: "https://order.toasttab.com/online/aban restaurant -9527-westheimer-rd-bavbn/item-faloodeh_bbdd34c2-4c20-4e80-bac1-266ae5d2b689",
      },
      {
        name: "Persian Rollet",
        price: 9,
        image: "/menu/Rolet_1.jpg",
        description: "Light Persian cream roll cake.",
        link: "https://order.toasttab.com/online/aban restaurant -9527-westheimer-rd-bavbn/item-rollet_310ce558-907f-4bdd-a0b8-de2abf54a575",
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
        link: "https://order.toasttab.com/online/aban restaurant -9527-westheimer-rd-bavbn/item-bottle-water_8d1a8e42-63fe-41f7-bf8b-2880355e1239",
      },
      {
        name: "Soft Drink",
        price: 3,
        image: "/menu/2148014867.jpg",
        description: "Assorted sodas",
        link: "https://order.toasttab.com/online/aban restaurant -9527-westheimer-rd-bavbn/item-soda_65667f7c-d228-4f62-a935-523808922614",
      },
      {
        name: "Ayran",
        price: 5,
        image: "/menu/21428.jpg",
        description: "Chilled yogurt drink with mint and a touch of salt.",
        link: "https://order.toasttab.com/online/aban restaurant -9527-westheimer-rd-bavbn/item-ayran_da7bf7d7-718a-41b4-9191-a8d9db847b9f",
      },
      {
        name: "Sparkling Water",
        price: 4,
        image: "/menu/18030.jpg",
        description: "Carbonated mineral water",
        link: "https://order.toasttab.com/online/aban restaurant -9527-westheimer-rd-bavbn/item-sparking-water_6fab1890-148b-4fb3-95ae-9ede5792d8cc",
      },
      {
        name: "Red Bull",
        price: 6,
        image: "/menu/efeitos-pro-thumbnail0000.jpg",
        description: "Energy drink",
        link: "https://order.toasttab.com/online/aban restaurant -9527-westheimer-rd-bavbn/item-red-bull_b933d243-462e-4040-9d1f-b263aac908cc",
      },
      {
        name: "Tea",
        price: 7,
        image: "/menu/tea.jpg",
        description: "Persian black tea served hot.",
        link: "https://order.toasttab.com/online/aban restaurant -9527-westheimer-rd-bavbn/item-hot-tea_26ea3410-56d9-4786-85f8-114a0f93151b",
      },
      {
        name: "Iced Tea",
        price: 3,
        image: "/menu/2398.jpg",
        description: "Iced black tea",
        link: "https://order.toasttab.com/online/aban restaurant -9527-westheimer-rd-bavbn/item-ice-tea_7a4cd884-6221-478d-86bf-d781ef6f8e49",
      },
      {
        name: "Jasmine Tea",
        price: 5,
        image: "/menu/2149055825.jpg",
        description: "Jasmine-scented hot tea",
        link: "https://order.toasttab.com/online/aban restaurant -9527-westheimer-rd-bavbn/item-jasmine-tea_a5d7f4b1-220a-4cec-96e2-dbcc4ff18dcb",
      },
      {
        name: "Green Tea",
        price: 5,
        image: "/menu/350.jpg",
        description: "Hot green tea",
        link: "https://order.toasttab.com/online/aban restaurant -9527-westheimer-rd-bavbn/item-green-tea_b09c4fb4-35b8-46bf-a534-9de949e77123",
      },
      {
        name: "Coffee",
        price: 3,
        image: "/menu/2061.jpg",
        description: "Hot brewed coffee",
        link: "https://order.toasttab.com/online/aban restaurant -9527-westheimer-rd-bavbn/item-coffee_026f71f2-53f0-4823-bebd-7b6ae68e1710",
      },
      {
        name: "Turkish Coffee",
        price: 6,
        image: "/menu/Turkish_Coffee_2.jpg",
        description: "Rich traditional Turkish coffee.",
        link: "https://order.toasttab.com/online/aban restaurant -9527-westheimer-rd-bavbn/item-turkish-coffee_2b995baa-21ed-4ef4-ac85-827f173e0326",
      },
      {
        name: "Strawberry Smoothie",
        price: 8,
        image: "/menu/Smoothie_Strawberry_1.jpg",
        description: "Fresh strawberry smoothie",
        link: "https://order.toasttab.com/online/aban restaurant -9527-westheimer-rd-bavbn/item-strawberry-smoothie_0c854a10-05e0-4bf7-ab8b-65a4c725e7da",
      },
      {
        name: "Strawberry Lemon Mint",
        price: 8,
        image: "/menu/Smoothie_Lemon_Mint_1.jpg",
        description: "Strawberry, lemon & mint smoothie",
        link: "https://order.toasttab.com/online/aban restaurant -9527-westheimer-rd-bavbn/item-lemon-mint-smoothie_65663155-5998-43f3-963e-28c3fb3ea606",
      },
      {
        name: "Mango Smoothie",
        price: 8,
        image: "/menu/Smoothie_Mango_1.jpg",
        description: "Fresh mango smoothie",
        link: "https://order.toasttab.com/online/aban restaurant -9527-westheimer-rd-bavbn/item-mango-smoothie_a34e4d82-beaf-43a6-af2e-a38d8870110f",
      },
      {
        name: "Aban Special Drink",
        price: 10,
        image: "/menu/abanspecial.jpg",
        description: "Our house special fruit drink.",
        link: "https://order.toasttab.com/online/aban restaurant -9527-westheimer-rd-bavbn/item-aban-special-smoothie_6be4d0af-e789-4a2e-b7b1-9523d38a5d9d",
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
        link: "https://order.toasttab.com/online/aban restaurant -9527-westheimer-rd-bavbn/item-regular-head_0f38c28c-acc3-4854-a4cd-e423c8e27a5c",
      },
      {
        name: "Orange Head",
        price: 20,
        image: "/menu/2149297125.jpg",
        description: "Orange-flavored hookah head",
        link: "https://order.toasttab.com/online/aban restaurant -9527-westheimer-rd-bavbn/item-orange-head_bff4aa62-2cf3-472b-9cef-64a1474ccaa9",
      },
      {
        name: "Refill Head Regular",
        price: 10,
        image: "/menu/2149297125.jpg",
        description: "Refill for regular head",
        link: "https://order.toasttab.com/online/aban restaurant -9527-westheimer-rd-bavbn/item-refill-regular-head_8063ae4c-f992-474f-b628-279144821c1d",
      },
      {
        name: "Refill Orange Head",
        price: 10,
        image: "/menu/2341421.jpg",
        description: "Refill for orange head",
        link: "https://order.toasttab.com/online/aban restaurant -9527-westheimer-rd-bavbn/item-refell-orange-head_d52d18f4-6089-4648-8a39-8f62db090eb7",
      },
    ],
  },
];
