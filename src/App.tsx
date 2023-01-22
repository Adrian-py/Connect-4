import { useState } from "react";

import StartMenu from "./pages/StartMenu";
import PlayMenu from "./pages/PlayMenu";
import EndMenu from "./pages/EndMenu";

function App() {
  const [gamePhase, setGamePhase] = useState<number>(1);
  const [newWinner, setNewWinner] = useState<string>("");
  const [lastWinner, setLastWinner] = useState<string>("-");

  const handleChangePhase = (winner?: number) => {
    switch (gamePhase) {
      case 1:
        setGamePhase(gamePhase + 1);
        break;
      case 2:
        setNewWinner(winner === 1 ? "red" : "yellow");
        setGamePhase(gamePhase + 1);
        break;
      case 3:
        setLastWinner(newWinner);
        setGamePhase(1);
        break;
    }
  };

  return (
    <>
      {gamePhase === 1 ? (
        <StartMenu handleChangePhase={handleChangePhase} />
      ) : gamePhase === 2 ? (
        <PlayMenu
          lastWinner={lastWinner}
          handleChangePhase={handleChangePhase}
        />
      ) : (
        <EndMenu newWinner={newWinner} handleChangePhase={handleChangePhase} />
      )}
    </>
  );
}

export default App;
