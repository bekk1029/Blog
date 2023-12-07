import { Logo } from "../assets/Logo";
import { Search } from "../assets/Search";
export function Navbar() {
  return (
    <div className="flex gap-[130px] justify-between w-full items-center">
      <Logo />
      <div className="flex justify-center items-center gap-20 font-normal text-base text-gray-800">
        <div className="flex items-center gap-4 ">Home</div>
        <div className="flex items-center gap-4 ">Blog</div>
        <div className="flex items-center gap-4 ">Contact</div>
      </div>
      <div className="bg-gray-300 flex  items-center p-1 gap-2 rounded-md ">
        <input placeholder="Search" className="bg-gray-300 w-40" />
        <Search />
      </div>
    </div>
  );
}
