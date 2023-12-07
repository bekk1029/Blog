import { Slider } from "./Slider";
import { Trend } from "./Trend";
export function Content() {
  return (
    <div className="flex flex-col items-center gap-[100px]">
      <Slider />
      <Trend />
    </div>
  );
}
