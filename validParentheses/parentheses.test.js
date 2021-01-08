const imp = require("./parentheses");

describe("test suite for true cases", () => {
  test("return true when passed a set of mixed parentheses closed in the correct order", () => {
    expect(imp.f("[{()}]")).toBe(true);
  });
  test("return true passed an empty string", () => {
    expect(imp.f("")).toBe(true);
  });
});

describe("test suite for false cases", () => {
  test("return false when no parentheses are found", () => {
    expect(imp.f("hello world")).toBe(false);
  });
  test("return false when passed a no", () => {
    expect(imp.f(123)).toBe(false);
  });
  test("return false when passed a bool", () => {
    expect(imp.f(true)).toBe(false);
  });
  test("return false when passed a datastructure", () => {
    expect(imp.f([])).toBe(false);
  });
  test("return false when passed an invalid set of parentheses", () => {
    expect(imp.f("[{(}]")).toBe(false);
  });
});
