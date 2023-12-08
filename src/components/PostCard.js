import Link from "next/link";
import { Btn } from "./Btn";

export const Postcard = ({ blog }) => {
  return (
    <div className="relative w-full flex flex-col items-start ">
      <img
        src={blog.social_image ? blog.social_image : "/women.avif"}
        className="w-full h-full object-cover rounded-lg  "
      />
      <div className="absolute left-8 bottom-8 w-4/5 ">
        <Btn value="Click" />
        <div className="text-slate-50 text-lg font-bold">{blog.title}</div>
      </div>
    </div>
  );
};
