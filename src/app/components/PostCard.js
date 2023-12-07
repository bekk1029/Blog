import Link from "next/link";

export const Postcard = ({ blog }) => {
  return (
    <Link href={"/blog/" + blog.id + blog.title}>
      <div className="md:w-full md:h-full rounded-xl border border-[#000] md:flex md:flex-col md:p-3 md:justify-center gap-[10px]">
        <div className="md:w-full">
          <img
            src={blog.cover_image ? blog.cover_image : "/women.avif"}
            className="md:w-fu md:h-full md:object-cover"
          />
        </div>
        <div className="md:flex md:flex-col md:items-start md:gap-4">
          <span className="md:flex md:py-1 md:px-[10px] md:justify-center md:items-center md:gap-1 border-6 bg-[#4B6BFB0D] text-black rounded-md">
            {blog?.type_of}
          </span>
          <h1 className="md:text-[14px] md:font-[400] w-full">{blog.title}</h1>
        </div>
        <div className="md:flex md:items-center md:gap-5">
          <p className="text-[#97989F]">{blog.user.name}</p>
        </div>
      </div>
    </Link>
  );
};
