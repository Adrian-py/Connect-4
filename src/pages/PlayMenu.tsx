import Header from "../components/Header";
import Board from "../components/Board";

interface propsAttribute {
  handleChangePhase: () => void;
}

export default function PlayMenu({ handleChangePhase }: propsAttribute) {
  return (
    <main className="relative w-full h-screen flex justify-center items-center flex-col text-center gap-4 bg-white">
      <Header />
      <Board handleChangePhase={handleChangePhase} />
    </main>
  );
}
