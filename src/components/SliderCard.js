import Link from "next/link";
import { Btn } from "./Btn";

export const SliderCard = ({ blog }) => {
  return (
    <div className=" relative flex flex-col bg-white ">
      <img
        src={blog.cover_image ? blog.cover_image : "/women.avif"}
        className="w-full h-[600px] bg-cover rounded-lg "
      />
      <div
        className="
   absolute left-5 bottom-5  flex w-1/2 py-[10px] px-[30px] flex-col items-start gap-[24px] rounded-xl bg-gray-100 border-1 border-gray-100 border-solid"
      >
        <div>
          <Btn value="Technology" />
          <div className="text-gray-800 font-semibold text-2xl leading-10">
            {blog.title}
          </div>
        </div>
        <div className="text-gray-400 text-lg">
          {blog.readable_publish_date}
        </div>
      </div>
    </div>
  );
};
