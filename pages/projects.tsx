import { FooterText } from "../components/footer";
import Head from "next/head";
import { Header } from "../components/header";
import type { NextPage } from "next";
import Portfolio from "../components/portfolio";
import { ProjectText } from "../components/projects";

const Project: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Projects · Jaehyeong Park</title>
        <meta name="description" content="A list of a my personal projects." />
        <link rel="icon" href="/pc.webp" />
      </Head>
      <div className="my-0 mx-auto sm:w-[90%] md:w-[88%] lmd:w-[70%] lg:w-[42%] 2xl:w-[35%]">
        <Header />

        <main className="w-full">
          <ProjectText />
          <div className="mt-12 grid grid-cols-1 gap-8 w-full">
            <Portfolio />
          </div>
        </main>
        <FooterText />
      </div>
    </div>
  );
};

export default Project;
