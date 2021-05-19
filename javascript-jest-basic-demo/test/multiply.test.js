const multiply = require('../src/multiply');

test('muliplies 10 * 9 to equal 90', () => {
  expect(
    multiply(10, 9)
  ).toBe(90);
});