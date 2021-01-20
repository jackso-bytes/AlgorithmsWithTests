const f = require("./two");

describe("pass cases", () => {
  test("when passed an arr that contains two nums that add to target return their indices", () => {
    expect(f([1, 2, 3, 5, 6], 5)).toStrictEqual([1, 2]);
  });
});
