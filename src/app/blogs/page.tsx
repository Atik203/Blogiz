import BlogCard from "@/components/ui/BlogCard";
import { TBlog } from "@/types";

const BlogsPage = async () => {
  const res = await fetch("http://localhost:5000/blogs", {
    cache: "no-store",
  });
  const blogs = (await res.json()) as TBlog[];

  return (
    <div>
      <h1 className="text-center text-4xl my-5">
        Latest Blogs from <span className="text-accent">Blogiz</span>
      </h1>
      <p className="text-gray-500 text-center">
        <i>
          Check out the latest blogs from Blogiz. Stay tuned for more updates.
        </i>
      </p>

      <div className=" grid gap-6 md:grid-cols-2 lg:grid-cols-3  p-16">
        {blogs.map((blog: TBlog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
