"use client";

import { useEffect, useState } from "react";
import { SecondCard } from "@/components/SecondCard";

export function Blog() {
  const [data, setData] = useState([]);
  const [posts, setPosts] = useState(27);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        `https://dev.to/api/articles?top=4&per_page=${posts}`
      );
      const jsonData = await res.json();
      setData(jsonData);
    };

    getData();
  }, [posts]);
  function More() {
    return setPosts(posts + 6);
  }

  console.log(data);
  return (
    <div className="flex flex-col gap-12 mt-5">
      <h1 className="text-4xl font-bold leading-7 text-black">All Blog Post</h1>
      <div className="w-full flex flex-col gap-12">
        <div className="grid grid-cols-3 gap-10">
          {data.map((blog) => {
            return <SecondCard key={blog.id} blog={blog} />;
          })}
        </div>
      </div>
      <div className="flex justify-center items-center">
        <button
          onClick={More}
          className="items-center py-2 px-4 rounded-md border-[2px] border-gray-400 text-xl font-medium text-gray-600"
        >
          Load More
        </button>
      </div>
    </div>
  );
}
