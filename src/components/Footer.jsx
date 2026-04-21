// components/Footer.js
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaInstagram,
  FaFacebook,
  FaTiktok,
  FaYelp,
} from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const Footer = () => {
  const socialLinks = [
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/aban.persianrestaurant/reels/",
      label: "Instagram",
    },
    {
      icon: FaFacebook,
      href: "https://www.facebook.com/people/Aban-Restaurant/61573427978284/",
      label: "Facebook",
    },
  ];

  const hours = [
    "Monday – Thursday: 11 AM – 10 PM",
    "Friday – Saturday: 11 AM – 12 AM (midnight)",
    "Sunday: 11 AM – 10 PM",
  ];

  return (
    <>
      <motion.footer
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="bg-[#022f5e] text-gray-300 py-16 relative"
        style={{
          boxShadow: "0px -15px 25px #00000010",
          backgroundImage: "url('/pattern.png')",
          backgroundSize: "contain",
          backgroundPosition: "bottom",
          backgroundRepeat: "repeat-x",
        }}
      >
        <div className="absolute left-0 bottom-full flex justify-center w-full border-b-4 border-[#022f5e] z-20">
          <img
            src="/curve2.png"
            width="260"
            height="60"
            className="w-[260px] h-[60px] relative -bottom-1"
            alt="Decorative Curve"
          />
        </div>
        <div className="absolute left-0 bottom-0 flex justify-center w-full border-b-4 border-[#fff] z-20">
          <img
            src="/curve1.png"
            width="260"
            height="60"
            className="w-[260px] h-[60px] relative -bottom-1"
            alt="Decorative Curve"
          />
        </div>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-5">
            {/* Logo and Social Media */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <Link href="/">
                <Image
                  src="/logo.jpg"
                  alt="Aban Houston Logo"
                  width={100}
                  height={100}
                  className="rounded-full mb-4"
                />
              </Link>
              <div className="flex space-x-4 mt-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-[#F69837] transition-colors"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Icon size={24} aria-label={social.label} />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Navigation Links */}
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="hover:text-[#F69837] transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/menu"
                    className="hover:text-[#F69837] transition-colors"
                  >
                    Menu
                  </Link>
                </li>
                <li>
                  <Link
                    href="/events"
                    className="hover:text-[#F69837] transition-colors"
                  >
                    Events
                  </Link>
                </li>
                <li>
                  <Link
                    href="/catering"
                    className="hover:text-[#F69837] transition-colors"
                  >
                    Catering
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="hover:text-[#F69837] transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/reservation"
                    className="hover:text-[#F69837] transition-colors"
                  >
                    Reservation
                  </Link>
                </li>
              </ul>
            </div>

            {/* Hours of Operation */}
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-white mb-4">
                Hours of Operation
              </h3>
              <ul className="space-y-2">
                {hours.map((item, index) => (
                  <li key={index} className="text-gray-200">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Information */}
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-white mb-4">
                Contact Info
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center justify-center md:justify-start">
                  <FaPhone className="w-5 h-5 text-[#F69837] mr-3" />
                  <a
                    href="tel:+7134854758"
                    className="text-gray-200 hover:text-[#F69837] transition-colors"
                  >
                    (713) 485-4758
                  </a>
                </li>
                <li className="flex items-center justify-center md:justify-start">
                  <FaMapMarkerAlt className="w-5 h-5 text-[#F69837] mr-3" />
                  <span className="text-gray-200">
                    9527 Westheimer Rd, Houston, TX 77063
                  </span>
                </li>
                <li className="flex items-center justify-center md:justify-start">
                  <FaEnvelope className="w-5 h-5 text-[#F69837] mr-3" />
                  <a
                    href="mailto:AbanPersianrestaurant@gmail.com"
                    className="text-gray-200 hover:text-[#F69837] transition-colors"
                  >
                    AbanPersianrestaurant@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.footer>

      {/* Copyright Section */}
      <div className=" py-4 text-center pb-28 md:pb-4">
        <div className="container mx-auto px-6 gap-2 flex flex-col sm:flex-row items-center justify-around ">
          <p className="text-sm">
            © {new Date().getFullYear()} Aban Houston. All Rights Reserved.
          </p>
          <a
            href="https://omojet.com/"
            target="_blank"
            rel="noreferrer"
            dir="ltr"
            class="flex gap-1 items-center"
          >
            Designed and Developed by{" "}
            <img
              width={"32"}
              height={"32"}
              src="https://omojet.com/icon.png"
              class="w-8 object-contain items-center mb-1"
              alt="Sirir logo"
            />{" "}
            Omojet
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
