import AllPosts from "@/app/posts/page";

const Blog = () => {
  return (
    <section className="px-4 py-16 sm:px-8 md:px-12 lg:px-16 xl:px-16">
      <div className="font-extrabold text-6xl flex justify-end">.blog</div>
      <AllPosts />
    </section>
  );
};

export default Blog;
