import Image from "next/image";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import About from "@/components/About";
import MenuCategories from "@/components/MenuCategories";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import { motion } from "framer-motion";
import AboutForAboutPage from "@/components/AboutForAboutPage";
import CallToActionAbout from "@/components/CallToActionAbout";
import Head from "next/head";

export default function Home() {
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
      title="About Us | Fine Persian Dining Experience"
      description={
        "Every meal at Aban Persian Restaurant in Houston is thoughtfully prepared to reflect the authentic traditions, culture, and flavors of Persian cuisine."
      }
    >
      <Head>
        <link rel="canonical" href="https://www.aban-restaurant.com/about" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.aban-restaurant.com/about"
        />
        <meta
          property="og:image"
          content="https://www.aban-restaurant.com/hero.jpg"
        />
        <meta
          property="og:image:alt"
          content="Aban Persian Restaurant About preview"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          name="twitter:image"
          content="https://www.aban-restaurant.com/hero.jpg"
        />
      </Head>
      <motion.div
        className="relative h-[60vh] flex items-center justify-center text-white"
        initial="hidden"
        animate="visible"
        variants={heroVariants}
      >
        <Image
          src="/hero.jpg"
          alt="Blog hero image"
          objectFit="cover"
          priority
          width={1920}
          height={1080}
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
            About Aban Persian Restaurant in Houston
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            At Aban Persian Restaurant in Houston, we believe dining should be
            more than just a meal—it should be an experience. Our mission is to
            bring the rich traditions of Persian cuisine to our community
            through dishes that celebrate history, culture, and passion.
          </motion.p>
        </div>
      </motion.div>
      <AboutForAboutPage />
      {/* <Testimonials /> */}
      <section id="location" className="relative py-16 sm:py-20" dir="ltr">
        <div className="mx-auto max-w-6xl px-4">
          {/* Section heading (بالای نقشه) */}
          <div className="mb-6 sm:mb-8 text-left">
            <h2 className="text-2xl sm:text-3xl font-bold">
              Find us on the map
            </h2>
            <p className="mt-2 text-sm sm:text-base text-gray-600">
              Aban Persian Restaurant in Houston — click the map or the button
              below to get directions.
            </p>
          </div>

          {/* Card wrapper */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl ring-1 ring-black/10">
            {/* Soft glow background */}
            <div
              className="pointer-events-none absolute -inset-24 bg-gradient-to-tr from-emerald-300/20 via-blue-300/20 to-fuchsia-300/20 blur-3xl"
              aria-hidden
            />

            {/* Map */}
            <iframe
              title="Aban on the map"
              aria-label="Map location of Aban Persian Restaurant in Houston"
              className={`aspect-video w-full transition-opacity duration-500 h-[500px] md:h-[600px]`}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6928.862072270501!2d-95.53673362395313!3d29.736236133106935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c3ddd621da9b%3A0x3132fc4367eaa147!2s29.7362361,-95.5367336!5e0!3m2!1sen!2sde!4v1756739389028!5m2!1sen!2sde"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />

            {/* Top overlay: title on the map + action */}
            <div className="pointer-events-none absolute left-3 right-3 top-3 flex items-center justify-between gap-3">
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="pointer-events-none"
              >
                <div className="rounded-xl bg-black/55 text-white backdrop-blur px-3 py-1.5 text-xs sm:text-sm font-medium shadow">
                  Aban — On the Map
                </div>
              </motion.div>

              <motion.a
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                href="https://maps.app.goo.gl/AQkgyJB4PzLiH4xZA"
                target="_blank"
                rel="noopener noreferrer"
                className="pointer-events-auto rounded-xl bg-white/85 text-gray-900 backdrop-blur px-3 py-1.5 text-xs sm:text-sm font-medium shadow hover:bg-white"
              >
                Open in Google Maps
              </motion.a>
            </div>
          </div>
        </div>
      </section>

      <CallToActionAbout />
      {/* <FAQ /> */}
    </Layout>
  );
}
