// test/Rectangle.test.js
const assert = require('assert');
const Rectangle = require('../Rectangle')
const square = new Rectangle(2, 2)
const rectangle = new Rectangle(10, 4)
const isSquare = square.isSquare()
const isNotSquare = rectangle.isSquare();
const getPerimeter = rectangle.getPerimeter();
const getArea = rectangle.getArea();

// tests the square function: true or false
describe('isSquare', () => {
  it('return true if object is a square', () => {
    assert.strictEqual(isSquare, true);
  });

  it('return false if object is not a square', () => {
    assert.strictEqual(isNotSquare, false);
  });
});
// tests the getPerimeter function: if it makes the calculation
describe('getPerimeter', () => {
  it('return 2 times the length + 2 times the width', () => {
    assert.strictEqual(getPerimeter, 28);
  });
});

// tests the getArea function: if it makes the calculation
describe('getArea', () => {
  it('return length multiplied by width', () => {
    assert.strictEqual(getArea, 40);
  });
});