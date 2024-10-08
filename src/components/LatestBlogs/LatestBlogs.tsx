import { TBlog } from "@/types";
import Link from "next/link";
import LatestBlogCard from "../ui/LatestBlogCard";

const LatestBlogs = ({ blogs }: { blogs: TBlog[] }) => {
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
        {blogs.slice(0, 3).map((blog: TBlog) => (
          <LatestBlogCard key={blog.id} blog={blog} />
        ))}
      </div>

      <div className="text-center">
        <Link href="/blogs" className="btn btn-primary">
          View All Blogs
        </Link>
      </div>
    </div>
  );
};

export default LatestBlogs;
