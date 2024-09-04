import BlogDetails from "@/components/ui/BlogDetails";
import { TBlog } from "@/types";
type BlogId = {
  params: {
    blogId: string;
  };
};

export const generateStaticParams = async () => {
  const res = await fetch("http://localhost:5000/blogs");
  const blogs: TBlog[] = await res.json();
  return blogs.slice(0, 3).map((blog) => ({
    blogId: blog.id,
  }));
};

const BlogDetailsPage = async ({ params }: BlogId) => {
  const id = params?.blogId;
  const res = await fetch(`http://localhost:5000/blogs/${id}`, {
    cache: "no-store",
  });
  const blog: TBlog = await res.json();
  return (
    <div className="p-16">
      <BlogDetails blog={blog} />
    </div>
  );
};

export default BlogDetailsPage;
