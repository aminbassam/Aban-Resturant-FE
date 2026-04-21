// components/MenuCategories.jsx

import { menuData } from "@/data/menudata";
import { motion } from "framer-motion";
import Link from "next/link";

const MenuCategories = () => {
  return (
    <section className="relative py-16 bg-white dark:bg-gray-50 overflow-hidden">
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: "url('/pattern.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "repeat",
        }}
      ></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
         Our Menu Categories
        </h2>
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {menuData.map((category) => {
            // Check if the items array exists and is not empty
            const hasImage = category.items && category.items.length > 0;
            const imageUrl = hasImage ? category.items[0].image : '/placeholder.jpg'; // Use a placeholder image if no item exists

            return (
              <motion.div
                key={category.id}
                className="group"
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 },
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Link href={`/menu?category=${category.id}`} className="block">
                  <div
                    className="relative h-48 w-full bg-cover bg-center rounded-2xl shadow-lg border border-gray-200 overflow-hidden"
                    style={{ backgroundImage: `url(${imageUrl})` }}
                  >
                    <div className="absolute inset-0 bg-black/50 bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300"></div>
                    <div className="relative z-10 flex flex-col items-center justify-center h-full p-4 text-white text-center">
                      <div className="p-3 rounded-full bg-orange-600 bg-opacity-80 transition-colors duration-300 group-hover:bg-opacity-100">
                        {category.icon}
                      </div>
                      <h3 className="mt-2 text-xl font-bold text-shadow-md">
                        {category.name}
                      </h3>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default MenuCategories;