interface propsTypes {
  lastWinner: string;
}

export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full px-[2.75rem] py-[1.75rem] flex justify-between items-center font-montserrat text-text">
      <h1 className="font-bold font-pacifico text-[3rem] text-text">
        Connect 4
      </h1>
      <p className="text-[1.75rem]">
        Current Score: <span className="pl-4 font-bold"></span>
      </p>
    </header>
  );
}
