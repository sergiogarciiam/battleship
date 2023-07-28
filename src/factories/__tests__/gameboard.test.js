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

describe("initialize + game over", () => {
  test("initialize the game board", () => {
    const gameBoard = new GameBoard();
    expect(gameBoard.board).toEqual(expected);
  });

  test("is game over", () => {
    const gameBoard = new GameBoard();

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
});

describe("place ships", () => {
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
});

describe("hit function", () => {
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

  test("is a right hit", () => {
    const gameBoard = new GameBoard();

    gameBoard.placeShip(1, 2, "carrier", true); // row, colum, ship, isHorizontal

    expect(gameBoard.receiveAttack(1, 2)).toBe(true);
  });

  test("isn't a right hit", () => {
    const gameBoard = new GameBoard();

    gameBoard.placeShip(1, 2, "carrier", true); // row, colum, ship, isHorizontal

    expect(gameBoard.receiveAttack(2, 2)).toBe(false);
  });
});

describe("generate random game board", () => {
  test("should generate a valid game board with ships placed", () => {
    const gameBoard = new GameBoard();
    gameBoard.generateRandomBoard();

    // Check if all ships are placed correctly on the board
    const shipsTypes = [
      "carrier",
      "battleship",
      "cruiser",
      "submarine",
      "destroyer",
    ];
    const expectedShipCounts = {
      carrier: 5,
      battleship: 4,
      cruiser: 3,
      submarine: 3,
      destroyer: 2,
    };

    for (const shipType of shipsTypes) {
      let shipCount = 0;
      for (let row = 0; row < 10; row++) {
        for (let col = 0; col < 10; col++) {
          const cell = gameBoard.board[row][col];
          if (typeof cell === "object" && cell.type === shipType) {
            shipCount += 1;
          }
        }
      }

      expect(shipCount).toBe(expectedShipCounts[shipType]);
    }

    // Ensure that the board contains only ships and empty cells
    for (let row = 0; row < 10; row++) {
      for (let col = 0; col < 10; col++) {
        const cell = gameBoard.board[row][col];
        expect(typeof cell === "object" || cell === 0).toBe(true);
      }
    }
  });
});
