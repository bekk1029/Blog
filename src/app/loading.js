import Image from "next/image";
export default function Loading() {
  return (
    <div className="fixed z-[50] flex justify-center items-center w-screen h-screen bg-white">
      <div className="flex flex-col gap-12">
        <div className="flex items-center justify-center w-[172.23px] p-[10px] gap-[17.64px]">
          <Image
            alt="End xurag bhgui bn"
            className="h-[43.84px]"
            src="/logo.png"
          />
          <Image
            alt="End xurag bhgui bn"
            className="h-[31.13px]"
            src="/geld.png"
          />
        </div>
        <div className="flex flex-col gap-4 justify-center items-center ">
          <Image
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
