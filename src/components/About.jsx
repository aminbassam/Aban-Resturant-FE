import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Waves (اگر لازم نیست می‌تونی حذف‌شان کنی)
  const wave1Path = useTransform(
    scrollYProgress,
    [0, 1],
    [
      "M 0,139 C 48,131 144,97.6 240,99 C 336,100.4 384,145.2 480,146 C 576,146.8 624,90.8 720,103 C 816,115.2 864,205.4 960,207 C 1056,208.6 1104,125.4 1200,111 C 1296,96.6 1392,130.2 1440,135L1440 460L0 460z",
      "M 0,160 C 48,100 144,120 240,150 C 336,180 384,100 480,120 C 576,140 624,200 720,180 C 816,160 864,100 960,110 C 1056,120 1104,190 1200,170 C 1296,150 1392,100 1440,120L1440 460L0 460z",
    ]
  );
  const wave2Path = useTransform(
    scrollYProgress,
    [0, 1],
    [
      "M 0,252 C 144,280.4 432,379.8 720,394 C 1008,408.2 1296,337.2 1440,323L1440 460L0 460z",
      "M 0,220 C 144,300 432,350 720,380 C 1008,410 1296,360 1440,340L1440 460L0 460z",
    ]
  );
  const opacityTransform = useTransform(scrollYProgress, [0.8, 1], [1, 0]);

  // Variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1.5, staggerChildren: 0.3, delay: 0.5 },
    },
  };

  // متن‌ها: از راست، خیلی نرم
  const textFromRight = {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.4, ease: [0.22, 1, 0.36, 1] },
    },
  };

  // عکس‌ها: از چپ، خیلی نرم
  const imageFromLeft = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1 },
    },
  };

  // پس‌زمینه محو شونده
  const imageVariants2 = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 4 } },
  };

  // لیست: استاگر خیلی یواش
  const listContainer = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 0.8, // بعد از تیتر و پاراگراف
        staggerChildren: 0.25, // آیتم‌ها یکی‌یکی
      },
    },
  };
  const listItem = {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <div
      ref={ref}
      id="about"
      className="relative bg-white rounded-t-[30px] lg:rounded-t-[60px]"
    >
      {/* پس‌زمینه تصویری با فید-این آهسته */}
      <motion.img
        variants={imageVariants2}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        src="/16400328_v708-aum-24-b-diwali.jpg"
        width="1920"
        height="1080"
        className="absolute left-0 top-0 w-full h-full opacity-90 object-cover rotate-180"
        alt="Background decorative image"
      />

      <motion.section
        ref={inViewRef}
        className="relative overflow-hidden container mx-auto px-4 py-20 rounded-xl"
        variants={sectionVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
          {/* گالری تصاویر (از چپ بیاد) */}
          <div className="grid grid-cols-2 gap-4">
            <motion.img
              src="/menu/Appetizer_Hero_3.jpg"
              alt="Appetizer platter with Persian starters served at Aban restaurant"
              width="600"
              height="400"
              className="rounded-lg w-full h-auto object-cover"
              variants={imageFromLeft}
              transition={{ delay: 0.5 }}
            />

            <motion.img
              src="/menu/AbanPersianRestaurant_Hero.jpg"
              alt="Interior view of Aban Persian Restaurant with elegant decor"
              width="600"
              height="400"
              className="rounded-lg w-full h-auto object-cover"
              variants={imageFromLeft}
              transition={{ delay: 1 }}
            />

            <motion.img
              src="/about.jpg"
              alt="Team of Aban Persian Restaurant sharing their story and passion for Persian cuisine"
              width="1200"
              height="600"
              className="col-span-2 rounded-lg w-full h-auto object-cover"
              variants={imageFromLeft}
              transition={{ delay: 1.5 }}
            />
          </div>

          {/* متن و لیست (متن‌ها از راست بیاد، خیلی یواش) */}
          <div className="flex flex-col justify-center">
            <motion.h2
              className="text-4xl font-bold mb-4 text-gray-900"
              variants={textFromRight}
              transition={{ delay: 0.2 }}
            >
              Our Story
            </motion.h2>

            <motion.p
              className="text-gray-900 mb-4 text-lg"
              variants={textFromRight}
              transition={{ delay: 0.5 }}
            >
              At Aban Persian Restaurant in Houston, we bring the flavors of
              Persia to life with authentic cuisine, warm hospitality, and a
              lively atmosphere. Aban is more than dining—it’s an experience
              where traditional Persian recipes meet Houston’s vibrant culture.
            </motion.p>
            <motion.p
              className="text-gray-900 mb-6 text-lg"
              variants={textFromRight}
              transition={{ delay: 0.7 }}
            >
              From family dinners to nights filled with live music and DJs, Aban
              is a place for celebration, connection, and unforgettable moments.
              Our mission is to share the flavors of Persia with our community
              through dishes that carry history, culture, and passion—each
              prepared with locally sourced ingredients and served with true
              Persian hospitality.
            </motion.p>

            <motion.h3
              className="text-4xl font-bold mb-4 text-gray-900"
              variants={textFromRight}
              transition={{ delay: 0.9 }}
            >
              Why Guests Choose Aban
            </motion.h3>

            {/* لیست جدید: زیر متن، با استاگر و ورود از راست */}
            <motion.ul
              className="space-y-3 text-gray-800 mb-6"
              variants={listContainer}
            >
              {[
                "Authentic Persian food in Houston made with traditional recipes",
                "Persian dining with live music & DJs for parties and events",
                "Locally sourced ingredients in signature Persian dishes",
                "Top Houston Persian restaurant for celebrations and gatherings",
                "Warm hospitality & welcoming atmosphere inspired by Persian culture",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  variants={listItem}
                  className="flex items-start gap-3"
                >
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[rgb(195,77,35)]" />
                  <span className="leading-relaxed">{item}</span>
                </motion.li>
              ))}
            </motion.ul>

            <div>
              <motion.a
                href="/about"
                className="inline-block mt-2 px-6 bg-[#022f5e] rounded-full py-3 text-[#fff] font-semibold hover:underline"
                variants={textFromRight}
                transition={{ delay: 1.4 }}
              >
                Read more &rarr;
              </motion.a>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default About;
