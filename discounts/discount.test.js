const imports = require("./discount");
const { C, i } = imports;

describe("#Main", () => {
  const methods = new C();

  test("return null if not passed array of objects", () => {
    expect(methods.main(1)).toBe(
      "You must call #main with an array of objects"
    );
    expect(methods.main("hello world")).toBe(
      "You must call #main with an array of objects"
    );
    expect(methods.main({})).toBe(
      "You must call #main with an array of objects"
    );
    expect(methods.main([])).toBe(
      "You must call #main with an array of objects"
    );
  });

  /*test("are final prices correct?", () => {
    expect(methods.main(i)).toBe("£155");
  });*/
});

describe("#getPrice", () => {
  const methods = new C();
  test("return null if passed an invalid input", () => {
    expect(methods.getPrice("hello world")).toBe(null);
    expect(methods.getPrice(["£20", "£30"])).toBe(null);
    expect(methods.getPrice(30)).toBe(null);
    expect(methods.getPrice({ key: "£20" })).toBe(null);
  });

  test("returns correct value as a integer", () => {
    expect(methods.getPrice("£30")).toBe(30);
  });
});
