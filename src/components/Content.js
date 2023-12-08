import { Slider } from "./Slider";
import { Trend } from "./Trend";
import { BlogPost } from "./BlogPost";
export function Content() {
  return (
    <div className="w-full flex flex-col items-center gap-[100px]">
      <Slider />
      <Trend />
      <BlogPost />
    </div>
  );
}
