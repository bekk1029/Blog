import { Children } from "react";
import { Contact } from "./[id]/page";

export default function Home() {
  return (
    <div className="w-screen  py-90 bg-white m-auto flex justify-center my-10">
      <div className="flex flex-col w-2/3 ">
        <Contact />
      </div>
    </div>
  );
}
