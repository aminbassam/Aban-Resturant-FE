import "@/styles/globals.css";
import Head from "next/head";
import Script from "next/script";
import { Lato } from "next/font/google";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

export default function App({ Component, pageProps }) {
  return (
    <div className={lato.className}>
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
    </div>
  );
}
