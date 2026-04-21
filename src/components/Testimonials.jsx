import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaStar, FaUserCircle } from "react-icons/fa"; // Import the new icons

// نظرات بیشتر برای نمایش در اسلایدر
const testimonials = [
  {
    text: "The food was absolutely incredible! The flavors were so well-balanced, and you could tell the chef uses fresh, high-quality ingredients. It was a truly delicious experience. 10/10",
    author: "Negin Saki",
  }, 
  {
    text: "ABAN restaurant,truly knows how to deliver a fantastic experience! The vibes are unmatched, creating the perfect atmosphere for a night out. The food is absolutely delicious-each dish is packed with flavor and cooked to perfection.",
    author: "Mirwais Niazi",
  },
  {
    text: "An Amazing Persian Experience! If you’re looking for a true Persian restaurant with a warm, family-friendly atmosphere, this is the place to be! We went with our family and felt incredibly welcomed the moment we walked in. The hospitality was outstanding — the staff were not only attentive but also so respectful and kind, which made the whole experience even more special.",
    author: "farnaz resalati",
  },
  {
    text: "I chose this restaurant to celebrate a colleague's birthday and it was the perfect decision! The atmosphere was fantastic with great music, and the food was absolutely delicious. Our Persian colleague said it felt like a true taste of home, which is the highest compliment. A wonderful experience for our whole team! :)",
    author: "Dondante",
  },
  {
    text: "I was there with my wife's family and we had the most amazing dinner here! Every dish, from the appetizers to the kebabs, was cooked perfectly and so delicious. The warm and friendly service made us feel right at home. Highly recommended for a taste of authentic Persian hospitality and cuisine. Definitely gonna come back!",
    author: "Chris",
  },
  {
    text: "Finally! Real Iranian food, the way it’s done in Iran, along with Persian hospitality. The food you get there is high quality without breaking the bank! The wait staff are warm, kind and polite and Persian. The atmosphere is pleasant and the decor nice and the seats are very comfortable too. I love this place. Having lived in Houston for nearly 25 years, it was about time we get a restaurant like the in one of the major food hubs in America.",
    author: "Asal Shokati",
  },
   {
    text: "We were invited to Aban Persian Food while visiting from Canada, and it was a truly special experience. The food was rich with authentic Persian flavors and felt like a home-cooked meal. The hospitality was warm and heartfelt it felt more like being hosted by family than dining out. A beautiful reflection of Persian culture. Highly recommend!",
    author: "Mas. Mahdavirad",
  },
];

const Testimonials = () => {
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
    <section className="bg-gray-100 py-16 relative">
      <svg
        className="absolute inset-0 z-0 opacity-20"
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
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          What Our Clients Say
        </h2>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={cardVariants}
        >
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white my-4 p-8 rounded-xl shadow border-t-4 border-[#F69837] flex flex-col h-full transform transition-transform duration-300 hover:scale-[1.02]">
                  {/* بخش جدید: User Icon و Stars */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <FaUserCircle className="w-10 h-10 text-gray-400 mr-3" />
                      <span className="font-semibold text-gray-800">
                        {testimonial.author}
                      </span>
                    </div>
                    <div className="flex space-x-1 text-[#F69837]">
                      {[...Array(5)].map((_, i) => (
                        "★"
                      ))}
                    </div>
                  </div>

                  <p className="italic text-gray-700 mb-4 flex-grow relative before:content-['\201C'] before:absolute before:-top-2 before:left-0 before:text-4xl before:font-serif before:text-[#C34D23] before:opacity-20 before:z-0">
                    {testimonial.text}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
