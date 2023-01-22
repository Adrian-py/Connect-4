interface propsAttribute {
  status: number;
}

export default function Tile({ status }: propsAttribute) {
  return (
    <div
      className={`rounded-full bg-white w-[100px] aspect-square ${
        status === 1 ? "bg-red" : status === 2 ? "bg-yellow" : null
      }`}
    ></div>
  );
}
