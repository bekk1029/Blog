"use client";

import { useEffect, useState } from "react";
import { Postcard } from "./PostCard";
export function Trend() {
  // const [pages, setPages] = useState(4);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("https://dev.to/api/articles?top=4&per_page=4");
      const jsonData = await res.json();
      setData(jsonData);
    };

    getData();
  }, []);

  console.log(data);

  return (
    <div className="w-full flex bg-white text-gray-800 flex-col items-center">
      <div className="flex flex-col items-start gap-30">
        <div className="flex items-start gap-10 text-2xl font-bold leading-7">
          Trending
        </div>
        <div className="w-full grid grid-cols-4 gap-8 h-[360px]">
          {data.map((blog) => {
            return <Postcard key={blog.id} blog={blog} />;
          })}
        </div>
      </div>
    </div>
  );
}
