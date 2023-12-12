import { FB } from "@/assets/Fb";
import { IG } from "@/assets/IG";
import { In } from "@/assets/LN";
import { Tw } from "@/assets/Tw";
import { Logo } from "@/assets/Logo";
import Link from "next/link";

export function Footer() {
  return (
    <div className="flex flex-col items-start pt-[64px] gap-[25px] ">
      <div className="grid grid-cols-3 items-start gap-8">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col justify-start gap-3">
            <h1 className="text-black text-lg font-medium">About</h1>
            <p className="text-gray-600 text-base font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
          </div>
          <div className="flex flex-col items-start gap-1 text-base font-normal text-gray-700">
            <div>Email : info@jstemplate.net</div>
            <div>Phone : 880 123 456 789</div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex flex-col justify-center items-start gap-2 font-normal text-base text-gray-800">
            <div className="flex items-start gap-4  cursor-pointer">
              <Link href="/">Home</Link>
            </div>
            <div className="flex items-center gap-4 cursor-pointer ">
              <Link href="/blog">Blog</Link>
            </div>
            <div className="flex text-center items-center gap-4 cursor-pointer ">
              Contact
            </div>
          </div>
        </div>
        <div className="flex justify-start  items-start gap-3">
          <FB />
          <In />
          <IG />
          <Tw />
        </div>
      </div>
      <div className="w-full flex justify-between gap-16 border-t-[1px] border-gray-600 border-solid ">
        <div className="mt-4">
          <Logo />
          <div>© All Rights Reserved.</div>
        </div>
        <div className="flex items-center gap-2 text-base font-normal text-gray-700">
          <div>Terms of Use</div>
          <div>|</div>
          <div>Privacy Policy</div>
          <div>|</div>
          <div>Cookie Policy</div>
        </div>
      </div>
    </div>
  );
}
