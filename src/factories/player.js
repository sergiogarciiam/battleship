export class Player {
  constructor() {}

  getCoordinates(board) {
    let boardPossibleHits = [];

    for (let row = 0; row < 10; row++) {
      for (let colum = 0; colum < 10; colum++) {
        if (board[row][colum] !== 1 && board[row][colum] !== -1) {
          boardPossibleHits.push([row, colum]);
        }
      }
    }

    let randomOption = Math.floor(Math.random() * boardPossibleHits.length);

    return boardPossibleHits[randomOption];
  }
}
