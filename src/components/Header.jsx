import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import {
  IoHomeOutline,
  IoBookOutline,
  IoInformationCircleOutline,
  IoCallOutline,
  IoFastFoodOutline,
  IoHome,
  IoBook,
  IoInformationCircle,
  IoCall,
  IoEllipsisHorizontalCircleOutline, // آیکون سه نقطه
  IoClose, // آیکون برای بستن سایدبار
  IoCalendar,
  IoCalendarOutline,
} from "react-icons/io5";
import {
  FaInstagram,
  FaPhoneAlt,
  FaTelegram,
  FaTelegramPlane,
} from "react-icons/fa";
import { LiaConciergeBellSolid } from "react-icons/lia";
import Image from "next/image";

const Header = () => {
  const router = useRouter();
  const currentPath = router.pathname;

  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // استیت جدید برای سایدبار

  // آدرس‌هایی که در سایدبار نمایش داده می‌شن
  const otherPages = [
    {
      name: "Reservation",
      href: "/reservation",
      icon: IoCallOutline,
      activeIcon: IoCall,
      id: "reservation",
    },
    {
      name: "Blog",
      href: "/blog",
      icon: IoInformationCircleOutline,
      activeIcon: IoInformationCircle,
      id: "blog",
    },
    {
      name: "Catering",
      href: "/catering",
      icon: LiaConciergeBellSolid,
      activeIcon: LiaConciergeBellSolid,
      id: "catering",
    },
    {
      name: "Events",
      href: "/events",
      icon: IoCalendarOutline,
      activeIcon: IoCalendar,
      id: "events",
    },
    // می‌تونید صفحات دیگه‌ای رو هم اینجا اضافه کنید
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = document.querySelectorAll("section[id]");
      let currentActiveSection = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - window.innerHeight / 3) {
          currentActiveSection = section.id;
        }
      });
      setActiveSection(currentActiveSection);
    };

    window.addEventListener("scroll", handleScroll);

    // برای بستن سایدبار وقتی مسیر عوض می‌شه
    const handleRouteChange = () => {
      setIsSidebarOpen(false);
    };
    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router.events]);

  const orderButtonClass =
    "text-[18px] bg-gradient-to-r from-[#F69837] to-[#C34D23] hover:from-[#C34D23] hover:to-[#F69837] text-white font-bold py-3 px-6 rounded-full transition-colors duration-300";

  const desktopHeaderClasses = `
    hidden md:block fixed w-full top-0 z-50 transition-all duration-300 ease-in-out
    ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}
  `;
  const desktopNavLinkClasses = `
    relative transition-colors duration-300
    ${
      isScrolled
        ? "text-gray-800 hover:text-[#C34D23]"
        : "text-white hover:text-[#F69837]"
    }
  `;
  const desktopActiveLinkClasses = `
    relative text-[#C34D23] font-semibold
  `;
  const desktopUnderlineClasses = `
    absolute -bottom-1 left-0 right-0 h-0.5 bg-[#C34D23] transition-transform duration-300
  `;

  const navVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };
  const floatVariants = {
    float: {
      y: [0, -3, 0],
      transition: {
        duration: 2.5,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  };

  const navItems = [
    {
      name: "Home",
      href: "/",
      icon: IoHomeOutline,
      activeIcon: IoHome,
      id: "",
    },
    {
      name: "Menu",
      href: "/menu",
      icon: IoBookOutline,
      activeIcon: IoBook,
      id: "menu",
    },
    {
      name: "About",
      href: "/about",
      icon: IoInformationCircleOutline,
      activeIcon: IoInformationCircle,
      id: "about",
    },
    // Note: Contact and Blog are moved to `otherPages` for mobile
  ];

  // Variants for the sidebar animation
  const sidebarVariants = {
    hidden: { x: "100%" },
    visible: { x: 0 },
  };

  return (
    <>
      {/* Desktop Header (بدون تغییر) */}

      <header className={desktopHeaderClasses}>
        <div className="bg-[#022f5e] py-2">
          <div className="container mx-auto  flex items-center px-4">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={
                "https://www.doordash.com/store/aban-persian-restaurant-9527-westheimer-rd-houston-34714607/72097346/?srsltid=AfmBOoqeawm1ehuihFs5gz1GjE6psCx-U1X4qz9cClco0vZMYT4yERo0"
              }
              className="px-2 border-r border-gray-400 text-pink-600"
            >
              <Image
                alt="Doordash Logo Aban restaurant"
                src="/doordash.png"
                className="w-7"
                width={28}
                height={28}
              />
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={
                "https://www.ubereats.com/store/aban-persian-restaurant/A4mfrIisS3mFjQL38QMXCQ?srsltid=AfmBOood0iJqEerAlNoijtku_OB-UFT_fTZTyL0UvbTiEAIFfLrs04Ws"
              }
              className="px-2 border-r border-gray-400 text-sky-400"
            >
              <Image
                alt="Ubereats Logo Aban restaurant"
                src="/ubereats.png"
                className="w-7"
                width={28}
                   height={28}
              />
            </Link>
            <Link
              href="tel:+7134854758"
              className="px-2 flex items-center gap-2 text-green-500"
            >
              <FaPhoneAlt /> (713) 485-4758
            </Link>
          </div>
        </div>
        <nav className="container mx-auto px-4 py-3 flex items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-[#022f5e] absolute top-10"
          >
            <Link href="/">
              <Image
                width={72}
                height={72}
                src="/logo.PNG"
                className="w-18 rounded-full"
                alt="Logo"
              />
            </Link>
          </motion.div>
          <ul className="flex-grow flex justify-center space-x-6 py-4">
            {navItems.concat(otherPages).map((item, index) => {
              // اضافه کردن سایر صفحات به دسکتاپ
              const isActive =
                currentPath === item.href ||
                (item.id && activeSection === item.id);
              return (
                <li key={index} className="group text-[18px]">
                  <Link
                    href={item.href}
                    className={
                      isActive
                        ? desktopActiveLinkClasses
                        : desktopNavLinkClasses
                    }
                  >
                    {item.name}
                    <span
                      className={`${desktopUnderlineClasses} ${
                        isActive
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Link
              target="_blank"
              href="https://order.toasttab.com/online/aban-restaurant"
              className={orderButtonClass}
              rel="noreferrer"
            >
              Order Now
            </Link>
          </motion.div>
        </nav>
      </header>

      {/* Mobile Top Bar */}
      <header
        className={`md:hidden fixed top-0 left-0 right-0 z-50 ${
          isScrolled ? "bg-[#022f5e]/80 backdrop-blur-sm" : "bg-transparent"
        } duration-200`}
      >
        <div className="flex justify-center py-1 px-2 ">
          <Link href="/" className={""}>
            <Image
              width={65}
              height={65}
              src="/logo.PNG"
              className="w-16 rounded-full"
              alt="Logo"
            />
          </Link>
          <div className=" flex items-center px-4 text-lg">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={
                "https://www.ubereats.com/store/aban-persian-restaurant/A4mfrIisS3mFjQL38QMXCQ?srsltid=AfmBOood0iJqEerAlNoijtku_OB-UFT_fTZTyL0UvbTiEAIFfLrs04Ws"
              }
              className="px-2 border-r border-gray-400 text-pink-600"
            >
              <Image
                width={32}
                height={32}
                alt="Ubereats Logo Aban restaurant"
                src="/ubereats.png"
                className="w-8"
              />
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={
                "https://www.doordash.com/store/aban-persian-restaurant-9527-westheimer-rd-houston-34714607/72097346/?srsltid=AfmBOoqeawm1ehuihFs5gz1GjE6psCx-U1X4qz9cClco0vZMYT4yERo0"
              }
              className="px-2 border-r border-gray-400 text-sky-400"
            >
              <Image
                width={32}
                height={32}
                src="/doordash.png"
                alt="Doordash Logo Aban restaurant"
                className="w-8"
              />
            </Link>
            <Link
              href={"tel:7134854758"}
              className="px-2 flex items-center gap-2 text-green-500 text-sm"
            >
              <FaPhoneAlt /> (713) 485-4758
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile Navbar */}
      <motion.nav
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 px-2 py-1 bg-center md:bg-cover"
        variants={navVariants}
        style={{ backgroundImage: "url(./Exclude.png)" }}
        initial="hidden"
        animate="visible"
      >
        <ul className="flex justify-between items-end text-gray-600">
          {navItems.slice(0, 2).map((item, index) => {
            const isActive =
              currentPath === item.href ||
              (item.id && activeSection === item.id);
            const Icon = isActive ? item.activeIcon : item.icon;
            return (
              <li key={index} className="flex-1 text-center">
                <Link
                  href={item.href}
                  className={`flex flex-col items-center p-2 transition-colors duration-300 ${
                    isActive ? "text-[#C34D23]" : "hover:text-[#C34D23]"
                  }`}
                >
                  <Icon className="w-5 h-5 mb-1" />
                  <span className="text-xs">{item.name}</span>
                </Link>
              </li>
            );
          })}
          <li className="flex-1 flex justify-center -translate-y-8">
            <motion.div
              variants={floatVariants}
              animate="float"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                target="_blank"
                href="https://order.toasttab.com/online/aban-restaurant"
                rel="noreferrer"
                className="w-16 h-16 rounded-full flex flex-col items-center justify-center text-white bg-gradient-to-r from-[#F69837] to-[#C34D23] shadow-lg"
              >
                <IoFastFoodOutline className="w-6 h-6" />
                <span className="text-xs mt-1">Order</span>
              </Link>
            </motion.div>
          </li>
          {navItems.slice(2, 3).map((item, index) => {
            const isActive =
              currentPath === item.href ||
              (item.id && activeSection === item.id);
            const Icon = isActive ? item.activeIcon : item.icon;
            return (
              <li key={index} className="flex-1 text-center">
                <Link
                  href={item.href}
                  className={`flex flex-col items-center p-2 transition-colors duration-300 ${
                    isActive ? "text-[#C34D23]" : "hover:text-[#C34D23]"
                  }`}
                >
                  <Icon className="w-5 h-5 mb-1" />
                  <span className="text-xs">{item.name}</span>
                </Link>
              </li>
            );
          })}
          {/* دکمه سه نقطه برای باز کردن سایدبار */}
          <li className="flex-1 text-center">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="flex flex-col items-center justify-center w-full p-2 transition-colors duration-300 hover:text-[#C34D23]"
            >
              <IoEllipsisHorizontalCircleOutline className="w-5 h-5 mb-1" />
              <span className="text-xs">More</span>
            </button>
          </li>
        </ul>
      </motion.nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            className="md:hidden fixed inset-0 z-[100] bg-black bg-opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSidebarOpen(false)}
          >
            <motion.div
              className="absolute right-0 top-0 h-full w-3/4 bg-white shadow-lg p-6 flex flex-col items-start gap-6"
              variants={sidebarVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()} // جلوگیری از بسته شدن با کلیک روی سایدبار
            >
              <div className="flex justify-between items-center w-full">
                <h2 className="text-xl font-bold text-gray-800">Other Pages</h2>
                <button onClick={() => setIsSidebarOpen(false)} className="p-2">
                  <IoClose className="w-6 h-6 text-gray-600" />
                </button>
              </div>
              <ul className="flex flex-col gap-4 w-full">
                {otherPages.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="flex items-center gap-4 text-gray-800 hover:text-[#C34D23] transition-colors"
                      onClick={() => setIsSidebarOpen(false)}
                    >
                      <item.icon className="w-6 h-6" />
                      <span className="text-lg font-medium">{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
