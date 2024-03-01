import Link from "next/link";
import { useSearch } from "@/app/layout";
import { useRouter } from "next/navigation";
import { Search } from "@/assets/Search";
import { Logo } from "@/assets/Logo";
export function BurgerMenu() {
  const { hide, setHide } = useSearch();
  const router = useRouter();
  return (
    <header
      className={`bg-[#50505050] backdrop-blur-lg ${
        hide ? "hidden" : "flex"
      } flex-col p-10 w-full fixed h-screen left-0 top-0 z-[10]`}
    >
      <Link href={"/"}>
        <Logo className="h-9" />
      </Link>
      <div className="w-full flex mt-10 ml-5 justify-start">
        <div className="text-[#3B3C4A] flex flex-col justify-start">
          <ul className="flex flex-col gap-10 text-2xl cursor-pointer text-white">
            <li
              onClick={() => {
                setHide(true), router.push("/");
              }}
            >
              Home
            </li>
            <li
              onClick={() => {
                setHide(true), router.push("/blog");
              }}
            >
              Blog
            </li>
            <li
              onClick={() => {
                setHide(true), router.push("/contact");
              }}
            >
              Contact
            </li>
          </ul>
        </div>
      </div>
      <div className="relative flex  h-9 mt-8 ">
        <input
          className="bg-[#f4f4f5] w-full p-2 pl-4 rounded-[5px] h-10"
          type="text"
          placeholder="search"
        />
        <Search className="h-4 w-4 top-[-10px] right-4 absolute" />
      </div>
      <div
        onClick={() => {
          setHide(true);
        }}
        className="flex justify-center items-center rounded-full absolute right-5 top-5 cursor-pointer  w-10 h-10"
      >
        <p className="w-8 h-8 pointer-cursor">X</p>
      </div>
    </header>
  );
}
