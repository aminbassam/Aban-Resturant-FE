import "@/styles/globals.css";
import Head from "next/head";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Welcome to our restaurant – authentic, delicious, and memorable food experience."
        />
        <meta name="author" content="Your Restaurant Name" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/logo.PNG" />
        <link rel="apple-touch-icon" href="/logo.PNG" />
        <meta name="theme-color" content="#fff" />
      </Head>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-BK954BW75J"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-BK954BW75J');
        `}
      </Script>
      <Component {...pageProps} />
    </>
  );
}
