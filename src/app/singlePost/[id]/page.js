"use client";

import { useEffect, useState } from "react";
import { Post } from "./Post";

export function SinglePost() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("https://dev.to/api/articles?top=4&per_page=5");
      const jsonData = await res.json();
      setData(jsonData);
    };

    getData();
  }, []);
  return (
    <div>
      {data.map((blog) => {
        return <Post key={blog.id} blog={blog} />;
      })}
    </div>
  );
}
