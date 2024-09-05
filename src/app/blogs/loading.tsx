import LoadingCard from "@/components/ui/LoadingCard";
import { TBlog } from "@/types";

const BlogLoadingPage = async () => {
  const res = await fetch("http://localhost:5000/blogs");
  const blogs = await res.json();

  return (
    <div className="p-16">
      <div className=" grid gap-6 md:grid-cols-2 lg:grid-cols-3  p-16">
        {blogs.map((blog: TBlog) => (
          <LoadingCard key={blog.id} />
        ))}
      </div>
    </div>
  );
};

export default BlogLoadingPage;
