import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = ["hero.jpg", "hero2.jpg"];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, [images.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const gradientButton =
    "bg-gradient-to-r from-[#F69837] to-[#C34D23] hover:from-[#C34D23] hover:to-[#F69837] text-white font-bold py-3 px-6 rounded-full transition-colors duration-300";

  return (
    <div className="relative h-screen overflow-hidden bg-black">
      <div className="absolute left-0 bottom-0 flex justify-center w-full border-b-4 border-white z-20">
        <img
          src="/curve1.png"
          width="260"
          height="60"
          className="w-[260px] h-[60px] relative -bottom-1"
          alt="Decorative Curve"
        />
      </div>

      <video
        src="/FX3A_4456_10.mp4"
        className="absolute left-0 top-0 w-full h-full object-cover bg-center"
        autoPlay
        muted
        playsInline
        controlsList="nodownload nofullscreen noremoteplayback"
        disablePictureInPicture
        onContextMenu={(e) => e.preventDefault()}
        loop
        poster="/hero-poster.jpg"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <motion.div
        className="relative z-10 p-4 w-full h-full flex flex-col items-center justify-center text-center text-white"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          variants={itemVariants}
        >
          A Taste of Persia in the Heart of Houston
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl mb-8 max-w-2xl"
          variants={itemVariants}
        >
          Fresh flavors, rich tradition experience the best of Persian dining.
        </motion.p>
        <motion.div className="flex space-x-4" variants={itemVariants}>
          <Link href="/menu" passHref className={gradientButton}>
            Explore Our Menu
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href="https://order.toasttab.com/online/aban-restaurant"
            className="bg-white text-[#C34D23] font-bold py-3 px-6 rounded-full transition-colors duration-300 hover:bg-gray-100"
          >
            Order Online
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
