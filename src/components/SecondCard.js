export const SecondCard = ({ blog }) => {
  return (
    <div className="w-full flex flex-col items-start border-solid border-gray-250 border-[1px] p-3 rounded-lg ">
      <img
        src={blog.social_image ? blog.social_image : "/women.avif"}
        className="w-full    object-cover rounded-lg  "
      />
      <div className="flex flex-col gap-3">
        <div className="w-full ">
          <button className="items-center my-4 py-1 px-3 rounded-md bg-slate-200 text-blue-500 font-semibold text-sm">
            Technology
          </button>
          <div className="w-full  text-black text-2xl font-bold leading-6">
            {blog.title}
          </div>
        </div>
        <div className="text-gray-400 text-lg">{blog.profile_image}</div>
        <div className="text-gray-400 text-lg">{blog.name}</div>
        <div className="text-gray-400 text-lg">{blog.published_timestamp}</div>
      </div>
    </div>
  );
};
