interface propsAttribute {
  newWinner: string;
  handleChangePhase: () => void;
}

export default function EndMenu({
  newWinner,
  handleChangePhase,
}: propsAttribute) {
  return (
    <main className="w-full h-screen flex justify-center items-center flex-col text-center gap-4 bg-gradient-to-tr from-white to-light-blue">
      <h1 className="font-bold font-pacifico text-[5rem] text-text">
        {newWinner === "Draw" ? (
          "It's a draw!"
        ) : (
          <span>
            <span className={newWinner === "Red" ? "text-red" : "text-yellow"}>
              {newWinner}
            </span>{" "}
            wins!
          </span>
        )}
      </h1>
      <button
        onClick={handleChangePhase}
        className="w-fit px-[4rem] py-[0.75rem] bg-blue text-white font-montserrat border-2 rounded-3xl text-[2rem] hover:bg-transparent hover:border-blue hover:text-blue active:scale-90 transition-all duration-150 ease-in-out "
      >
        play again
      </button>
    </main>
  );
}
