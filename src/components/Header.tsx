interface propsTypes {
  redScore: number;
  yellowScore: number;
}

export default function Header({ redScore, yellowScore }: propsTypes) {
  return (
    <header className="absolute top-0 left-0 w-full px-[2.75rem] py-[1.75rem] flex justify-between items-center font-montserrat text-text">
      <h1 className="font-bold font-pacifico text-[3rem] text-text">
        Connect 4
      </h1>
      <p className="flex items-center gap-4 text-[1.5rem]">
        Red
        <span className="text-[2rem] font-bold text-red"> {redScore} </span>-
        <span className="text-[2rem] font-bold text-yellow">
          {" "}
          {yellowScore}{" "}
        </span>
        Yellow
      </p>
    </header>
  );
}
