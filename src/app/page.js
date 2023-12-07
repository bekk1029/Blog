import { Content } from "./components/Content";

export default function Home() {
  return (
    <div className="w-full h-full px-350 py-90 bg-white m-auto flex justify-center">
      <div className="flex flex-col min-w-[1200px] mb-10 ">
        <Content />
      </div>
    </div>
  );
}
