import Link from "next/link";
import { useSearch } from "@/app/layout";
import { BurgerMenu } from "../BurgerMenu";
import { Logo } from "@/assets/Logo";
import { Search } from "@/assets/Search";

export function Navbar() {
  const { search, setSearch, hide, setHide } = useSearch();
  const getSearchText = (event) => {
    setSearch(event.target.value);
    console.log(search);
  };

  return (
    <header className="md:py-8 p-[20px] flex w-full m-auto max-w-[1216px] gap-[118px] h-9 items-center justify-between">
      <Link href={"/"}>
        <Logo className="h-9 pl-3" />
      </Link>
      <div className="flex md:w-1/2 w-fit gap-[21px] justify-between items-center">
        <ul className="md:flex hidden  gap-[40px] justify-center items-center">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/blog"}>Blog</Link>
          </li>
          <li>
            <Link href={"/contact"}>Contact</Link>
          </li>
        </ul>
        <div className="hidden md:flex block  relative h-9 ">
          <input
            onChange={getSearchText}
            className="bg-[#f4f4f5] p-2 pl-4 rounded-[5px]"
            type="text"
            placeholder="search"
            value={search}
          />
          <img
            alt="End xurag bhgui bn"
            className="w-3 h-3 top-3 right-4 absolute"
            src="/magGlass.png"
          />
        </div>
        <img
          alt="End xurag bhgui bn"
          onClick={() => {
            setHide(false);
          }}
          className="w-8 h-8 md:hidden cursor-pointer"
          src="/icon_burger.png"
        />
        <BurgerMenu />
        <div></div>
      </div>
    </header>
  );
}
