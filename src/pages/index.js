import Image from "next/image";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import About from "@/components/About";
import MenuCategories from "@/components/MenuCategories";
import Services from "@/components/Services";
import FAQ from "@/components/FAQ";
import MenuCta from "@/components/MenuCta";
import EventsCTA from "@/components/EventsCta";
import UpComingEvents from "@/components/UpComingEvents";
import CallToAction from "@/components/CallToAction";
import { httpReauest } from "@/utils/httpRequest";
import dynamic from "next/dynamic";
import Head from "next/head";
const ScrollImages = dynamic(() => import("@/components/ScrollImages"), {
  ssr: false,
});
const Testimonials = dynamic(() => import("@/components/Testimonials"), {
  ssr: false,
});
// اگر کارت‌های سرویس آیکن/موشن زیادی دارند:
const MenuServiceSection = dynamic(
  () => import("@/components/MenuServiceSection"),
  { ssr: true }
);

const faqs = [
  {
    question: "Do you take reservations at Aban Persian Restaurant in Houston?",
    answer:
      "Yes, Aban Persian Restaurant in Houston accepts reservations for both small and large groups. Whether you’re planning a relaxed dinner, a family gathering, or a special celebration, we recommend booking in advance. Reservations are especially popular on weekends during our live music and DJ events.",
  },
  {
    question: "What are your hours of operation?",
    answer: [
      "Aban Persian Restaurant in Houston is open seven days a week:",
      "• Monday – Thursday: 11 AM – 10 PM",
      "• Friday – Saturday: 11 AM – 12 AM (midnight)",
      "• Sunday: 11 AM – 10 PM",
      "Our extended weekend hours make Aban one of Houston’s top Persian restaurants for both dinner and late-night dining, especially when guests come to enjoy live music, DJs, and authentic Persian food.",
    ],
  },
  {
    question: "Do you offer vegetarian options?",
    answer:
      "Yes, while our menu is known for authentic Persian kebabs and stews, we also offer vegetarian-friendly dishes such as Kashk-e Bademjan (eggplant dip), mast-o-khiar (yogurt with cucumber), salads, and saffron rice. Aban ensures that every guest can enjoy Persian flavors in Houston.",
  },
  {
    question: "What makes Aban the best Persian restaurant in Houston?",
    answer:
      "Aban Persian Restaurant is considered one of the best Persian restaurants in Houston because we combine authentic Persian cuisine with vibrant cultural experiences. Guests enjoy classic kebabs, rich stews like Ghormeh Sabzi and Fesenjan, and saffron rice dishes—all prepared with traditional recipes and locally sourced ingredients. Adding to the experience, Aban is one of the only Persian restaurants in Houston with live music and DJ nights.",
  },
  {
    question: "Do you have live music or entertainment?",
    answer:
      "Yes! Aban Persian Restaurant hosts live Persian music and DJ events, making us one of the most exciting Persian dining destinations in Houston. Guests can enjoy authentic Persian food while dancing, celebrating, and experiencing Persian culture in a lively atmosphere.",
  },
  {
    question: "Can I host private events or parties at Aban?",
    answer:
      "Absolutely. Aban Persian Restaurant in Houston is the perfect place for birthdays, engagements, weddings, and corporate dinners. We provide authentic Persian food, elegant seating, and the option for live entertainment, making every event unforgettable.",
  },
  {
    question: "What are the most popular dishes on your menu?",
    answer:
      "Our most popular dishes include koobideh and barg kebabs, chicken kabob (joojeh), lamb shank stew, Ghormeh Sabzi, Gheimeh, and Fesenjan. Each dish is paired with saffron rice and prepared to highlight the authentic flavors of Persian cuisine in Houston.",
  },
  {
    question: "Do you offer catering for Persian food in Houston?",
    answer:
      "Yes, Aban offers catering services across Houston for weddings, birthdays, and business events. Our catering menu includes Persian kebabs, stews, and rice dishes, allowing your guests to experience the same authentic flavors we serve in our restaurant.",
  },
  {
    question: "Is Aban a family-friendly restaurant?",
    answer:
      "Yes, Aban is family-friendly and welcomes guests of all ages. Families love our kabob plates and stews, while kids can enjoy simpler rice and grilled dishes. Our warm hospitality makes Aban one of the most welcoming Persian restaurants in Houston.",
  },
  {
    question: "Do you serve halal Persian food in Houston?",
    answer:
      "Yes, all of our meats are halal. At Aban Persian Restaurant, we take pride in serving halal kebabs, stews, and chicken specialties, making us a trusted destination for halal Persian dining in Houston.",
  },
  {
    question: "Can I order online for delivery or pickup?",
    answer:
      "Yes, you can easily order online for pickup or delivery. Enjoy our Persian kebabs, stews, and rice specialties from the comfort of your home anywhere in Houston. Aban Persian Restaurant makes it simple to enjoy authentic Persian food without leaving your house.",
  },
  {
    question: "Where is Aban Persian Restaurant located?",
    answer:
      "Aban Persian Restaurant is conveniently located in Westheimer Rd, Houston, Texas. We are known as one of the top spots for authentic Persian cuisine, offering a welcoming atmosphere, live entertainment, and some of the best Persian kebabs and stews in Houston.",
  },
  {
    question: "Can I book Aban for a private party or celebration?",
    answer:
      "Yes. Aban Persian Restaurant offers private event reservations for birthdays, engagements, weddings, and corporate parties. We provide customized menus, live entertainment, and a beautiful atmosphere. Call us directly to learn about our special event packages.",
  },
  {
    question: "Does Aban host special events with live music and DJs?",
    answer:
      "Yes! Aban regularly hosts special nights featuring live Persian music and DJs, making us one of the few Persian restaurants in Houston with dining, dancing, and cultural entertainment all in one place.",
  },
  {
    question:
      "Do you offer special deals for private parties or group reservations?",
    answer:
      "Yes. For large groups and private parties, Aban offers special packages and promotions. To get the best deal for your event, we recommend calling us directly. Our team will help you create a personalized experience with authentic Persian cuisine and entertainment.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: Array.isArray(f.answer) ? f.answer.join(" ") : f.answer,
    },
  })),
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Aban Persian Restaurant",
  image: "https://www.aban-restaurant.com/logo.jpg",
  url: "https://www.aban-restaurant.com/",
  telephone: "+17134854758",
  address: {
    "@type": "PostalAddress",
    streetAddress: "9527 Westheimer Rd",
    addressLocality: "Houston",
    addressRegion: "TX",
    postalCode: "77063",
    addressCountry: "US",
  },
  servesCuisine: ["Persian", "Middle Eastern"],
  priceRange: "$$",
  acceptsReservations: "True",
  menu: "https://www.aban-restaurant.com/menu",
  sameAs: [
    "https://www.instagram.com/aban.persianrestaurant/",
    "https://www.facebook.com/people/Aban-Restaurant/61573427978284/",
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "11:00",
      closes: "22:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Friday", "Saturday"],
      opens: "11:00",
      closes: "24:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "11:00",
      closes: "22:00",
    },
  ],
};

export default function Home({ data }) {
  return (
    <Layout title="Persian Restaurant Houston | Top Mediterranean Restaurants" description="Searching for Persian Restaurant Houston? Aban offers authentic Persian cuisine, Middle Eastern & Mediterranean food, and the best Halal experience.">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />

        <link rel="canonical" href="https://www.aban-restaurant.com/" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:type" content="restaurant" />
        <meta property="og:url" content="https://www.aban-restaurant.com/" />
        <meta
          property="og:image"
          content="https://www.aban-restaurant.com/hero.jpg"
        />
      </Head>
      <Hero />
      {/* <MenuCta/> */}
      <MenuServiceSection />
      <ScrollImages />
      <About />
      <EventsCTA />
      <UpComingEvents data={data} />
      <Testimonials />
      <FAQ faqs={faqs} />
      <CallToAction />
    </Layout>
  );
}

export async function getServerSideProps() {
  const { data } = await httpReauest("GET", "/events/upcoming", {}, {});
  // فقط فیلدهای لازم برای کارت
  const lean = (data?.data || []).map((ev) => ({
    id: ev._id || ev.id,
    title: ev.title,
    slug: ev.slug,
    date: ev.date,
    cover: ev.cover, // مطمئن شو URL قابل نمایش باشه
    snippet: ev.snippet, // کوتاه
  }));

  return { props: { data: lean } };
}
