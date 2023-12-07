export function Btn(props) {
  return (
    <div className="flex w-fit px-4 py-2 justify-center items-center rounded-md bg-blue-700 text-white">
      {props.value}
    </div>
  );
}
