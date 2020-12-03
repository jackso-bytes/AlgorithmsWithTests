const imports = require('./app');

test('Finds first unique char', () => {
  expect(imports.f(imports.i)).toBe(9);
});
