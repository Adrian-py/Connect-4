import { useEffect, useState } from "react";
import Tile from "./Tile";

import { handleCheckBoard } from "../helpers/gameHelpers";
import board from "../data/board";

interface propsAttribute {
  handleChangePhase: (winner?: number) => void;
}

export default function Board({ handleChangePhase }: propsAttribute) {
  const [board, setBoard] = useState<number[][]>([]);
  const [currentTurn, setCurrentTurn] = useState<number>(1);

  const handleDropTile = (col: number) => {
    let boardCopy = board;

    if (boardCopy[col][0]) return;

    for (let i = 4; i >= 0; i--) {
      if (!boardCopy[col][i]) {
        boardCopy[col][i] = currentTurn;

        if (handleCheckBoard(board, col, i, currentTurn) === "win") {
          handleChangePhase(currentTurn);
          boardCopy = [...initialBoard];
        }

        break;
      }
    }

    setBoard([...boardCopy]);

    if (currentTurn === 1) setCurrentTurn(2);
    else setCurrentTurn(1);
  };

  useEffect(() => {
    console.log("run", initialBoard);
    setBoard([...initialBoard]);
  }, []);

  return (
    <div className="text-text">
      <div className="w-fit h-fit px-5 grid grid-cols-5 bg-blue rounded-[25px]">
        {board.map((col, i) => {
          return (
            <div
              className="py-6 px-1 grid grid-rows-[repeat(5, 1fr)] gap-2 transition-all duration-100 ease-in-out hover:bg-gray-500/60 cursor-pointer"
              onClick={() => handleDropTile(i)}
              key={i}
            >
              {col.map((tile, j) => {
                return <Tile key={i + j} status={tile} />;
              })}
            </div>
          );
        })}
      </div>
      <h2 className="mt-4 font-bold text-[1.75rem]">Blue's turn</h2>
    </div>
  );
}
