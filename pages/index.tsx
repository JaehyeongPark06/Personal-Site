import "@fortawesome/fontawesome-svg-core/styles.css";

import Head from "next/head";
import { Header } from "../components/header";
import { Identify } from "../components/home";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Jaehyeong Park</title>
        <meta
          name="description"
          content="Welcome to my site! I'm a high school student learning 
          web development. You can learn more about me here."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="my-0 mx-auto sm:w-slugs md:w-88 lmd:w-70 lg:w-44 2xl:w-32">
        <Header />

        <main className="flex-col justify-center items-center text-center w-full">
          <Identify />
        </main>
      </div>
    </div>
  );
};

export default Home;
