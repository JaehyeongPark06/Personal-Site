import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta
          name="description"
          content="Learn more about student and software developer Jaehyeong Park and browse through Jaehyeong's collection of projects."
        />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="author" content="Jaehyeong Park" />
        <meta name="copyright" content="2022 Jaehyeong Park" />
        <link rel="canonical" href="https://jaehyeongpark.social" />

        <meta property="og:url" content="https://jaehyeongpark.social" />
        <meta property="og:site_name" content="Jaehyeong Park" />
        <meta property="og:title" content="Student and Software Developer" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Learn more about student and software developer Jaehyeong Park and browse through Jaehyeong's collection of projects."
        />
        <meta name="theme-color" content="#232425" />
        <meta name="msapplication-navbutton-color" content="#232425" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#232425" />
        <meta name="msapplication-TileColor" content="#232425" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
