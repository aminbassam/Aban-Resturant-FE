import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";
import { Geist_Mono } from "next/font/google";
import { motion } from "framer-motion";
import { httpReauest } from "@/utils/httpRequest";
import Head from "next/head";
import { CDN_BASE_URL } from "@/config";

const geistMono = Geist_Mono({ subsets: ["latin"] });

// Test data for blog posts (now in English)

// Framer Motion variants for animations
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

// Blog Post Card Component
const BlogPostCard = ({ post }) => {
  const safeSrc = (CDN_BASE_URL + post.cover).replace(/\\/g, "/");
  return (
    <motion.div variants={cardVariants} className="h-full">
      <Link href={`/blog/${post.slug}`} className="block h-full">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-[1.03] hover:shadow-2xl flex flex-col h-full">
          <div className="relative w-full h-56">
            <Image
              src={safeSrc}
              alt={post.title}
              width={800}
              height={450}
              sizes="100vw"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              className="transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="p-6 flex-grow flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-2 ">
                {post.title}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {post.snippet}
              </p>
            </div>
            <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
              <span className="font-medium">{post.author}</span>
              <span className={geistMono.className}>
                {new Date(post.createdAt).toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default function Blog({ data }) {
  return (
    <>
      <Layout
        title="Aban Blogs | Explore Persian Food & Culinary Heritage"
        description={
          "Explore the Aban Persian Restaurant blog for insights into authentic Persian cuisine, culture, dining experiences, and culinary traditions from Houston."
        }
      >
        <Head>
          <link rel="canonical" href="https://www.aban-restaurant.com/blog" />
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://www.aban-restaurant.com/blog"
          />
          <meta
            property="og:image"
            content="https://www.aban-restaurant.com/hero.jpg"
          />
          <meta
            property="og:image:alt"
            content="Aban Persian Restaurant Blogs preview"
          />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta
            name="twitter:image"
            content="https://www.aban-restaurant.com/hero.jpg"
          />
        </Head>
        {/* Hero Section */}
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
              Our Blog – Explore the Flavors and Stories of Aban
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Stay up to date with the latest news, articles, and stories from
              our kitchen.
            </motion.p>
          </div>
        </motion.div>

        {/* Blog Posts Section */}
        <section className="bg-gray-100 py-16 px-4">
          <div className="container mx-auto">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            >
              {data.map((post) => (
                <BlogPostCard key={post.id} post={post} />
              ))}
            </motion.div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export async function getServerSideProps(context) {
  const { data } = await httpReauest("GET", "/blogs", {}, {});

  return {
    props: {
      data: data.data,
    },
  };
}
