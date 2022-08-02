import Post from '../components/Post';

export default function PostList({ posts }) {
  return (
    <>
      <h1 className="text-4xl text-center my-10">Blog Posts</h1>
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
    </>
  );
}
