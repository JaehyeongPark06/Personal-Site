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
        <meta name="description" content="Uploading soon." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="my-0 mx-auto sm:w-slugs md:w-88 lmd:w-70 lg:w-42 2xl:w-32">
        <Header />

        <main className="w-full">
          <ProjectText />
          <div className="mt-12 grid grid-cols-1 gap-8 w-full">
            <Portfolio />
          </div>
        </main>
        <FooterText></FooterText>
      </div>
    </div>
  );
};

export default Project;
