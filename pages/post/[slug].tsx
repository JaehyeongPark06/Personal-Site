import { FooterText } from '../../components/footer'
import Head from 'next/head'
import { Header } from '../../components/header'
import fs from 'fs'
import matter from 'gray-matter'
import md from 'markdown-it'

export async function getStaticPaths() {
  const files = fs.readdirSync('posts')
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace('.md', '')
    }
  }))
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params: { slug } }) {
  const fileName = fs.readFileSync(`posts/${slug}.md`, 'utf-8')
  const { data: frontmatter, content } = matter(fileName)
  return {
    props: {
      frontmatter,
      content
    }
  }
}

export default function PostPage({ frontmatter, content }) {
  return (
    <div className="prose md:prose-lg lg:prose-xl">
      <Head>
        {' '}
        <title>{frontmatter.title} - Jaehyeong Park</title>
      </Head>
      <div className="my-0 mx-auto sm:w-slugs md:w-88 lmd:w-60 lg:w-40 2xl:w-32">
        <Header />
        <main className="w-full">
          <h1 className="text-4xl text-gray-300 font-bold mt-8">{frontmatter.title}</h1>
          <h2 className="text-m mt-1 text-gray-400 font-normal">
            {frontmatter.date} <span className="font-bold">·</span> {frontmatter.length}
          </h2>
          <div
            className="mt-8 text-gray-300"
            dangerouslySetInnerHTML={{ __html: md().render(content) }}
          />
        </main>
        <FooterText></FooterText>
      </div>
    </div>
  )
}
