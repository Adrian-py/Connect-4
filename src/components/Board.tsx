import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Tile from "./Tile";

import { handleCheckBoard } from "../helpers/gameHelpers";

interface propsAttribute {
  handleChangePhase: (winner?: number) => void;
}

export default function Board({ handleChangePhase }: propsAttribute) {
  const emptyBoard = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ];
  const [board, setBoard] = useState<number[][]>([]);
  const [currentTurn, setCurrentTurn] = useState<number>(1);

  // Handle tile drop when user click a col
  const handleDropTile = (col: number) => {
    let boardCopy = board;

    if (boardCopy[col][0]) return;

    for (let i = 4; i >= 0; i--) {
      if (!boardCopy[col][i]) {
        boardCopy[col][i] = currentTurn;

        let boardStatus = handleCheckBoard(board, col, i, currentTurn);

        if (boardStatus === "win") {
          handleChangePhase(currentTurn);
        } else if (boardStatus === "draw") {
          handleChangePhase(-1);
        }

        break;
      }
    }

    setBoard(boardCopy);

    // Change current turn
    if (currentTurn === 1) setCurrentTurn(2);
    else setCurrentTurn(1);
  };

  useEffect(() => {
    setBoard(emptyBoard);
  }, []);

  return (
    <motion.div
      className="text-text"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="w-fit h-fit px-5 grid grid-cols-5 bg-blue rounded-[25px]">
        {board.map((col, i) => {
          return (
            <div
              className="relative py-6 px-1 grid grid-rows-[repeat(5, 1fr)] gap-2 transition-all duration-100 ease-in-out hover:bg-gray-500/60 cursor-pointer"
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
      <h2 className="mt-4 font-bold text-[1.75rem]">
        {currentTurn === 1 ? "Red" : "Yellow"}'s turn
      </h2>
    </motion.div>
  );
}
