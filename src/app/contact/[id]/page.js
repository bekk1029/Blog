"use client";

import { useEffect, useState } from "react";

export function Contact() {
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
    <div className="w-full flex justify-center ">
      <div className="w-3/5 flex flex-col justify-center items-center gap-7">
        <div className="flex flex-col items-start gap-8 ">
          <div className="flex flex-col items-start gap-10 ">
            <h1 className="text-black text-4xl font-semibold">Contact Us</h1>
            <p className="text-base text-gray-700 font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam
            </p>
          </div>
          <div className="w-full flex justify-between gap-3">
            <div className="w-2/5 border-solid border-gray-400 border-[1px] rounded-2xl p-5">
              <h1 className="text-black text-2xl font-semibold">Address</h1>
              <p>1328 Oak Ridge Drive, Saint Louis, Missouri</p>
            </div>
            <div className="w-2/5 border-solid border-gray-400 border-[1px] rounded-xl p-5">
              <h1 className="text-black text-2xl font-semibold">Contact</h1>
              <p>313-332-8662 info@email.com</p>
            </div>
          </div>
        </div>
        <div className="w-full rounded-xl bg-gray-100 p-5 flex  flex-col gap-3">
          <h1 className="text-black text-lg font-semibold">Leave a Message</h1>
          <form className="w-full flex flex-col gap-8 pt-5 pr-[130px]">
            <div className="w-full flex gap-10">
              <input className="w-1/2 bg-gray-200" placeholder="Your Name" />
              <input className="w-1/2 bg-gray-200" placeholder="Your Email" />
            </div>
            <div>
              <input className="bg-gray-200" placeholder="Subject" />
            </div>
            <div>
              <input className="bg-gray-200" placeholder="Write a message" />
            </div>
            <button>Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}
