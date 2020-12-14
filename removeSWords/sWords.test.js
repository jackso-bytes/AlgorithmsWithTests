const { expect } = require("@jest/globals");
const imports = require("./sWords");
const { f } = imports;

test("f removes all s words", () => {
  const i = ["Green", "sable", "sinatra"];
  expect(f(i)).not.toContain("sable");
  expect(f(i)).not.toContain("sinatra");
});

test("f removes words regardless of case", () => {
  const i = ["Sapphire", "serious"];
  expect(f(i)).not.toContain("Sapphire");
});

test("f leaves words that don't begin with s", () => {
  const i = ["sinatra", "weird", "curious"];
  expect(f(i)).toContain(["weird", "curious"]);
});
