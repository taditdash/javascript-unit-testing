const add = require('../src/add');

test('adds 8 + 90 to equal 98', () => {
  expect(
    add(8, 90)
  ).toBe(98);
});