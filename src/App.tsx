import { useState } from "react";

import StartMenu from "./pages/StartMenu";
import PlayMenu from "./pages/PlayMenu";
import EndMenu from "./pages/EndMenu";

function App() {
  const [gamePhase, setGamePhase] = useState<number>(1);
  const [newWinner, setNewWinner] = useState<string>("");
  const [blueScore, setBlueScore] = useState<number>(0);
  const [yellowScore, setYellowScore] = useState<number>(0);

  const handleChangePhase = (winner?: number) => {
    switch (gamePhase) {
      case 1:
        setGamePhase(gamePhase + 1);
        break;
      case 2:
        setNewWinner(winner === 1 ? "Red" : "Yellow");
        setGamePhase(gamePhase + 1);
        break;
      case 3:
        setGamePhase(1);
        break;
    }
  };

  return (
    <>
      {gamePhase === 1 ? (
        <StartMenu handleChangePhase={handleChangePhase} />
      ) : gamePhase === 2 ? (
        <PlayMenu handleChangePhase={handleChangePhase} />
      ) : (
        <EndMenu newWinner={newWinner} handleChangePhase={handleChangePhase} />
      )}
    </>
  );
}

export default App;
