import { Content } from "../components/Content";

export default function Home() {
  return (
    <div className="w-screen  py-90 bg-white m-auto flex justify-center">
      <div className="flex flex-col w-3/5 mb-10 ">
        <Content />
      </div>
    </div>
  );
}
