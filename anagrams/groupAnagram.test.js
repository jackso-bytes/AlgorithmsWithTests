const imp = require('./groupAnagram');

test('hello world', () => {
  expect(imp.f(imp.i)).toStrictEqual([
    ['eat', 'tea', 'ate'],
    ['tan', 'nat'],
    ['bat'],
  ]);
});
