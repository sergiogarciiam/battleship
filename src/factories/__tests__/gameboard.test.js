import { GameBoard } from "../gameboard";
import { Ship } from "../ship";

const expected = [];

beforeEach(() => {
  expected = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];
});

// 0 = empty // 1 = hit // -1 = miss
test("initialize game board", () => {
  const gameBoard = new GameBoard();

  expect(gameBoard.board).toBe(expected);
});

test("place carrier horizontally", () => {
  const gameBoard = new GameBoard();
  const carrier = new Ship("carrier");

  gameBoard.placeShip(1, 2, carrier, true); // row, colum, ship, isHorizontal

  expected[1][2] = carrier;
  expected[1][3] = carrier;
  expected[1][4] = carrier;
  expected[1][5] = carrier;
  expected[1][6] = carrier;

  expect(gameBoard.board).toBe(expected);
});

test("hit a ship", () => {
  const gameBoard = new GameBoard();
  const carrier = new Ship("carrier");

  gameBoard.placeShip(1, 2, carrier, true);
  gameBoard.receiveAttack(1, 2);

  expected[1][2] = 1;
  expected[1][3] = carrier;
  expected[1][4] = carrier;
  expected[1][5] = carrier;
  expected[1][6] = carrier;

  expect(gameBoard.board[1][2]).toBe(expected);
});

test("no hit a ship", () => {
  const gameBoard = new GameBoard();
  const carrier = new Ship("carrier");

  gameBoard.placeShip(1, 2, carrier, true);
  gameBoard.receiveAttack(2, 2);

  expected[1][2] = carrier;
  expected[1][3] = carrier;
  expected[1][4] = carrier;
  expected[1][5] = carrier;
  expected[1][6] = carrier;
  expected[2][2] = -1;

  expect(gameBoard.board[1][2]).toBe(expected);
});
