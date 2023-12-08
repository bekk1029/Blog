"use client";

import { useEffect, useState } from "react";
import { Forward } from "../assets/Forward";
import { Back } from "../assets/Back";
import { SliderCard } from "./SliderCard";
export function Slider() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("https://dev.to/api/articles?top=4&per_page=5");
      const jsonData = await res.json();
      setData(jsonData);
    };

    getData();
  }, []);

  console.log(data);

  return (
    <div className=" flex flex-col bg-white w-[1275px] overflow-hidden ">
      <div className="flex w-[500%] ">
        {data.map((blog) => {
          return <SliderCard key={blog.id} blog={blog} />;
        })}
      </div>
      <div className="w-full flex justify-end items-center gap-3 mt-3">
        <div className="flex justify-center items-center">
          <Back />
        </div>
        <div className="flex justify-center items-center ">
          <Forward />
        </div>
      </div>
    </div>
  );
}
