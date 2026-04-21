// components/MenuServiceSection.jsx

import { motion } from "framer-motion";
import Link from "next/link";
import { FaBookOpen, FaConciergeBell, FaUsers } from "react-icons/fa";
import { useRef } from "react";
import Image from "next/image";

const services = [
  {
    id: "events",
    title: "Events",
    subtitle: "Host your celebrations at Houston’s top Persian restaurant.",
    icon: <FaUsers className="mx-auto text-3xl md:text-4xl" />,
    link: "/events",
  },
  {
    id: "menu",
    title: "Menu",
    subtitle: "Explore authentic Persian dishes and classic flavors.",
    icon: <FaConciergeBell className="mx-auto text-3xl md:text-4xl" />,
    link: "/menu",
  },
  {
    id: "book",
    title: "Reservations",
    subtitle: "Book your table and enjoy Persian dining in Houston.",
    icon: <FaBookOpen className="mx-auto text-3xl md:text-4xl" />,
    link: "/reservation",
  },
];

const MenuServiceSection = () => {
  const sectionRef = useRef(null);

  return (
    <section
      ref={sectionRef}
      className="relative bg-white overflow-hidden pt-14 pb-14 md:pt-14 md:pb-10"
    >
      <div className="absolute left-0 bottom-0 flex justify-center w-full border-b-4 border-[#022f5e] z-40">
        <img
          src="/curve2.png"
          width="260"
          height="60"
          className="w-[260px] h-[60px] relative -bottom-1"
          alt="Decorative Curve"
        />
      </div>
      <div className="container mx-auto px-0 sm:px-6">
        <div className="text-center">
          {/* تصویر قهرمان با انیمیشن ورود خیلی نرم */}
          <motion.div
            initial={{ y: 160, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 1.6,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.25,
            }}
            className="flex items-end justify-center w-full"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              className="w-full flex justify-center"
            >
              <Image
                src="/Combo_Koobideh_2__1_-removebg-preview.png"
                alt="Menu Hero"
                width={510}
                height={400}
                className="w-full object-contain select-none pointer-events-none max-w-[510px]"
                style={{ filter: "drop-shadow(0px 0px 20px rgba(0,0,0,0.5))" }}
                draggable="false"
              />
            </motion.div>
          </motion.div>

          {/* لایه‌ی پایین: روی موبایل استاتیک، از md به بعد absolute */}
          <div
            className=" relative bottom-32 -mb-44 md:-mb-0 md:top- md:absolute md:bottom-0 md:left-0 md:w-full z-30 pb-14 md:pb-20 pt-2 md:pt-4 bg-white px-4"
            style={{
              boxShadow: "0px -15px 25px #00000010",
              backgroundImage: "url('/pattern.png')",
              backgroundSize: "contain",
              backgroundPosition: "bottom",
              backgroundRepeat: "repeat-x",
            }}
          >
            {/* کاهش opacity تصویر پس‌زمینه با overlay */}
            <div className="absolute inset-0 bg-white/50  pointer-events-none md:rounded-none"></div>

            <div className="relative">
              {/* تیتر */}
              <motion.h2
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.1,
                }}
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 my-4 sm:my-6"
              >
                Dining With Us
              </motion.h2>

              {/* کارت‌ها: 1→2→3 ستون، انیمیشن خیلی سبک */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto pb-6">
                {services.map((service, i) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, x: i % 2 === 0 ? -32 : 32, y: 4 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{
                      duration: 1,
                      delay: 0.8 + i * 0.4,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="h-full"
                  >
                    <Link
                      href={service.link}
                      className=" group relative block h-full overflow-hidden rounded-2xl bg-white shadow-[0_6px_24px_-8px_rgba(0,0,0,0.12)] border-b-2 border-amber-600 transition-all duration-300 md:hover:shadow-[0_12px_32px_-12px_rgba(0,0,0,0.18)] md:hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-amber-500/40"
                    >
                      {/* Overlay آبی که از بالا اسلاید می‌شود */}
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 bg-[#022f5e] origin-top scale-y-0 transition-transform duration-500 ease-in-out group-hover:scale-y-100"
                      />

                      {/* محتوای کارت */}
                      <div className="relative z-10 p-5 sm:p-6 text-center">
                        <div className="mb-3 sm:mb-4 text-amber-600 transition-colors duration-300">
                          {service.icon}
                        </div>

                        <h3 className=" text-base sm:text-lg md:text-xl font-semibold mb-1 text-gray-900 transition-colors duration-300 group-hover:text-white">
                          {service.title}
                        </h3>

                        <p className=" text-gray-600 text-sm sm:text-base transition-colors duration-300 group-hover:text-white/90">
                          {service.subtitle}
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* فاصله‌ی اضافی زیر سکشن برای وقتی که اوورلی absolute می‌شود */}
          <div className="hidden md:block h-24" />
        </div>
      </div>

      {/* احترام به prefer-reduced-motion */}
      <style jsx global>{`
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>
    </section>
  );
};

export default MenuServiceSection;
