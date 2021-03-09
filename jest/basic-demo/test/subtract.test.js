const subtract = require('../src/subtract');

test('subtracts (-8) - 7 to equal -1', () => {
  expect(
    subtract(-8, -7)
  ).toBe(-1);
});