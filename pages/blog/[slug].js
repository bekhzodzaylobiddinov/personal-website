import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
export default function PostPage({ frontmatter: { title, date, cover_image }, slug, content }) {
  return (
    <>
      <Header />

      <div className="container mx-auto shadow-lg mt-5 p-10">
        <Link href="/blog">
          <button className="cursor-pointer hover:underline underline-offset-4 decoration-purple-500">
            Go Back
          </button>
        </Link>
        <div className="card card-page my-5">
          <h1 className="">{title}</h1>
          <div className="small pb-5 pt-1">Posted on {date}</div>
          <Image
            className="object-cover rounded"
            src={cover_image}
            width={1024}
            height={768}
            alt="post image"
          />
          <div className="text-lg text-zinc-500 xl:mr-64 lg:mb-0 dark:text-zinc-400">
            <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
          </div>
        </div>
        <Link href="/blog">
          <button className="cursor-pointer hover:underline underline-offset-4 decoration-purple-500">
            Go Back
          </button>
        </Link>
      </div>
      <canvas id="canvas"></canvas>

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
