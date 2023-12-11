import { SinglePost } from "@/app/singlePost/[id]/page";
import Link from "next/link";

export const Post = ({ blog }) => {
  return (
    <div className="flex flex-col gap-20 mt-5">
      <div>
        <div>
          <div className="text-gray-800 font-semibold text-2xl leading-10">
            {blog.title}
          </div>
          <div>
            <div className="text-gray-400 text-lg">{blog.profile_image}</div>
            <div className="text-gray-400 text-lg">{blog.name}</div>
            <div className="text-gray-400 text-lg">
              {blog.published_timestamp}
            </div>
          </div>
        </div>
        <div>
          <img
            src={blog.social_image ? blog.social_image : "/women.avif"}
            className="w-full    object-cover rounded-lg  "
          />
        </div>
        <div>
          <img src={blog.description} />
        </div>
        <div></div>
      </div>
    </div>
  );
};
