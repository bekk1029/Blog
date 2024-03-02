import Image from "next/image";
export default function Loading() {
  return (
    <div className="fixed z-[50] flex justify-center items-center w-screen h-screen bg-white">
      <div className="flex flex-col gap-12">
        <div className="flex items-center justify-center w-[172.23px] p-[10px] gap-[17.64px]"></div>
        <div className="flex flex-col gap-4 justify-center items-center ">
          <img
            alt="End xurag bhgui bn"
            className="w-8 h-8 animate-spin"
            src="/loading.png"
          />
          <p className="font-semibold text-base text-[#0F172A]">
            Түр хүлээнэ үү...
          </p>
        </div>
      </div>
    </div>
  );
}
