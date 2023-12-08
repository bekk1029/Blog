export function Btn(props) {
  return (
    <div className="flex w-fit px-2 py-1 justify-center items-center rounded-md bg-blue-600 text-white">
      {props.value}
    </div>
  );
}
