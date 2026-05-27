import Image from "next/image";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import MenuCategories from "@/components/MenuCategories";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import { motion } from "framer-motion";
import CallToActionMenu from "@/components/CallToActionMenu";
import { useHashScroll } from "@/hooks/useHashScroll";
import Head from "next/head";

const faqs = [
  {
    question: "What types of Persian kebabs are on the menu at Aban?",
    answer:
      "Our menu features a variety of authentic Persian kebabs, including koobideh (seasoned ground beef), barg (marinated filet), and joojeh (tender chicken). Each kebab is grilled to perfection and served with saffron basmati rice and roasted tomatoes.",
  },
  {
    question: "Do you serve traditional Persian rice dishes?",
    answer:
      "Yes. At Aban, rice is the heart of Persian dining. From fluffy saffron basmati rice to crispy tahdig, our rice dishes are prepared with the same traditions found in Persian kitchens for generations.",
  },
  {
    question: "Are there any signature Persian stews available at Aban?",
    answer:
      "Absolutely. Our guests enjoy authentic Persian stews like Ghormeh Sabzi, Gheimeh, and Fesenjan. These slow-cooked dishes are rich in herbs, spices, and flavors, making them some of the most iconic meals in Persian cuisine.",
  },
  {
    question: "Does the menu include appetizers and sides?",
    answer:
      "Yes. In addition to our main entrées, Aban offers traditional Persian appetizers such as Kashk-e Bademjan (eggplant dip), mast-o-khiar (yogurt with cucumber), and fresh herb platters, perfect for sharing.",
  },
  {
    question: "Do you offer Persian desserts or sweets on the menu?",
    answer:
      "Yes. To complete your meal, our menu includes Persian-inspired desserts that capture the rich flavors of saffron, rosewater, and pistachios—perfect for ending your dining experience on a sweet note.",
  },
];

export default function About({ menuData }) {
  const heroVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };
  return (
    <Layout
      title="Aban Persian Restaurant Menu | Taste of Persian Cuisine"
      description={
        "Aban Persian Restaurant Menu: Enjoy delicious meals and the best Persian & chicken kabobs in Houston, your perfect choice for authentic Persian dishes."
      }
    >
      <Head>
        {/* Canonical */}
        <link rel="canonical" href="https://www.aban-restaurant.com/menu" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.aban-restaurant.com/menu"
        />
        <meta
          property="og:image"
          content="https://www.aban-restaurant.com/menu/Appetizer_Hero_3.jpg"
        />
        <meta
          property="og:image:alt"
          content="Aban Persian Restaurant menu preview"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          name="twitter:image"
          content="https://www.aban-restaurant.com/menu/Appetizer_Hero_3.jpg"
        />
      </Head>
      {/* <Hero /> */}
      <motion.div
        className="relative h-[60vh] flex items-center justify-center text-white"
        initial="hidden"
        animate="visible"
        variants={heroVariants}
      >
        <Image
          src="/hero.jpg"
          alt="Aban Persian Restaurant hero banner"
          width={1920}
          height={1080}
          priority
          sizes="100vw"
          style={{ width: "100%", height: "100%" }} // مثل fill عمل می‌کنه
          className="object-cover absolute"
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative z-20 text-center px-4">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Authentic Persian Menu in Houston
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Explore the authentic flavors of Persia at Aban Persian Restaurant
            in Houston. From tender kebabs to hearty stews and saffron rice,
            every dish is crafted with tradition and passion.
          </motion.p>
        </div>
      </motion.div>
      <MenuCategories menuData={menuData} />

      <CallToActionMenu />
      <FAQ faqs={faqs} />
    </Layout>
  );
}

export async function getStaticProps() {
  const { menuData } = await import("@/data/menudata");

  // JSX رو حذف کن که سریالایز بشه
  const safeMenuData = menuData.map(({ icon, ...rest }) => rest);

  return {
    props: { menuData: safeMenuData },
    // revalidate: 3600, // اگه ISR می‌خوای
  };
}
