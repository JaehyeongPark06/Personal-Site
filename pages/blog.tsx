import '@fortawesome/fontawesome-svg-core/styles.css'

import { BlogText } from '../components/blog'
import { DateTime } from 'luxon'
import { FooterText } from '../components/footer'
import Head from 'next/head'
import { Header } from '../components/header'
import Link from 'next/link'
import fs from 'fs'
import matter from 'gray-matter'

export async function getStaticProps() {
  const files = fs.readdirSync('posts')

  const posts = files.map((fileName) => {
    const slug = fileName.replace('.md', '')
    const readFile = fs.readFileSync(`posts/${fileName}`, 'utf-8')
    const { data: frontmatter } = matter(readFile)
    return {
      slug,
      frontmatter
    }
  })

  return {
    props: {
      posts
    }
  }
}

export default function Blog({ posts }) {
  const sortBlogPostsByDate = posts.sort((a, b) => {
    const beforeDate = DateTime.fromFormat(a.frontmatter.date, 'MMMM d, yyyy')
    const afterDate = DateTime.fromFormat(b.frontmatter.date, 'MMMM d, yyyy')
    return afterDate - beforeDate
  })
  return (
    <div>
      <Head>
        {' '}
        <title>Blog - Jaehyeong Park</title>
        <meta
          name="description"
          content="This is my personal blog. It will mostly cover talks about tech."
        />{' '}
        <link rel="icon" href="/favicon.ico" />{' '}
      </Head>
      <div className="my-0 mx-auto sm:w-slugs md:w-88 lmd:w-70 lg:w-40 2xl:w-32">
        <Header />
        <BlogText />
        <main>
          {sortBlogPostsByDate.map(({ slug, frontmatter }) => (
            <div key={slug} className="mt-8 rounded-lg bg-gray-200 border border-gray-600 w-full">
              <Link href={`/post/${slug}`}>
                <a>
                  <h1 className="pt-6 pl-6 text-gray-300 font-bold text-2xl">
                    {frontmatter.title}
                  </h1>
                  <h2 className="px-6 text-gray-400 font-normal text-sm mt-3 mb-2">
                    {frontmatter.description}
                  </h2>
                  <h3 className="pb-6 pl-6 text-gray-400 font-normal text-sm">
                    {frontmatter.date} <span className="font-semibold">·</span> {frontmatter.length}
                  </h3>
                </a>
              </Link>
            </div>
          ))}
        </main>
        <FooterText />
      </div>
    </div>
  )
}
