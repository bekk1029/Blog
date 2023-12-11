import { Children } from "react";
import { SinglePost } from "./[id]/page";

export default function Home() {
  return (
    <div className="w-screen  py-90 bg-white m-auto flex justify-center my-10">
      <div className="flex flex-col w-2/3 ">
        <SinglePost />
      </div>
    </div>
  );
}
