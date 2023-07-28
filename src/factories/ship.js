export class Ship {
  constructor(type) {
    this.length = this.getLengthFromType(type);
    this.hits = 0;
    this.isSunk = false;
  }

  hit() {
    this.hits += 1;
    if (this.hits >= this.length) this.isSunk = true;
  }

  getLengthFromType(type) {
    return {
      carrier: 5,
      battleship: 4,
      cruiser: 3,
      submarine: 3,
      destroyer: 2,
    }[type];
  }
}
