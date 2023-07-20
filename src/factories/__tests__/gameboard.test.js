import { GameBoard } from "../gameboard";
import { Ship } from "../ship";

let expected = [];

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

test("initialize the game board", () => {
  const gameBoard = new GameBoard();

  expect(gameBoard.board).toEqual(expected);
});

test("place a carrier ship horizontally", () => {
  const gameBoard = new GameBoard();
  const carrier = new Ship("carrier");

  gameBoard.placeShip(1, 2, "carrier", true); // row, colum, ship, isHorizontal

  expected[1][2] = carrier;
  expected[1][3] = carrier;
  expected[1][4] = carrier;
  expected[1][5] = carrier;
  expected[1][6] = carrier;

  expect(gameBoard.board).toEqual(expected);
});

test("place a carrier ship vertically", () => {
  const gameBoard = new GameBoard();
  const carrier = new Ship("carrier");

  gameBoard.placeShip(1, 2, "carrier", false); // row, colum, ship, isHorizontal

  expected[1][2] = carrier;
  expected[2][2] = carrier;
  expected[3][2] = carrier;
  expected[4][2] = carrier;
  expected[5][2] = carrier;

  expect(gameBoard.board).toEqual(expected);
});

test("no hit a ship and test no game over", () => {
  const gameBoard = new GameBoard();
  const carrier = new Ship("carrier");

  gameBoard.placeShip(1, 2, "carrier", true); // row, colum, ship, isHorizontal

  gameBoard.receiveAttack(2, 2); // row, colum

  expected[1][2] = carrier;
  expected[1][3] = carrier;
  expected[1][4] = carrier;
  expected[1][5] = carrier;
  expected[1][6] = carrier;
  expected[2][2] = -1;

  expect(gameBoard.board).toEqual(expected);
  expect(gameBoard.isGameOver()).toBe(false);
});

test("hit once a carrier ship once and test no game over", () => {
  const gameBoard = new GameBoard();
  const carrier = new Ship("carrier");

  gameBoard.placeShip(1, 2, "carrier", true); // row, colum, ship, isHorizontal
  carrier.hit();

  gameBoard.receiveAttack(1, 2); // row, colum

  expected[1][2] = 1;
  expected[1][3] = carrier;
  expected[1][4] = carrier;
  expected[1][5] = carrier;
  expected[1][6] = carrier;

  expect(gameBoard.board).toEqual(expected);
});

test("hit twice a carrier ship once and test no game over", () => {
  const gameBoard = new GameBoard();
  const carrier = new Ship("carrier");

  gameBoard.placeShip(1, 2, "carrier", true); // row, colum, ship, isHorizontal
  carrier.hit();
  carrier.hit();

  gameBoard.receiveAttack(1, 2); // row, colum
  gameBoard.receiveAttack(1, 3); // row, colum

  expected[1][2] = 1;
  expected[1][3] = 1;
  expected[1][4] = carrier;
  expected[1][5] = carrier;
  expected[1][6] = carrier;

  expect(gameBoard.board).toEqual(expected);
});

test("test game over", () => {
  const gameBoard = new GameBoard();
  const carrier = new Ship("carrier");

  gameBoard.placeShip(1, 2, "carrier", true); // row, colum, ship, isHorizontal

  gameBoard.receiveAttack(1, 2); // row, colum
  gameBoard.receiveAttack(1, 3);
  gameBoard.receiveAttack(1, 4);
  gameBoard.receiveAttack(1, 5);
  gameBoard.receiveAttack(1, 6);

  expected[1][2] = 1;
  expected[1][3] = 1;
  expected[1][4] = 1;
  expected[1][5] = 1;
  expected[1][6] = 1;

  expect(gameBoard.board).toEqual(expected);
  expect(gameBoard.isGameOver()).toBe(true);
});
