import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CDN_BASE_URL } from "@/config";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const EventCard = ({ event }) => {
  const safeSrc = (CDN_BASE_URL + event.cover).replace(/\\/g, "/");

  return (
    <motion.div variants={cardVariants} className="h-full">
      {/* Link is optional for events. If each event has its own page, you can use it. Otherwise, you can remove the Link. */}
      <Link href={`/events/${event.slug}`} className="block h-full">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-[1.03] hover:shadow-2xl flex flex-col h-full">
          <div className="relative w-full h-56">
            <Image
              src={safeSrc}
              alt={event.title}
              width={800}
              height={450}
              sizes="100vw"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              className="transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="p-6 flex-grow flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                {event.title}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {event.snippet}
              </p>
            </div>
            <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
              {/* If date is a proper Date object from the database, you can format it here. */}
              <span className="font-medium">
                {new Date(event.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span className="text-orange-600 hover:text-orange-800 font-semibold">
                View Details
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default EventCard;
