const f = require("./search");

describe("pass cases", () => {
  test("if no found return index", () => {
    expect(f(1, [1, 2, 3, 7, 10])).toBe(0);
  });

  test("if no not found return index", () => {
    expect(f(5, [1, 2, 4, 6, 100])).toBe(3);
  });
});

describe("fail cases", () => {
  test("f passed wrong params return null", () => {
    expect(f(["strings", true, 100], false)).toBe(null);
  });
});

describe("edge cases", () => {});
