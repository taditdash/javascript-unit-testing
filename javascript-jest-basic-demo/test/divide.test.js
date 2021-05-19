const divide = require('../src/divide');

test('divides 12 / 3 to equal 4', () => {
  expect(
    divide(12, 3)
  ).toBe(4);
});

test('divides 19 / 0 to equal infinity', () => {
  expect(
    divide(19, 0)
  ).toBe(Infinity);
});

test('divides -18 / -6 to equal 3', () => {
  expect(
    divide(-18, -6)
  ).toBe(3);
});

test('divides 1 / Infinity to equal 0', () => {
  expect(
    divide(1, Infinity)
  ).toBe(0);
});