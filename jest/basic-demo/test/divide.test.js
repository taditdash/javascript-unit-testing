const divide = require('../src/divide');

test('divides 12 / 3 to equal 4', () => {
  expect(
    divide(12, 3)
  ).toBe(4);
});