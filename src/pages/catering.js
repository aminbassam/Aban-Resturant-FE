// pages/catering.js

import { useState } from "react";
import Layout from "@/components/Layout";
import Image from "next/image";
import { motion } from "framer-motion";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import { httpReauest } from "@/utils/httpRequest";
import Head from "next/head";

// Framer Motion Variants
const heroVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 0.6, // Increased delay for the children to appear after a pause
      staggerChildren: 0.4, // Increased delay between each child
      duration: 0.8,
    },
  },
};

const itemVariants = (direction) => ({
  hidden: {
    opacity: 0,
    x: direction === "left" ? -50 : 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
});

const inputStyle =
  "w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C34D23] transition-colors duration-200";

// Custom input for DatePicker
const CustomDatePickerInput = ({ value, onClick }) => (
  <button
    type="button"
    className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C34D23] transition-colors duration-200 text-left"
    onClick={onClick}
  >
    {value || "Select a date"}
  </button>
);

export default function Catering() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    persons: 1,
    date: null,
    time: "12:00",
    specialRequests: "",
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [serverMessage, setServerMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleDateChange = (date) => {
    setFormData((prevData) => ({ ...prevData, date }));
  };

  const handleTimeChange = (time) => {
    setFormData((prevData) => ({ ...prevData, time }));
  };

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.firstName) newErrors.firstName = "First name is required.";
    if (!formData.lastName) newErrors.lastName = "Last name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    else if (!emailRegex.test(formData.email))
      newErrors.email = "Please enter a valid email address.";
    if (!formData.phone) newErrors.phone = "Phone number is required.";
    if (!formData.date) newErrors.date = "Date is required.";
    if (!formData.time) newErrors.time = "Time is required.";
    if (formData.persons < 1)
      newErrors.persons = "Number of persons must be at least 1.";
    return newErrors;
  };

  const pad = (n) => String(n).padStart(2, "0");
  const toYMD = (d) =>
    `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerMessage(null);

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    // ساخت payload تمیز و سازگار
    const dateYMD = formData.date ? toYMD(formData.date) : null;
    const payload = {
      firstName: formData.firstName.trim(),
      lastName: formData.lastName.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      persons: Number(formData.persons),
      date: dateYMD, // "YYYY-MM-DD"
      time: formData.time, // "HH:mm"
      datetimeLocal:
        dateYMD && formData.time ? `${dateYMD}T${formData.time}` : null, // بدون timezone
      specialRequests: formData.specialRequests.trim(),
    };

    try {
      setSubmitting(true);

      // اگر نیاز به هدر خاص داری (مثلاً توکن)، اینجا اضافه کن
      // const headers = { "x-api-key": "..." };
      const res = await httpReauest("POST", "/catring", payload /*, headers */);

      if (res?.status === 200 || res?.status === 201) {
        setServerMessage("Catering inquiry submitted successfully.");
        // ریست فرم
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          persons: 1,
          date: null,
          time: "12:00",
          specialRequests: "",
        });
      } else {
        // پیام خطای برگشتی از بک‌اند
        setServerMessage(
          res?.message || "Submission failed. Please try again."
        );
      }
    } catch (err) {
      // خطاهای شبکه/سرور
      setServerMessage("An unexpected error occurred. Please try again.");
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Layout
      title="Persian Food Catering Houston | Halal Persian Food"
      description={"Persian Food Catering in Houston offers authentic, delicious Halal Persian cuisine. Trust us to bring bold flavors and unforgettable dining to events."}
    >
      <Head>
        <link rel="canonical" href="https://www.aban-restaurant.com/catering" />
         <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://www.aban-restaurant.com/catering"
          />
          <meta
            property="og:image"
            content="https://www.aban-restaurant.com/hero.jpg"
          />
          <meta
            property="og:image:alt"
            content="Aban Persian Restaurant catering preview"
          />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta
            name="twitter:image"
            content="https://www.aban-restaurant.com/hero.jpg"
          />
      </Head>
      {/* Hero Section with Cover Image */}
      <motion.div
        className="relative h-[60vh] flex items-center justify-center text-white"
        initial="hidden"
        animate="visible"
        variants={heroVariants}
      >
        <Image
          src="/hero.jpg"
          alt="Catering Hero"
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
            Catering with Aban Persian Restaurant in Houston
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Bring the Taste of Persia to Your Next Event
          </motion.p>
        </div>
      </motion.div>

      {/* Catering Description Section */}
      <motion.section
        className="bg-orange-50 py-16 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="container mx-auto max-w-5xl text-center">
          <motion.p
            className="text-lg md:text-xl text-gray-700 mb-12 leading-relaxed"
            variants={itemVariants("left")}
          >
            At Aban Persian Restaurant in Houston, we make every celebration
            unforgettable with authentic Persian catering. Whether you’re
            planning a wedding, corporate event, birthday, or private party, our
            team brings the rich flavors of Persia to your guests with the same
            passion and quality found in our restaurant.
          </motion.p>

          <motion.h2
            className="text-3xl font-bold text-gray-800 mb-8"
            variants={itemVariants("right")}
          >
            Why Choose Aban for Catering in Houston?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left max-w-5xl mx-auto mb-12">
            <motion.div
              variants={itemVariants("left")}
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200"
            >
              <h3 className="text-xl font-semibold text-orange-600 mb-2">
                Authentic Persian Cuisine
              </h3>
              <p className="text-gray-600 text-base">
                Signature kebabs, stews, saffron rice, and appetizers prepared
                with traditional recipes.
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants("right")}
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200"
            >
              <h3 className="text-xl font-semibold text-orange-600 mb-2">
                Perfect for Every Occasion
              </h3>
              <p className="text-gray-600 text-base">
                Weddings, birthdays, anniversaries, corporate events, and
                cultural gatherings.
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants("left")}
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200"
            >
              <h3 className="text-xl font-semibold text-orange-600 mb-2">
                Customizable Catering Options
              </h3>
              <p className="text-gray-600 text-base">
                Packages tailored to your event size and preferences.
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants("right")}
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200"
            >
              <h3 className="text-xl font-semibold text-orange-600 mb-2">
                Professional Service
              </h3>
              <p className="text-gray-600 text-base">
                A team dedicated to making your event seamless and memorable.
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants("left")}
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200"
            >
              <h3 className="text-xl font-semibold text-orange-600 mb-2">
                Trusted by Houston
              </h3>
              <p className="text-gray-600 text-base">
                Known as one of the best Persian restaurants in Houston, now
                available for off-site events.
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants("left")}
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200"
            >
              <h3 className="text-xl font-semibold text-orange-600 mb-2">
                Fresh & Locally Sourced Ingredients
              </h3>
              <p className="text-gray-600 text-base">
                Our catering menu is crafted with fresh, high-quality
                ingredients sourced locally in Houston. From tender kabobs to
                flavorful stews and saffron rice, every dish is prepared with
                care to ensure your guests enjoy the best authentic Persian
                flavors.
              </p>
            </motion.div>
          </div>

          <motion.h2
            className="text-3xl font-bold text-gray-800 mb-8"
            variants={itemVariants("right")}
          >
            Events We Cater
          </motion.h2>
          <div className="flex flex-wrap justify-center gap-4 font-medium mb-12">
            <motion.span
              variants={itemVariants("left")}
              className="bg-orange-100 px-6 py-3 rounded-full shadow-sm text-sm text-orange-700"
            >
              Wedding Receptions & Engagement Parties
            </motion.span>
            <motion.span
              variants={itemVariants("right")}
              className="bg-orange-100 px-6 py-3 rounded-full shadow-sm text-sm text-orange-700"
            >
              Corporate Meetings & Office Gatherings
            </motion.span>
            <motion.span
              variants={itemVariants("left")}
              className="bg-orange-100 px-6 py-3 rounded-full shadow-sm text-sm text-orange-700"
            >
              Birthdays, Anniversaries & Private Parties
            </motion.span>
            <motion.span
              variants={itemVariants("right")}
              className="bg-orange-100 px-6 py-3 rounded-full shadow-sm text-sm text-orange-700"
            >
              Cultural Events & Community Celebrations
            </motion.span>
          </div>

          <motion.p
            className="text-lg md:text-xl text-gray-700 leading-relaxed"
            variants={itemVariants("left")}
          >
            From tender Persian kabobs and slow-cooked stews to fresh saffron
            rice and traditional appetizers, Aban catering ensures every dish
            delights your guests. Our chefs prepare everything with the same
            attention to detail that has made us a favorite Persian restaurant
            in Houston.
          </motion.p>
        </div>
      </motion.section>

      {/* Catering Inquiry Form Section */}
      <section className="bg-orange-50 py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Start Your Catering Inquiry
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Planning your next event? Let Aban Persian Restaurant handle the
              food while you enjoy the celebration.
            </p>
            <p className="text-gray-600 mt-2">
              👉 Call us today or fill out our Catering Inquiry Form to receive
              a custom quote.
            </p>
          </div>
          <motion.div
            className="bg-white rounded-3xl shadow-2xl p-8 md:p-12"
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={inputStyle}
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.firstName}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={inputStyle}
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.lastName}
                    </p>
                  )}
                </div>
              </div>

              {/* Email and Phone */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={inputStyle}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={inputStyle}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>
              </div>

              {/* Persons, Date, and Time */}
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label
                    htmlFor="persons"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Persons
                  </label>
                  <input
                    type="number"
                    id="persons"
                    name="persons"
                    value={formData.persons}
                    onChange={handleChange}
                    min="1"
                    className={inputStyle}
                  />
                  {errors.persons && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.persons}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="date"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Date
                  </label>
                  <DatePicker
                    selected={formData.date}
                    onChange={handleDateChange}
                    dateFormat="MMMM d, yyyy"
                    className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C34D23] transition-colors duration-200"
                    minDate={new Date()}
                    customInput={<CustomDatePickerInput />}
                  />
                  {errors.date && (
                    <p className="text-red-500 text-sm mt-1">{errors.date}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="time"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Time
                  </label>
                  <TimePicker
                    onChange={handleTimeChange}
                    value={formData.time}
                    disableClock={true}
                    className="w-full text-gray-700"
                    clearIcon={null}
                    hourPlaceholder="--"
                    minutePlaceholder="--"
                    inputClassName="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C34D23] transition-colors duration-200"
                  />
                  {errors.time && (
                    <p className="text-red-500 text-sm mt-1">{errors.time}</p>
                  )}
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label
                  htmlFor="specialRequests"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Special Requests
                </label>
                <textarea
                  id="specialRequests"
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleChange}
                  rows="4"
                  className={inputStyle}
                ></textarea>
              </div>

              {/* Submit Button */}
              {serverMessage && (
                <div
                  className="text-center text-sm font-medium p-3 rounded-lg"
                  style={{
                    background: serverMessage.toLowerCase().includes("success")
                      ? "#ecfdf5"
                      : "#fef2f2",
                    color: serverMessage.toLowerCase().includes("success")
                      ? "#065f46"
                      : "#991b1b",
                  }}
                >
                  {serverMessage}
                </div>
              )}

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full text-[18px] bg-gradient-to-r from-[#F69837] to-[#C34D23] hover:from-[#C34D23] hover:to-[#F69837] text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                whileHover={{ scale: submitting ? 1 : 1.02 }}
                whileTap={{ scale: submitting ? 1 : 0.98 }}
                disabled={submitting}
              >
                {submitting ? "Sending..." : "Request Now"}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
