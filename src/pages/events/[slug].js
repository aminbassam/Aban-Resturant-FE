// pages/events/[slug].js
import Layout from "@/components/Layout";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import { CDN_BASE_URL } from "@/config";
import { httpReauest } from "@/utils/httpRequest";
import Head from "next/head";

const fallbackImage = "/hero.jpg";

const heroVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

function getEventStatus(eventDate) {
  const now = new Date();
  const date = new Date(eventDate);
  if (now > date) {
    return "past";
  }
  return "upcoming";
}

export default function EventDetail({ data }) {
  const event = data;
  const router = useRouter();
  const url = `https://www.aban-restaurant.com/events/${event.slug}`;

  if (!event) {
    return (
      <Layout title="Event Not Found">
        <div className="flex justify-center items-center h-[60vh]">
          <h1 className="text-3xl font-bold text-gray-800">Event not found.</h1>
        </div>
      </Layout>
    );
  }

  const status = useMemo(() => getEventStatus(event.date), [event.date]);

  return (
    <Layout
      title={event.meta_title || event.title}
      description={event.meta_desc || ""}
    >
      <Head>
        <link rel="canonical" href={url} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={CDN_BASE_URL + event.cover} />
        <meta property="og:image:alt" content={event.title} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:image" content={CDN_BASE_URL + event.cover} />
      </Head>
      {/* Hero Section */}
      <motion.div
        className="relative h-[60vh] flex items-end text-white p-8 md:p-16"
        initial="hidden"
        animate="visible"
        variants={heroVariants}
      >
        <Image
          src={event.cover ? CDN_BASE_URL + event.cover : fallbackImage}
          alt={event.title}
          priority
          width={1920}
          height={1080}
          objectFit="cover"
          sizes="100vw"
          style={{ width: "100%", height: "100%" }} // مثل fill عمل می‌کنه
          className="object-cover absolute"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-5xl mx-auto w-full">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{event.title}</h1>
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-white/20 backdrop-blur">
              {new Date(event.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span
              className={`px-3 py-1 rounded-full text-sm font-semibold text-white ${
                status === "past" ? "bg-gray-500/80" : "bg-emerald-500/80"
              }`}
            >
              {status === "past" ? "Event has ended" : "Upcoming Event"}
            </span>
          </div>
        </div>
      </motion.div>

      {/* Content Section */}
      <section className="bg-white py-12 px-4 pb-20">
        <div className="container mx-auto max-w-5xl">
          {event.content && (
            <div className="prose prose-lg desc_details max-w-none">
              <div dangerouslySetInnerHTML={{ __html: event.content }} />
            </div>
          )}
        </div>
      </section>

      {/* Gallery Section - Only for past events */}
      {status === "past" &&
        Array.isArray(event.gallery) &&
        event.gallery.length > 0 && (
          <section className="py-12 px-4 bg-slate-50">
            <div className="container mx-auto max-w-6xl">
              <h2 className="text-2xl font-semibold mb-6">Event Gallery</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {event.gallery.map((src, i) => (
                  <div
                    key={i}
                    className="relative aspect-[4/3] rounded-xl overflow-hidden shadow"
                  >
                    <Image
                      src={CDN_BASE_URL + src}
                      alt={`Event photo ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
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
      "/events/" + context.query.slug,
      {},
      {}
    );
    if (res.status !== 200) {
      return { notFound: true };
    }
    return { props: { data: res.data.data } };
  } catch (e) {
    return { notFound: true };
  }
}
