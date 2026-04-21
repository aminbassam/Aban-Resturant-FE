import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const services = [
  {
    title: "Catering",
    image: "/images/service-catering.jpg",
    description: "Bring our delicious food to your next event.",
  },
  {
    title: "Events",
    image: "/images/service-events.jpg",
    description: "Host your special occasion in our unique space.",
  },
  {
    title: "Private Dining",
    image: "/images/service-private-dining.jpg",
    description: "Enjoy an exclusive and intimate dining experience.",
  },
];

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
          Our Services
        </h2>
        <motion.div
          ref={ref}
          className="grid md:grid-cols-3 gap-8"
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative rounded-xl shadow-lg overflow-hidden bg-white"
              initial="rest"
              animate="rest"
              whileHover="hover"
              transition={{ duration: 0.3 }}
            >
              {/* بک‌گراند آبی که از بالا اسلاید می‌شود */}
              <motion.div
                className="absolute inset-0 bg-blue-500 origin-top z-50 pointer-events-none"
                variants={{
                  rest: { scaleY: 0 },
                  hover: { scaleY: 1 },
                }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
              />

              <img
                src={service.image}
                alt={service.title}
                className="w-full h-64 object-cover relative z-10"
              />
              <div className="p-6 relative z-10">
                <h3 className="text-2xl font-bold mb-2 text-[#F69837]">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
