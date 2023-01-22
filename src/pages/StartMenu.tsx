interface propsAttribute {
  handleChangePhase: () => void;
}

export default function StartMenu({ handleChangePhase }: propsAttribute) {
  return (
    <main className="w-full h-screen flex justify-center items-center flex-col text-center gap-4 bg-white">
      <h1 className="font-bold font-pacifico text-[5rem] text-text">
        Connect 4
      </h1>
      <button
        onClick={handleChangePhase}
        className="w-fit px-[4rem] py-[0.75rem] bg-blue text-white font-montserrat border-2 rounded-3xl text-[2rem] hover:bg-transparent hover:border-blue hover:text-blue active:scale-90 transition-all duration-150 ease-in-out "
      >
        play
      </button>
    </main>
  );
}