import { GameBoard } from "../gameboard";
import { Player } from "../player";

describe("create players", () => {
  test("number 0, type human, turn true", () => {
    const board = new GameBoard();
    const player = new Player(0, "human", board, true);

    expect(player.number).toBe(0);
    expect(player.type).toEqual("human");
    expect(player.board).toEqual(board);
    expect(player.isTurn).toBe(true);
  });

  test("number 1, type bot, turn false", () => {
    const board = new GameBoard();
    const player = new Player(1, "bot", board, false);

    expect(player.number).toBe(1);
    expect(player.type).toEqual("bot");
    expect(player.board).toEqual(board);
    expect(player.isTurn).toBe(false);
  });
});

describe("get coordinates", () => {
  test("only one possible", () => {
    const board = [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    ];
    const bot = new Player(1, "bot", board, true);

    const coordinates = bot.getCoordinates(board);
    const row = coordinates[0];
    const column = coordinates[1];

    expect(coordinates).toEqual([5, 0]);

    expect(board[row][column]).not.toBe(-1);
    expect(board[row][column]).not.toBe(1);
    expect(row).toBeLessThan(10);
    expect(column).toBeLessThan(10);
  });

  test("best move next to hit", () => {
    const board = [
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, , 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];
    const bot = new Player(1, "bot", board, true);

    const coordinates = bot.getCoordinates(board);
    const row = coordinates[0];
    const column = coordinates[1];

    expect(
      areArraysEqual(coordinates, [0, 1]) || areArraysEqual(coordinates, [1, 0])
    ).toBe(true);

    expect(coordinates).not.toBe(-1);
    expect(coordinates).not.toBe(1);
    expect(row).toBeLessThan(10);
    expect(column).toBeLessThan(10);
  });
});

function areArraysEqual(array1, array2) {
  return JSON.stringify(array1) === JSON.stringify(array2);
}
