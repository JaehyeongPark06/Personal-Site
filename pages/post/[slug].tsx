import { FooterText } from "../../components/footer";
import Head from "next/head";
import { Header } from "../../components/header";
import fs from "fs";
import matter from "gray-matter";
import md from "markdown-it";
import path from "path";

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}

export default function PostPage({ frontmatter, content }) {
  return (
    <div>
      <Head>
        {" "}
        <title>{frontmatter.title} · Jaehyeong Park</title>
      </Head>
      <div className="my-0 mx-auto sm:w-[90%] md:w-[88%] lmd:w-[70%] lg:w-[42%] 2xl:w-[35%]">
        <Header />
        <div className="w-full">
          <h1 className="text-4xl text-gray-300 font-extrabold mt-8">
            {frontmatter.title}
          </h1>
          <h2 className="mt-1 text-gray-300 font-normal text-[1.05rem]">
            {frontmatter.date} <span className="font-extrabold">·</span>{" "}
            {frontmatter.length}
          </h2>
          <article
            className="prose prose-base mt-6"
            dangerouslySetInnerHTML={{ __html: md().render(content) }}
          />
        </div>
        <FooterText />
      </div>
    </div>
  );
}
