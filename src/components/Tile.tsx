interface propsAttribute {
  status: number;
}

export default function Tile({ status }: propsAttribute) {
  return (
    <div className={`relative rounded-full bg-white w-[100px] aspect-square `}>
      <div
        className={`w-full aspect-square rounded-full ${
          status ? "animate-tile-drop" : null
        } ${status === 1 ? "bg-red" : status === 2 ? "bg-yellow" : null}`}
      ></div>
    </div>
  );
}
