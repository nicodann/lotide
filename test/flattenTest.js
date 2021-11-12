const {assert} = require('chai');
// const assert = require('chai').assert;
// const assert = chai.assert
const flatten = require('../flatten');

describe('#flatten', () => {

  it('should throw an error when passed non arrays', () => {
    assert.throws(flatten,'input is not an array');
  });

  it('should return an array without arrays when given an array in which some elements are arrays', () => {
    assert.deepEqual([-1,22,12,3,7], flatten([-1,22,[12,3],7]));
  });

  it('should return an array without arrays when given an array containing more than one level of nested arrays', () => {
    assert.deepEqual([-1,22,6,12,3,7,8,10], flatten([-1,22,[6,[12,3],7],8,10]));
  });

});

// assertArraysEqual([-1,22,12,3,7], flatten([[-1,22,[12,3],7]]));
// assertArraysEqual([1,2,3,4,5], flatten([1,2,[3,4],5]));
// assertArraysEqual(23, 23);