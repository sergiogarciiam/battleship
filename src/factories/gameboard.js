import { Ship } from "./ship";

export class GameBoard {
  constructor() {
    this.board = new Array(10).fill(0).map(() => new Array(10).fill(0));
  }

  placeShip(row, column, shipType, isHorizontal) {
    const ship = new Ship(shipType);

    if (isHorizontal) {
      const max = column + ship.length;
      for (let index = column; index < max; index++) {
        this.board[row][index] = ship;
      }
    } else {
      const max = row + ship.length;
      for (let index = row; index < max; index++) {
        this.board[index][column] = ship;
      }
    }
  }

  receiveAttack(row, column) {
    let target = this.board[row][column];

    if (typeof target === "object") {
      target.hit();
      this.board[row][column] = 1;
      return true;
    } else if (target === 0) {
      this.board[row][column] = -1;
      return false;
    }
  }

  isGameOver() {
    return this.board.flat().every((cell) => typeof cell !== "object");
  }
}
