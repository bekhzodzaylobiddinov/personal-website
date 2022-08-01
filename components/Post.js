import Image from "next/image";

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
        <div className="text-sm text-gray-500 mb-2">
          Posted on {post.frontmatter.date}
        </div>
        <a href={`/blog/${post.slug}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {post.frontmatter.title}
          </h5>
        </a>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {post.frontmatter.excerpt}
        </p>
        <a
          href={`/blog/${post.slug}`}
          className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
        </a>
      </div>
    </div>
  );
}
