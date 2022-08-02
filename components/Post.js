import Image from 'next/image';

export default function Post({ post }) {
  return (
    <div className="max-w-lg bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <a href={`/blog/${post.slug}`}>
        <Image
          className="rounded-t-md object-cover"
          src={post.frontmatter.cover_image}
          width={600}
          height={400}
          alt="post_thumbnail"
        />
      </a>
      <div className="p-5">
        <div className="text-sm text-gray-500 mb-2">Posted on {post.frontmatter.date}</div>
        <a href={`/blog/${post.slug}`}>
          <h5>{post.frontmatter.title}</h5>
        </a>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {post.frontmatter.excerpt}
        </p>
        <a href={`/blog/${post.slug}`} className="btn">
          Read more
        </a>
      </div>
    </div>
  );
}
