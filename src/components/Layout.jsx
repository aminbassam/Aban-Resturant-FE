import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import Script from "next/script";

const Layout = ({ children, title, description, noHead }) => {
  const pageTitle = title ? `${title} | Aban Restaurant` : "Aban Restaurant";
  const pageDescription =
    description ||
    "Experience the best culinary delights at Aban Restaurant. Explore our menu, find our location, and book a table with us.";

  return (
    <>
      {!noHead && (
        <Head>
          <title>{pageTitle}</title>
          <meta name="description" content={pageDescription} />
          <meta name="og:description" content={pageDescription} />
          <meta name="og:title" content={pageTitle} />

          {/* Twitter Card tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content={pageTitle}
          />
          <meta
            name="twitter:description"
            content={pageDescription}
          />
        </Head>
      )}

      <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
        <Header />
        <main className="">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
