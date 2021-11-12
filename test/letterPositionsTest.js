const {assert} = require('chai');
const letterPositions = require('../letterPositions');

describe("#letterPositions", () => {
  it("should return two positions given a string with two of the same letter", () => {
    assert.deepEqual(letterPositions('aabb').a, [0,1]);
  });

  it("should return one position when accessing a value that only occurs once", () => {
    assert.deepEqual(letterPositions('1 2 3 3')[2], [2]);
  });

  it("should return one position when accessing a value of an uppercase letter whose lowercase version also appears in the string", () => {
    assert.deepEqual(letterPositions('Ttk K').K, [4]);
  });
});