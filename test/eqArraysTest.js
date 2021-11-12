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

  it("should return true given two arrays with equal values, including nested arrays", () => {
    assert.deepEqual(eqArrays([1,2,[3,4],5,6], [1,2,[3,4],5,6]), true);
  });

  it("should return true given two arrays with equal values, including multiple levels of nested arrays", () => {
    const array1 = [1,2,[3,4,[5,6,[7,8],9],10],11];
    const array2 = array1;
    assert.deepEqual(eqArrays(array1, array2), true);
  });

  it("should return false given two arrays with equal values, including nested arrays", () => {
    assert.deepEqual(eqArrays([1,2,[3,5],5,6], [1,2,[3,4],5,6]), false);
  });

  it("should return false given two arrays with equal values, including multiple levels of nested arrays", () => {
    assert.deepEqual(eqArrays([1,2,[3,[5,8],5],6], [1,2,[3,4],5,6]), false);
  });
});
