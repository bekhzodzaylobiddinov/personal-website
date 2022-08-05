import Image from 'next/image';
import Link from 'next/link';
export default function Post({ post }) {
  return (
    <div className="max-w-lg bg-white rounded-lg border border-gray-200 shadow-md dark:bg-zinc-800 dark:border-zinc-700">
      <Image
        className="rounded-t-md"
        src={post.frontmatter.cover_image}
        width={1200}
        height={800}
        alt="post_thumbnail"
        priority
      />
      <div className="p-5">
        <div className="text-sm text-gray-500 mb-2">Posted on {post.frontmatter.date}</div>
        <h5>{post.frontmatter.title}</h5>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {post.frontmatter.excerpt}
        </p>
        <Link href={`/blog/${post.slug}`}>
          <button className="btn">Read more</button>
        </Link>
      </div>
    </div>
  );
}
