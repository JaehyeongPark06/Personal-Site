import { DateTime } from "luxon";
import { FooterText } from "../components/footer";
import Head from "next/head";
import { Header } from "../components/header";
import Link from "next/link";
import { PostsText } from "../components/posts";
import fs from "fs";
import matter from "gray-matter";

export async function getStaticProps() {
  const files = fs.readdirSync("posts");

  const posts = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`posts/${fileName}`, "utf-8");
    const { data: frontmatter } = matter(readFile);
    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}

export default function Blog({ posts }) {
  const sortPostsByDate = posts.sort((a, b) => {
    const beforeDate = DateTime.fromFormat(a.frontmatter.date, "MMMM d, yyyy");
    const afterDate = DateTime.fromFormat(b.frontmatter.date, "MMMM d, yyyy");
    return afterDate - beforeDate;
  });
  return (
    <div>
      <Head>
        <title>Posts · Jaehyeong Park</title>
        <meta
          name="description"
          content="These are my blog posts. It will mostly cover talks about tech and my projects."
        />
        <link rel="icon" href="/pc.webp" />
      </Head>
      <div className="my-0 mx-auto sm:w-[90%] md:w-[88%] lmd:w-[70%] lg:w-[42%] 2xl:w-[35%]">
        <Header />
        <PostsText />
        <main>
          {sortPostsByDate.map(({ slug, frontmatter }) => (
            <div
              key={slug}
              className="mt-8 rounded-lg border-dashed border-2 border-gray-200 w-full"
            >
              <Link href={`/post/${slug}`}>
                <a>
                  <h1 className="pt-6 pl-6 text-gray-200 font-bold text-2xl">
                    {frontmatter.title}
                  </h1>
                  <h2 className="px-6 text-gray-200 font-normal text-sm mt-3 mb-2">
                    {frontmatter.description}
                  </h2>
                  <h3 className="pb-6 pl-6 text-gray-200 font-normal text-sm">
                    {frontmatter.date} <span className="font-semibold">·</span>{" "}
                    {frontmatter.length}
                  </h3>
                </a>
              </Link>
            </div>
          ))}
        </main>
        <FooterText />
      </div>
    </div>
  );
}
