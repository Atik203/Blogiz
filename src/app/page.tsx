import LatestBlogs from "@/components/LatestBlogs/LatestBlogs";
import { TBlog } from "@/types";

const HomePage = async () => {
  const res = await fetch("http://localhost:5000/blogs", {
    next: {
      revalidate: 10,
    },
  });
  const data = (await res.json()) as TBlog[];

  return (
    <>
      <LatestBlogs blogs={data} />
    </>
  );
};

export default HomePage;
