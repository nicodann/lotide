const {assert} = require('chai');
const map = require('../map');

describe("#map", () => {
  const words = ["pig", "chocolate", "perfect", "wild", "monkey"];
  it("should return only the first letter of each string given the following function", () => {
    assert.deepEqual(map(words, word => word[0]), ['p','c','p','w','m']);
  });

  const words2 = ["donkey","parentheses"];
  it("should return the length of each string in the array given the following function", () => {
    assert.deepEqual(map(words2, word => word.length), [6,11]);
  });
});