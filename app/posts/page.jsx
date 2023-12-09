import Link from "next/link";
import { getAllPostsMeta } from "@/utils/mdx";

const AllPosts = async () => {
  const posts = await getAllPostsMeta();

  return (
    <section className="py-12">
      <hr />
      <div className="flex justify-center flex-wrap gap-4 my-6">
        {posts?.map((post) => (
          <Link
            href={`posts/${post.slug}`}
            key={post?.title}
            className="p-8 rounded-md shadow-md"
          >
            <h3 className="text-xl font-semibold">{post.title}</h3>
            <p className="mt-4 text-sm">{post.author}</p>
            <time className="text-[12px] text-gray-400">
              {post.publishDate}
            </time>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default AllPosts;
