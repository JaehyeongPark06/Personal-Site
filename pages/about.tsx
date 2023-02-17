import { AboutMe } from "../components/me";
import { FooterText } from "../components/footer";
import Head from "next/head";
import { Header } from "../components/header";
import type { NextPage } from "next";

const About: NextPage = () => {
  return (
    <div>
      <Head>
        <title>About Me · Jaehyeong Park</title>
        <meta
          name="description"
          content="I'm Jaehyeong Park, a high school student from Toronto working with software development. The vast majority of my projects can be found on my Github.
          Most of my recent work is related to the web, but I like to dabble with anything related to programming.
          You can find me teaching others 👨‍🏫, working on my latest projects 👨‍💻, playing chess ♟️, or doing anything else I'm interested in.          
          "
        />
        <link rel="icon" href="/pc.webp" />
      </Head>
      <div className="my-0 mx-auto sm:w-[90%] md:w-[88%] lmd:w-[70%] lg:w-[42%] 2xl:w-[35%]">
        <Header />
        <main className="w-full">
          <AboutMe />
        </main>
        <FooterText />
      </div>
    </div>
  );
};

export default About;
