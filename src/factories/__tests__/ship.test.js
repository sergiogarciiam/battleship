import { Ship } from "../ship";

describe("carrier", () => {
  let ship;

  beforeEach(() => {
    ship = new Ship("carrier");
  });

  test("should have the correct initial properties", () => {
    expect(ship.length).toBe(5);
    expect(ship.hits).toBe(0);
    expect(ship.isSunk).toBe(false);
  });

  test("should update hits when hit() method is called", () => {
    ship.hit();
    expect(ship.hits).toBe(1);

    ship.hit();
    ship.hit();
    expect(ship.hits).toBe(3);
  });

  test("should set isSunk to true when hits equal to length", () => {
    ship.hit();
    ship.hit();
    ship.hit();
    ship.hit();
    ship.hit();

    expect(ship.isSunk).toBe(true);

    ship.hit();
    expect(ship.isSunk).toBe(true);
  });
});

describe("battleship", () => {
  let ship;

  beforeEach(() => {
    ship = new Ship("battleship");
  });

  test("should have the correct initial properties", () => {
    expect(ship.length).toBe(4);
    expect(ship.hits).toBe(0);
    expect(ship.isSunk).toBe(false);
  });

  test("should update hits when hit() method is called", () => {
    ship.hit();
    expect(ship.hits).toBe(1);

    ship.hit();
    ship.hit();
    expect(ship.hits).toBe(3);
  });

  test("should set isSunk to true when hits equal to length", () => {
    ship.hit();
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.isSunk).toBe(true);

    ship.hit();
    expect(ship.isSunk).toBe(true);
  });
});

describe("cruiser", () => {
  let ship;

  beforeEach(() => {
    ship = new Ship("cruiser");
  });

  test("should have the correct initial properties", () => {
    expect(ship.length).toBe(3);
    expect(ship.hits).toBe(0);
    expect(ship.isSunk).toBe(false);
  });

  test("should update hits when hit() method is called", () => {
    ship.hit();
    expect(ship.hits).toBe(1);

    ship.hit();
    ship.hit();
    expect(ship.hits).toBe(3);
  });

  test("should set isSunk to true when hits equal to length", () => {
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.isSunk).toBe(true);

    ship.hit();
    expect(ship.isSunk).toBe(true);
  });
});

describe("submarine", () => {
  let ship;

  beforeEach(() => {
    ship = new Ship("submarine");
  });

  test("should have the correct initial properties", () => {
    expect(ship.length).toBe(3);
    expect(ship.hits).toBe(0);
    expect(ship.isSunk).toBe(false);
  });

  test("should update hits when hit() method is called", () => {
    ship.hit();
    expect(ship.hits).toBe(1);

    ship.hit();
    ship.hit();
    expect(ship.hits).toBe(3);
  });

  test("should set isSunk to true when hits equal to length", () => {
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.isSunk).toBe(true);

    ship.hit();
    expect(ship.isSunk).toBe(true);
  });
});

describe("destroyer", () => {
  let ship;

  beforeEach(() => {
    ship = new Ship("destroyer");
  });

  test("should have the correct initial properties", () => {
    expect(ship.length).toBe(2);
    expect(ship.hits).toBe(0);
    expect(ship.isSunk).toBe(false);
  });

  test("should update hits when hit() method is called", () => {
    ship.hit();
    expect(ship.hits).toBe(1);

    ship.hit();
    ship.hit();
    expect(ship.hits).toBe(3);
  });

  test("should set isSunk to true when hits equal to length", () => {
    ship.hit();
    ship.hit();
    expect(ship.isSunk).toBe(true);

    ship.hit();
    expect(ship.isSunk).toBe(true);
  });
});
