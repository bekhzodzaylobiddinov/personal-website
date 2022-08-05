import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import Prism from 'prismjs';
import { useEffect } from 'react';
require('prismjs/components/prism-javascript');
require('prismjs/components/prism-css');
require('prismjs/components/prism-jsx');

export default function PostPage({ frontmatter: { title, date, cover_image }, slug, content }) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <>
      <Header />
      <main className="container mx-auto shadow-lg mt-5 p-10 dark:border dark:border-zinc-600 rounded dark:bg-zinc-800">
        <Link href="/blog">
          <button className="cursor-pointer hover:underline underline-offset-4 decoration-purple-500">
            Go Back
          </button>
        </Link>
        <section className="card card-page my-5">
          <h1 className="">{title}</h1>
          <div className="small pb-5 pt-1">Posted on {date}</div>
          <Image
            className="object-cover rounded"
            src={cover_image}
            width={2048}
            height={600}
            alt="post image"
          />
          <article
            className="prose prose-zinc md:prose-lg lg:prose-xl dark:prose-invert max-w-full"
            dangerouslySetInnerHTML={{ __html: marked.parse(content) }}
          ></article>
        </section>
        <Link href="/blog">
          <button className="cursor-pointer hover:underline underline-offset-4 decoration-purple-500">
            Go Back
          </button>
        </Link>
      </main>
      <Footer absolute={false} />
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(path.join('posts', slug + '.md'), 'utf-8');

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}
