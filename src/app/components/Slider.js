import { Btn } from "./Btn";
import { Forward } from "../assets/Forward";
import { Back } from "../assets/Back";
export function Slider() {
  return (
    <div className=" relative flex flex-col bg-white ">
      <img src="Image.png" className="relative w-[1216px] h-[600px]" />
      <div
        className="
     absolute left-5 bottom-14  flex w-[600px] p-[40px] flex-col items-start gap-[24px] rounded-xl bg-gray-100 border-1 border-gray-100 border-solid"
      >
        <div>
          <Btn value="Technology" />
          <div className="text-gray-800 font-semibold text-2xl leading-10">
            Grid system for better Design User Interface
          </div>
        </div>
        <div className="text-gray-400 text-lg">August 20, 2022</div>
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
