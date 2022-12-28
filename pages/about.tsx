import "@fortawesome/fontawesome-svg-core/styles.css";

import { AboutMe } from "../components/me";
import { FooterText } from "../components/footer";
import Head from "next/head";
import { Header } from "../components/header";
import type { NextPage } from "next";

const About: NextPage = () => {
  return (
    <div>
      <Head>
        <title>About - Jaehyeong Park</title>
        <meta
          name="description"
          content="👋 Hi! My name is Jaehyeong and I'm a high school student from Toronto
          working with software design and development. You can find me teaching others 👨‍🏫, 
          working on my latest projects 👨‍💻, playing chess ♟️, or doing anything else I'm 
          interested in. Feel free to reach out through my socials. I'd love to talk! 🤝`
          "
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="my-0 mx-auto sm:w-slugs md:w-88 lmd:w-70 lg:w-42 2xl:w-32">
        <Header />
        <main className="w-full">
          <AboutMe />
        </main>
        <FooterText></FooterText>
      </div>
    </div>
  );
};

export default About;
