import hello from "./app";

test("hello", () => {
  expect(hello()).toEqual("hi");
});
