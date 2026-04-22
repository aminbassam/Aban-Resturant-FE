import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { slugify } from "@/utils/slugify";
import Link from "next/link";

import {
  FaLeaf,
  FaDrumstickBite,
  FaIceCream,
  FaGlassWhiskey,
  FaUtensilSpoon,
  FaFish,
  FaUsers,
  FaSmoking,
} from "react-icons/fa";
import { GiRiceCooker } from "react-icons/gi";
import { MdSoupKitchen } from "react-icons/md";
import { BiSolidDrink } from "react-icons/bi";
import Image from "next/image";

// menuData رو از فایل مجزا import کنید

const ICONS_BY_CATEGORY_ID = {
  appetizers: <FaLeaf size={20} />,
  "soups-salads": <FaUtensilSpoon size={20} />,
  stews: <MdSoupKitchen size={20} />,
  "rice-sides": <GiRiceCooker size={20} />,
  entrees: <FaDrumstickBite size={20} />,
  seafood: <FaFish size={20} />,
  "family-plates": <FaUsers size={20} />,
  desserts: <FaIceCream size={20} />,
  drinks: <BiSolidDrink size={20} />,
  hookah: <FaSmoking size={20} />,
};

const MenuDisplay = ({ menuData }) => {
  const [activeCategory, setActiveCategory] = useState(menuData[0].id);
  const sectionRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveCategory(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -80% 0px",
        threshold: 0,
      }
    );

    menuData.forEach((cat) => {
      if (sectionRefs.current[cat.id]) {
        observer.observe(sectionRefs.current[cat.id]);
      }
    });

    return () => observer.disconnect();
  }, []);

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // تغییر شدت موج با اسکرول
  const wave1Path = useTransform(
    scrollYProgress,
    [0, 1],
    [
      // حالت اولیه (موج کمتر)
      "M 0,139 C 48,131 144,97.6 240,99 C 336,100.4 384,145.2 480,146 C 576,146.8 624,90.8 720,103 C 816,115.2 864,205.4 960,207 C 1056,208.6 1104,125.4 1200,111 C 1296,96.6 1392,130.2 1440,135L1440 460L0 460z",
      // حالت نهایی (موج بیشتر)
      "M 0,160 C 48,100 144,120 240,150 C 336,180 384,100 480,120 C 576,140 624,200 720,180 C 816,160 864,100 960,110 C 1056,120 1104,190 1200,170 C 1296,150 1392,100 1440,120L1440 460L0 460z",
    ]
  );

  const wave2Path = useTransform(
    scrollYProgress,
    [0, 1],
    [
      // حالت اولیه
      "M 0,252 C 144,280.4 432,379.8 720,394 C 1008,408.2 1296,337.2 1440,323L1440 460L0 460z",
      // حالت نهایی
      "M 0,220 C 144,300 432,350 720,380 C 1008,410 1296,360 1440,340L1440 460L0 460z",
    ]
  );

  const opacityTransform = useTransform(scrollYProgress, [0.8, 1], [1, 0]);

  // تعریف تغییر رنگ برای موج اول
  const wave1Color = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["rgba(195,77,35,0.18)", "rgba(255,200,80,0.3)", "rgba(50,150,250,0.5)"]
  );

  // تعریف تغییر رنگ برای موج دوم
  const wave2Color = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["rgba(195,77,35,0.5)", "rgba(255,160,50,0.7)", "rgba(30,100,200,0.8)"]
  );

  return (
    <div className="relative">
      <div className="absolute left-0 top-0 z-0 w-full h-full">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          xmlnsSvgjs="http://svgjs.dev/svgjs"
          width="100%"
          height="100vh"
          preserveAspectRatio="none"
          viewBox="0 0 1440 460"
          className="sticky top-0 left-0"
          style={{ opacity: opacityTransform }}
        >
          <g fill="none">
            {/* استفاده از fill متحرک برای موج اول */}
            <motion.path d={wave1Path} fill={wave1Color}></motion.path>
            {/* استفاده از fill متحرک برای موج دوم */}
            <motion.path d={wave2Path} fill={wave2Color}></motion.path>
          </g>
          <defs>
            <mask id="SvgjsMask1061">
              <rect width="1440" height="460" fill="#ffffff"></rect>
            </mask>
          </defs>
        </motion.svg>
      </div>
      <div
        id="menu"
        ref={ref}
        className="flex w-full relative container mx-auto py-20"
      >
        {/* Left Sidebar */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="sticky top-24 lg:top-32 h-fit px-4 py-4  lg:min-w-[80px] flex flex-col items-center bg-white shadow-xl rounded-xl ml-4 z-10"
        >
          {menuData.map((cat) => (
            <motion.button
              key={cat.id}
              onClick={() =>
                sectionRefs.current[cat.id]?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              whileHover={{ scale: 1.2 }}
              className={`my-2 p-2 rounded-full transition duration-300 flex items-center justify-center shadow-md bg-white border border-gray-200 group relative ${
                activeCategory === cat.id
                  ? "text-orange-500 border-orange-500 scale-110"
                  : "text-gray-400 hover:border-gray-400"
              }`}
            >
              {ICONS_BY_CATEGORY_ID[cat.id]}
              {/* tooltip برای نمایش نام دسته بندی */}
              <span className="absolute right-full mr-4 w-auto p-2 min-w-max rounded-md shadow-md text-white bg-gray-900 text-xs font-bold transition-all duration-300 scale-0 origin-right group-hover:scale-100">
                {cat.name}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Right Content */}
        <div className="flex-1 overflow-hidden px-6 space-y-16 z-10">
          {menuData.map((cat) => (
            <section
              key={cat.id}
              id={cat.id}
              ref={(el) => (sectionRefs.current[cat.id] = el)}
              className="scroll-mt-32"
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold text-gray-800 mb-6 pb-2"
              >
                {cat.name}
              </motion.h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {cat.items.map((item, index) => {
                  const anchorId = slugify(item.name);
                  return (
                    <Link
                      href={item?.link}
                      target="_blank"
                      rel="noreferrer"
                      id={anchorId}
                      key={item.name}
                    >
                      <motion.div
                        key={index}
                        className="bg-white rounded-xl shadow-md overflow-hidden"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                      >
                        <Image
                          src={item.image}
                          alt={item.name}
                          loading="lazy"
                          width={384} // حداکثر عرض در بزرگ‌ترین breakpoint
                          height={320}
                          className="w-full object-cover"
                        />
                        <div className="p-4">
                          <h3 className="text-xl font-semibold text-gray-800">
                            {item.name}
                          </h3>
                          <p className="text-sm text-gray-600 mt-1">
                            {item.description}
                          </p>
                          <p className="text-orange-600 font-bold mt-0">
                            ${item.price}
                          </p>
                        </div>
                      </motion.div>
                    </Link>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuDisplay;
