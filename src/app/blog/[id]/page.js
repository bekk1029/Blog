"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function SinglePost() {
  const { id } = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    if (!id) return;

    const getData = async () => {
      const res = await fetch(`https://dev.to/api/articles/${id}`);
      const jsonData = await res.json();
      setData(jsonData);
    };

    getData();
  }, [id]);

  if (!data) return <>Loading...</>;

  return (
    <div className="w-screen  py-90 bg-white m-auto flex justify-center my-10">
      <div className="flex flex-col justify-center items-center w-2/3">
        <div className="w-3/5 flex flex-col justify-center items-center gap-7">
          <div className="text-gray-400 text-lg">{data.profile_image}</div>
          <div className="text-gray-400 text-lg">{data.name}</div>
          <div className="text-gray-400 text-lg">
            {data.published_timestamp}
          </div>
          <img src={data.cover_image} />
          <div>{data.description}</div>
          <div>{data.description}</div>
          <div>{data.description}</div>
        </div>
      </div>
    </div>
  );
}
