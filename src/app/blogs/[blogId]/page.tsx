import { TBlog } from "@/types";

export const generateStaticParams = async () => {
  const res = await fetch("http://localhost:5000/blogs");
  const blogs: TBlog[] = await res.json();
  return blogs.slice(0, 3).map((blog) => ({
    blogId: blog.id,
  }));
};

const BlogDetails = async ({ params }: { params: { blogId: string } }) => {
  const id = params?.blogId;
  const res = await fetch(`http://localhost:5000/blogs/${id}`, {
    cache: "no-store",
  });

  const blog: TBlog = await res.json();
  return (
    <div className="p-16">
      {/* ignore ts error */}

      {/* @ts-ignore */}
      <BlogDetails blog={blog} />
    </div>
  );
};

export default BlogDetails;
