export class Player {
  constructor(number, type, board) {
    this.number = number;
    this.type = type;
    this.board = board;
  }

  getCoordinates(board) {
    let boardPossibleHits = [];

    for (let row = 0; row < 10; row++) {
      for (let column = 0; column < 10; column++) {
        if (board[row][column] !== 1 && board[row][column] !== -1) {
          boardPossibleHits.push([row, column]);
        }
      }
    }

    let randomOption = Math.floor(Math.random() * boardPossibleHits.length);

    return boardPossibleHits[randomOption];
  }

  getHorizontal() {
    return Math.random() < 0.5;
  }
}
