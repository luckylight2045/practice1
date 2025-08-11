const sum = require('./sum.js')

test('adds 1 + 2 and see if it is equal to 3', () => {
  expect(sum(1, 2)).toBe(3)
})
