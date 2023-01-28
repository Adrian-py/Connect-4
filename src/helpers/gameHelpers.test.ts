import { handleCheckBoard } from "./gameHelpers";

describe("Test Board Check", () => {
  it("Test 1: check draw", () => {
    const testBoard = [
      [1, 2, 1, 2, 1],
      [1, 2, 1, 1, 1],
      [2, 1, 1, 2, 1],
      [1, 2, 2, 2, 1],
      [2, 2, 2, 1, 1],
    ];
    expect(handleCheckBoard(testBoard, 0, 0, 1)).toBe("draw");
  });

  it("Test 2: check red win", () => {
    const testBoard = [
      [0, 1, 1, 2, 1],
      [1, 1, 1, 1, 1],
      [2, 1, 1, 2, 1],
      [1, 1, 2, 2, 1],
      [2, 2, 2, 1, 1],
    ];
    expect(handleCheckBoard(testBoard, 0, 1, 1)).toBe("win");
  });

  it("Test 3: check yellow win", () => {
    const testBoard = [
      [0, 0, 0, 2, 1],
      [0, 0, 2, 1, 1],
      [0, 1, 2, 2, 1],
      [0, 1, 2, 2, 1],
      [0, 0, 2, 1, 1],
    ];
    expect(handleCheckBoard(testBoard, 4, 2, 2)).toBe("win");
  });
});
