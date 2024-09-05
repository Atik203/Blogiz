"use server";

import { TBlog } from "@/types";

const createBlog = async (blog: TBlog) => {
  const res = await fetch("http://localhost:5000/blogs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(blog),
  });

  return await res.json();
};

export default createBlog;
