// components/ScrollImages.jsx

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const images = [
  "/menu/Salmon_1.jpg",
  "/food (1).jpg",
  "/menu/AbanPersianRestaurant_KoobidehKabab.jpg",
  "/menu/Barg_Kabab_1.jpg",
  "/food (2).jpg",
  // Add more image paths here
];

const ScrollImages = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const gradientButton =
    "bg-gradient-to-r from-[#F69837] to-[#C34D23] hover:from-[#C34D23] hover:to-[#F69837] text-white font-bold py-3 px-8 rounded-full transition-colors duration-300";

  return (
    <section
      style={{
        backgroundImage: "url('/pattern.png')",
        backgroundPosition: "bottom",
        backgroundRepeat: "repeat-x",
      }}
      className="relative w-full overflow-hidden bg-cover py-20 lg:py-32 bg-[#022f5e]"
      ref={containerRef}
    >
      <div className="absolute left-0 bottom-0 flex justify-center w-full border-b-4 border-white z-20">
        <img
          src="/curve1.png"
          width="260"
          height="60"
          className="w-[260px] h-[60px] relative -bottom-1"
          alt="Decorative Curve"
        />
      </div>

      <div className="container mx-auto px-4  text-center mb-16">
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-4 text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={textVariants}
        >
          Houston’s Home of
          <span className="text-orange-500"> Authentic </span> Persian Dining
        </motion.h2>
        <motion.p
          className="max-w-3xl mx-auto text-lg text-gray-300"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={textVariants}
        >
          Discover the rich flavors of Persia—kebabs, stews, saffron rice, and
          more. At Aban Persian Restaurant in Houston, every dish is crafted
          with tradition and passion.
        </motion.p>
        <div className="flex justify-center mt-10">
          <Link href="/menu" passHref className={gradientButton}>
            View Our Menu
          </Link>
        </div>
      </div>

      <motion.div
        style={{ x }}
        className="flex gap-4 sm:gap-6 lg:gap-8 px-4 w-fit md:mx-auto -translate-x-1/3 md:-translate-x-0"
      >
        {images.map((src, index) => (
          <div
            key={index}
            className="flex-none w-36 md:w-80 lg:w-96 h-40 md:h-80 rounded-xl overflow-hidden shadow-lg relative"
          >
            <Image
              src={src}
              alt={`Gallery image ${index + 1}`}
              width={384} // حداکثر عرض در بزرگ‌ترین breakpoint
              height={320} // حداکثر ارتفاع متناسب
              className="object-cover w-full h-full"
              sizes="(max-width: 768px) 144px, (max-width: 1024px) 320px, 384px"
              // optional: priority={index < 2}  // اگر می‌خوای ۱-۲ تصویر اول زودتر لود شن
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default ScrollImages;
