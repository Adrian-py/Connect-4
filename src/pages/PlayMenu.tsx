import Header from "../components/Header";
import Board from "../components/Board";

interface propsAttribute {
  handleChangePhase: () => void;
  redScore: number;
  yellowScore: number;
}

export default function PlayMenu({
  handleChangePhase,
  redScore,
  yellowScore,
}: propsAttribute) {
  return (
    <main className="relative w-full h-screen flex justify-center items-center flex-col text-center gap-4 bg-gradient-to-tr from-white to-light-blue">
      <Header redScore={redScore} yellowScore={yellowScore} />
      <Board handleChangePhase={handleChangePhase} />
    </main>
  );
}
