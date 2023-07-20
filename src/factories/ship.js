export class Ship {
  constructor(type) {
    this._length = this.getLengthFromType(type);
    this._hits = 0;
    this._isSunk = false;
  }

  hit() {
    this._hits += 1;
    if (this._hits >= this._length) this._isSunk = true;
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

  get length() {
    return this._length;
  }

  get hits() {
    return this._hits;
  }

  get isSunk() {
    return this._isSunk;
  }
}
