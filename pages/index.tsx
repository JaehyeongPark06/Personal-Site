import { FooterText } from "../components/footer";
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
          name="title"
          content="Jaehyeong Park | High School Student | Software Developer"
        />
        <meta name="author" content="Jaehyeong Park" />
        <meta
          name="description"
          content="Jaehyeong Park. JAEHYEONG PARK. Welcome to my site! I'm a high school student learning 
          web development. You can learn more about me here."
        />
        <meta
          name="keywords"
          content="software developer JAEHYEONG PARK Jaehyeong Park Software Engineer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="my-0 mx-auto sm:w-[90%] md:w-[88%] lmd:w-[70%] lg:w-[42%] 2xl:w-[35%]">
        <Header />

        <main className="flex-col justify-center items-center text-center w-full">
          <Identify />
        </main>
      </div>
    </div>
  );
};

export default Home;
