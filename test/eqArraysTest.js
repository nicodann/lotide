const {assert} = require('chai');
const eqArrays = require('../eqArrays');

describe("#eqArrays", () => {
  it("should return true given two equal arrays", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });

  it("should return false given two different arrays", () => {
    assert.deepEqual(eqArrays([4, 2, 3], [1, 2, 3]), false);
  });

  it("should return false given two arrays of different lengths", () => {
    assert.deepEqual(eqArrays([1, 2, 3, 6], [1, 2, 3]), false);
  });

  it("should return false given an empty array as one argument", () => {
    assert.deepEqual(eqArrays([], [1, 2, 3]), false);
  });

  it("should return false given an array of strings and one of numbers", () => {
    assert.deepEqual(eqArrays([1, 2, 3], ['1', '2', '3']), false);
  });
});
