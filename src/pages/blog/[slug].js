// pages/blog/[slug].js
import Layout from "@/components/Layout";
import Image from "next/image";
import { Geist_Mono } from "next/font/google";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { CDN_BASE_URL } from "@/config";
import { httpReauest } from "@/utils/httpRequest";
import Head from "next/head";
import { FaPlus } from "react-icons/fa";

const geistMono = Geist_Mono({ subsets: ["latin"] });

// Fallback image source if the specific image is not available
const fallbackImage = "/hero.jpg";

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
function BlogSeoHead({ post }) {
  const baseUrl = "https://www.aban-restaurant.com";
  const siteName = "Aban Restaurant";
  const url = `${baseUrl}/blog/${post?.slug ?? ""}`;

  const title = post?.meta_title || post?.title || siteName;
  const description = post?.meta_desc || post?.snippet || "";
  const coverUrl = post?.cover
    ? CDN_BASE_URL + post.cover
    : `${baseUrl}/hero.jpg`;
  const authorName = post?.author || "Editorial Team";
  const published = post?.createdAt
    ? new Date(post.createdAt).toISOString()
    : undefined;
  const modified = post?.updatedAt
    ? new Date(post.updatedAt).toISOString()
    : published;

  // Breadcrumbs (Home -> Blog -> Post)
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${baseUrl}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post?.title || "",
        item: url,
      },
    ],
  };

  // Article schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    headline: title,
    description: description,
    image: [{ "@type": "ImageObject", url: coverUrl }],
    author: [{ "@type": "Person", name: authorName }],
    publisher: {
      "@type": "Organization",
      name: siteName,
      logo: { "@type": "ImageObject", url: `${baseUrl}/logo.png` },
    },
    ...(published ? { datePublished: published } : {}),
    ...(modified ? { dateModified: modified } : {}),
  };

  // FAQ schema (اختیاری، فقط اگر faq وجود داشته باشد)
  const faqSchema = post?.faq?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: post.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            // answer می‌تواند HTML باشد
            text: item.answer,
          },
        })),
      }
    : null;

  return (
    <Head>
      {/* Primary Meta */}
      <title>{title}</title>
      {description ? <meta name="description" content={description} /> : null}
      <meta
        name="robots"
        content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />
      <link rel="canonical" href={url} />

      {/* Viewport & Theme */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#0B0F19" />

      {/* Open Graph */}
      <meta property="og:locale" content="fa_IR" />
      <meta property="og:type" content="article" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      {description ? (
        <meta property="og:description" content={description} />
      ) : null}
      <meta property="og:image" content={coverUrl} />
      <meta property="og:image:alt" content={post?.title || siteName} />
      {/* اگر اندازه تصویر را می‌دانی این دو را هم پر کن */}
      {/* <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" /> */}
      {published ? (
        <meta property="article:published_time" content={published} />
      ) : null}
      {modified ? (
        <meta property="article:modified_time" content={modified} />
      ) : null}
      <meta property="article:author" content={authorName} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      {description ? (
        <meta name="twitter:description" content={description} />
      ) : null}
      <meta name="twitter:image" content={coverUrl} />

      {/* Preload/Preconnect (اختیاری اما مفید) */}
      <link rel="preload" as="image" href={coverUrl} />
      <link rel="preconnect" href={new URL(coverUrl).origin} crossOrigin="" />

      {/* JSON-LD: Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {/* JSON-LD: Breadcrumbs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* JSON-LD: FAQ (اگر وجود داشته باشد) */}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
    </Head>
  );
}

export default function BlogDetail({ data }) {
  const post = data.blog;

  // If the post is not found, you can show a 404 page or redirect
  if (!post) {
    return (
      <Layout title="Post Not Found">
        <div className="flex justify-center items-center h-[60vh]">
          <h1 className="text-4xl font-bold text-gray-800">Post not found.</h1>
        </div>
      </Layout>
    );
  }

  return (
    <Layout noHead title={post.meta_title} description={post.meta_desc}>
      <BlogSeoHead post={post} />
      {/* Cover Section */}
      <motion.div
        className="relative h-[60vh] flex items-end text-white p-8 md:p-16"
        initial="hidden"
        animate="visible"
        variants={heroVariants}
      >
        <Image
          src={post.cover ? CDN_BASE_URL + post.cover : fallbackImage}
          alt={post.title}
          priority
          layout="fill"
          objectFit="cover"
          sizes="100vw"
          style={{ width: "100%", height: "100%" }} // مثل fill عمل می‌کنه
          className="object-cover absolute"
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative z-20 max-w-4xl mx-auto text-left w-full">
          <motion.h1
            className="text-3xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {post.title}
          </motion.h1>
          <motion.div
            className="flex items-center text-lg space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <span className="font-semibold">{post.author}</span>
            <span className={`text-gray-300 ${geistMono.className}`}>
              {new Date(post.createdAt).toLocaleDateString()}
            </span>
          </motion.div>
        </div>
      </motion.div>

      {/* Content Section */}
      <section className="bg-white py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <article className="prose prose-lg desc_details prose-invert max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-p:leading-relaxed prose-a:text-pink-400 prose-a:no-underline hover:prose-a:underline prose-blockquote:border-purple-500 prose-blockquote:bg-slate-800/50 prose-blockquote:shadow-md prose-strong:text-purple-300 prose-code:bg-slate-800 prose-code:p-1 prose-code:rounded-md prose-code:text-sm prose-li:marker:text-purple-400 prose-img:rounded-lg prose-img:shadow-lg">
            <div
              dangerouslySetInnerHTML={{
                __html: post.content,
              }}
            />
          </article>
        </div>
      </section>
      {post?.faq?.length > 0 && (
        <section className="pt-12 pb-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 ">FAQ</h2>
            <div className="space-y-3">
              {post.faq.map((item, idx) => (
                <details key={idx} className="group rounded-xl border p-4">
                  <summary className="cursor-pointer list-none font-semibold  marker:content-none flex items-center justify-between">
                    <span>{item.question}</span>
                    <span className="transition-transform group-open:rotate-45 text-black">
                      <FaPlus />
                    </span>
                  </summary>
                  <div className="mt-3 prose prose-invert max-w-none prose-p:leading-relaxed">
                    <div dangerouslySetInnerHTML={{ __html: item.answer }} />
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
}

export async function getServerSideProps(context) {
  try {
    const res = await httpReauest(
      "GET",
      "/blogs/" + context.query.slug,
      {},
      {}
    );

    if (res.status !== 200) {
      return {
        notFound: true,
      };
    }
    return {
      props: {
        data: res.data.data,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}
