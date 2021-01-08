const inp = require("./parentheses");

describe("test suite for true cases", () => {
  test("return true when passed a set of mixed parentheses closed in the correct order", () => {
    expect(inp.f("[{()}]")).toBe(true);
  });
  test("return true passed an empty string", () => {
    expect(inp.f("")).toBe(true);
  });
});

describe("test suite for false cases", () => {
  test("return false when no parentheses are found", () => {
    expect(inp.f("hello world")).toBe(false);
  });
  test("return false when passed a no", () => {
    expect(inp.f(123)).toBe(false);
  });
  test("return false when passed a bool", () => {
    expect(inp.f(true)).toBe(false);
  });
  test("return false when passed a datastructure", () => {
    expect(inp.f([])).toBe(false);
  });
  test("return false when passed an invalid set of parentheses", () => {
    expect(inp.f("[{(}]")).toBe(false);
  });
  test("return false when passed junk string that happens to have parentheses", () => {
    expect(inp.f("hello[]hsduhsd")).toBe(false);
  });
  test("return false when passed unclosed parentheses", () => {
    expect(inp.f("{[(")).toBe(false);
  });
  test("return false when we start with a closing parentheses", () => {
    expect(inp.f("}")).toBe(false);
  });
});
