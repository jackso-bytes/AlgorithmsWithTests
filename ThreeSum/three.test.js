const f = require("./three");

describe("pass cases", () => {
  test("simple pass", () => {
    expect(f([1, 2, -2, -1, 3, -3])).toStrictEqual([
      [-1, -2, 3],
      [-3, 1, 2],
    ]);
  });

  test("pass with clusters", () => {
    expect(f([1, 1, 2, 2, -2, -1, 3, -3])).toStrictEqual([
      [-1, -2, 3],
      [-3, 1, 2],
    ]);
  });
});

describe("fail cases", () => {
  test("simple fail", () => {
    expect(f([1, 2, 3, 5])).toStrictEqual([]);
  });
});
