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

const heroVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

const formVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.2, duration: 0.6 },
  },
};

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

export default function Reservation() {
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
  const [statusMessage, setStatusMessage] = useState({ type: "", text: "" });

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMessage({ type: "", text: "" }); // Clear previous messages
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        // Format the date to YYYY-MM-DD
        const dateYMD = formData.date
          ? formData.date.toISOString().split("T")[0]
          : null;

        const payload = {
          ...formData,
          date: dateYMD,
          datetimeLocal:
            dateYMD && formData.time ? `${dateYMD}T${formData.time}` : null,
        };

        const response = await httpReauest("POST", "/reservation", payload);

        if (response.status === 200 || response.status === 201) {
          setStatusMessage({
            type: "success",
            text: "Reservation submitted successfully!",
          });
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
          setStatusMessage({
            type: "error",
            text: response.message || "An error occurred.",
          });
        }
      } catch (error) {
        setStatusMessage({
          type: "error",
          text: "Failed to submit reservation. Please try again.",
        });
        console.error("Submission error:", error);
      }
    }
  };

  return (
    <Layout
      title="Book a Table | Aban Persian Restaurant Houston"
      description={"Book your reservation at Aban Persian Restaurant in Houston and experience authentic Persian cuisine, warm hospitality, and truly unforgettable flavors."}
    >
      <Head>
        <link
          rel="canonical"
          href="https://www.aban-restaurant.com/reservation"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.aban-restaurant.com/reservation"
        />
        <meta
          property="og:image"
          content="https://www.aban-restaurant.com/hero.jpg"
        />
        <meta
          property="og:image:alt"
          content="Aban Persian Restaurant reservation preview"
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
          alt="Reservation Hero"
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
            Book Your Table at Aban Restaurant
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Reserve your spot for an unforgettable dining experience.
          </motion.p>
        </div>
      </motion.div>

      {/* Reservation Form Section */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            className="bg-white rounded-3xl shadow-2xl p-8 md:p-12"
            initial="hidden"
            animate="visible"
            variants={formVariants}
          >
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
              Request a Reservation
            </h2>

            {statusMessage.text && (
              <div
                className={`p-4 rounded-lg text-white mb-6 text-center ${
                  statusMessage.type === "success"
                    ? "bg-green-500"
                    : "bg-red-500"
                }`}
              >
                {statusMessage.text}
              </div>
            )}

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
              <motion.button
                type="submit"
                className="w-full text-[18px] bg-gradient-to-r from-[#F69837] to-[#C34D23] hover:from-[#C34D23] hover:to-[#F69837] text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Request Now
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
