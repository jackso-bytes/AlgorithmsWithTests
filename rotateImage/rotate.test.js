let f = require("./rotate");

describe("", () => {
  test("basic test for if matrix has been rotated 90 deg", () => {
    expect(
      f([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ])
    ).toStrictEqual([
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3],
    ]);
  });
});
