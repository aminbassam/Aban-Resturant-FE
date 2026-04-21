// components/CallToActionMenu.js

import { motion } from "framer-motion";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const gradientButton =
  "bg-gradient-to-r from-[#F69837] to-[#C34D23] hover:from-[#C34D23] hover:to-[#F69837] text-white font-bold py-3 px-8 rounded-full transition-colors duration-300";

export default function CallToActionAbout() {
  return (
    <section
      className=" text-white py-28 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-fixed relative"
      style={{
        backgroundImage: "url('/hero3.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <motion.div
        className="max-w-4xl mx-auto text-center relative"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.h2
          className="text-xl sm:text-2xl lg:text-3xl font-bold mb-8 leading-tight"
          variants={fadeInUp}
        >
          Whether you’re discovering Persian food for the first time or reliving
          familiar flavors, Aban invites you to join us for an experience that
          combines authentic Persian cuisine, culture, and hospitality right
          here in Houston, Texas.
        </motion.h2>

        <motion.div
          className="flex space-x-4 justify-center w-full"
          variants={itemVariants}
        >
          <Link href="/reservation" passHref className={gradientButton}>
            Reserve Your Table Today
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
