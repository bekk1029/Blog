import { useState } from "react";
import { Postcard } from "./PostCard";
export function Trend() {
  const [pages, setPages] = useState(4);
  return (
    <div className="w-full flex bg-white text-gray-800 flex-col items-center">
      <div className="flex flex-col items-start gap-30">
        <div className="flex items-start gap-10 text-2xl font-bold leading-7">
          Trending
        </div>
        <div>
          {blogs.map((blog) => {
            <Postcard blog={blog} />;
          })}
        </div>
      </div>
    </div>
  );
}
