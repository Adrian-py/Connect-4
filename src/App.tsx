import { useState } from "react";

import StartMenu from "./pages/StartMenu";
import PlayMenu from "./pages/PlayMenu";
import EndMenu from "./pages/EndMenu";

function App() {
  const [gamePhase, setGamePhase] = useState<number>(1);
  const [newWinner, setNewWinner] = useState<string>("");
  const [redScore, setRedScore] = useState<number>(0);
  const [yellowScore, setYellowScore] = useState<number>(0);

  // Handle changing game phase
  const handleChangePhase = (winner?: number) => {
    switch (gamePhase) {
      case 1:
        setGamePhase(gamePhase + 1);
        break;
      case 2:
        // Change new winner status
        setNewWinner(winner === -1 ? "Draw" : winner === 1 ? "Red" : "Yellow");

        // Change scores
        if (winner === 1) setRedScore(redScore + 1);
        else if (winner === 2) setYellowScore(yellowScore + 1);

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
        <PlayMenu
          handleChangePhase={handleChangePhase}
          redScore={redScore}
          yellowScore={yellowScore}
        />
      ) : (
        <EndMenu newWinner={newWinner} handleChangePhase={handleChangePhase} />
      )}
    </>
  );
}

export default App;
