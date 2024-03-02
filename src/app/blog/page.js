"use client";
import { useEffect, useState } from "react";
import { SinglePost } from "@/components/SecondCard";
import { useSearch } from "../layout";
import Link from "next/link";
export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [load, setLoadMore] = useState(12);
  const { search } = useSearch();
  const addLoad = () => {
    setLoadMore(load + 3);
  };
  useEffect(() => {
    fetch(`https://dev.to/api/articles?per_page=${load}?${search}`)
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, [load, search]);
  return (
    <div className="flex flex-col bg-white max-w-[1216px]  m-auto">
      <h2 className="text-2xl font-bold text-[#181A2A] my-12 ">
        All Blog Post
      </h2>
      <div className=" grid md:grid-cols-3 grid-cols-1 gap-5">
        {posts.map((post) => (
          <Link key={post.id} href={`/blog/${post.id}`}>
            <SinglePost {...post} />
          </Link>
        ))}
      </div>
      <button
        onClick={addLoad}
        className="mx-auto my-[100px] w-fit px-5 py-3 text-[#696A75] text-base font-medium border border-[#696A754D] rounded-md"
        type="button"
      >
        Load More
      </button>
    </div>
  );
}
