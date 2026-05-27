import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import EventCard from "@/components/EventCard";
import EventsDesc from "@/components/EventsDesc";
import CallToActionEvents from "@/components/CallToActionAbout";
import { httpReauest } from "@/utils/httpRequest";
import Head from "next/head";

// Framer Motion variants for animations
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

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

export default function Events({ data }) {
  // Use mock data if server-side data is not available
  const eventsData = data || [];

  return (
    <Layout
      title="Events | Celebrate with Authentic Persian Cuisine"
      description={
        "Host your next event at Aban Persian Restaurant in Houston. Enjoy authentic cuisine, warm hospitality, and a vibrant setting for unforgettable celebrations."
      }
    >
      <Head>
        <link rel="canonical" href="https://www.aban-restaurant.com/events" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.aban-restaurant.com/events"
        />
        <meta
          property="og:image"
          content="https://www.aban-restaurant.com/hero2.jpg"
        />
        <meta
          property="og:image:alt"
          content="Aban Persian Restaurant events preview"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          name="twitter:image"
          content="https://www.aban-restaurant.com/hero2.jpg"
        />
      </Head>
      {/* Hero Section */}
      <motion.div
        className="relative h-[60vh] flex items-center justify-center text-white"
        initial="hidden"
        animate="visible"
        variants={heroVariants}
      >
        <Image
          src="/hero2.jpg"
          alt="Events hero image"
          priority
          width={1920}
          height={1080}
          objectFit="cover"
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
            Events at Aban Persian Restaurant in Houston
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Celebrate with Dining & Entertainment in Houston
          </motion.p>
        </div>
      </motion.div>

      <EventsDesc />

      {/* Events Section */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="container mx-auto">
          <motion.h2
            className="text-4xl font-bold mb-8 text-center text-gray-900"
            transition={{ delay: 0.9 }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            Upcoming Events
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            {eventsData.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Private Event Section with In-View Animation */}
      <div className="bg-orange-100 py-20 text-gray-800 flex flex-col items-center justify-center p-4 sm:px-8">
        <motion.div
          className="max-w-4xl w-full text-center p-8 md:p-12 rounded-3xl bg-white shadow-xl border border-gray-200"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible" // Triggers animation when element is in view
          viewport={{ once: true, amount: 0.5 }} // Runs once, when 50% of the component is visible
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-amber-500 mb-4 md:mb-6 leading-tight"
            variants={itemVariants}
          >
            Host Your Private Event at Aban
          </motion.h2>

          <motion.p
            className="text-sm sm:text-base md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Looking for the perfect venue in Houston to host a private event?
            Aban Persian Restaurant offers a vibrant space for birthdays,
            engagements, anniversaries, corporate dinners, and cultural
            celebrations. With authentic Persian cuisine, personalized service,
            and entertainment options, we make every gathering unforgettable.
          </motion.p>

          <motion.p
            className="text-sm sm:text-base md:text-lg mb-8 md:mb-10 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Contact us today to reserve your private event at Aban Persian
            Restaurant in Houston and create a night your guests will always
            remember.
          </motion.p>

          <motion.div variants={itemVariants}>
            <Link href="/reservation" passHref>
              <motion.button
                className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-full shadow-md transition-all duration-300 transform hover:scale-105"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 8px 25px rgba(251, 191, 36, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Event Inquiry
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { data } = await httpReauest("GET", "/events", {}, {});

  return {
    props: {
      data: data.data,
    },
  };
}
