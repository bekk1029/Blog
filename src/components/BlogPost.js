"use client";

import { useEffect, useState } from "react";
import { SecondCard } from "./SecondCard";

export const BlogPost = () => {
  const [data, setData] = useState([]);
  const [posts, setPosts] = useState(9);

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
    return setPosts(posts + 3);
  }

  console.log(data);
  return (
    <div className="flex flex-col gap-20">
      <div className="w-full flex flex-col  gap-12">
        <div className="flex flex-col items-start gap-12">
          <h1 className="text-4xl font-bold leading-7 text-black">
            All Blog Post
          </h1>
          <div className="w-full flex items-center justify-between gap-3">
            <div className="font-medium text-sm cursor-pointer text-gray-800 flex items-center gap-8">
              <div className="hover:text-red-500">All</div>
              <div className="hover:text-red-500">Design</div>
              <div className="hover:text-red-500">Travel</div>
              <div className="hover:text-red-500">Fashion</div>
              <div className="hover:text-red-500">Technology</div>
              <div className="hover:text-red-500">Branding</div>
            </div>
            <div className="cursor-pointer font-medium text-sm text-gray-800">
              View All
            </div>
          </div>
        </div>
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
};
