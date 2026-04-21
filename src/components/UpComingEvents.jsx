import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaStar, FaUserCircle } from "react-icons/fa"; // Import the new icons
import EventCard from "./EventCard";

const UpComingEvents = ({ data }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="bg-gray-100 py-16 relative ">
      <svg
        className="absolute -bottom-1 rotate-180 z-0 opacity-20"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <defs>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop
              offset="0%"
              style={{ stopColor: "#F69837", stopOpacity: 0.9 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#C34D23", stopOpacity: 0.7 }}
            />
          </linearGradient>
        </defs>
        <path
          fill="url(#gradient2)"
          fill-opacity="1"
          d="M0,64L80,74.7C160,85,320,107,480,144C640,181,800,235,960,245.3C1120,256,1280,224,1360,208L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </svg>
      <div className="container mx-auto px-4">
        <motion.h3
          className="text-4xl text-center font-bold mb-4 text-gray-900"
          transition={{ delay: 0.9 }}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={cardVariants}
        >
          Upcoming Events
        </motion.h3>
        <motion.p
          className="text-gray-900 mb-8 md:text-lg text-center"
          transition={{ delay: 0.9 }}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={cardVariants}
        >
          At Aban, dining is more than just food it’s a cultural celebration.
          Join us for special nights filled with live Persian music, DJ parties,
          and unforgettable gatherings. Whether you’re looking for a night of
          dancing or a festive dinner, Aban is Houston’s go-to spot for Persian
          dining and entertainment.
        </motion.p>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={cardVariants}
          className="grid sm:grid-cols-2 gap-8 lg:grid-cols-3 relative z-20"
        >
          {data.length
            ? data.map((event) => <EventCard key={event.id} event={event} />)
            : null}
        </motion.div>
      </div>
    </section>
  );
};

export default UpComingEvents;
