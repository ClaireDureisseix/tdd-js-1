// test/Rectangle.test.js
const assert = require('assert');
const Rectangle = require('../Rectangle')
const rectangle = new Rectangle(10, 4)
const square = new Rectangle(2, 2)
const isSquare = square.isSquare()
const isNotSquare = rectangle.isSquare();
const getPerimeter = rectangle.getPerimeter();
const getArea = rectangle.getArea();

// give the test suite a label using describe
describe('isSquare', () => {
  it('return true if object is really square', () => {
    assert.strictEqual(isSquare, true);
  });

  it('return false if object is not square', () => {
    assert.strictEqual(isNotSquare, false);
  });
});

describe('getPerimeter', () => {
  it('return two times the length plus two times the width', () => {
    assert.strictEqual(getPerimeter, 28);
  });
});

describe('getArea', () => {
  it('return width multiplied by length', () => {
    assert.strictEqual(getArea, 40);
  });
});