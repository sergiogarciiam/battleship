import { Ship } from "./ship";

export class GameBoard {
  constructor() {
    this.board = new Array(10).fill(0).map(() => new Array(10).fill(0));
  }

  placeShip(row, colum, shipType, isHorizontal) {
    const ship = new Ship(shipType);

    if (isHorizontal) {
      const max = colum + ship.length;
      for (let index = colum; index < max; index++) {
        this.board[row][index] = ship;
      }
    } else {
      const max = row + ship.length;
      for (let index = row; index < max; index++) {
        this.board[index][colum] = ship;
      }
    }
  }

  receiveAttack(row, colum) {
    let target = this.board[row][colum];

    if (typeof target === "object") {
      target.hit();
      this.board[row][colum] = 1;
    } else if (target === 0) {
      this.board[row][colum] = -1;
    }
  }

  isGameOver() {
    return this.board.flat().every((cell) => typeof cell !== "object");
  }
}
