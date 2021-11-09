const middle = require('../middle');
const {assert} = require('chai');

describe('#middle', () => {
  it('should return [3] if passed [1,2,3,4,5]', () => {
    assert.deepEqual(middle([1,2,3,4,5]), [3]);
  });

  it('should return [2,3] if passed [1,2,3,4]', () => {
    assert.deepEqual(middle([1,2,3,4]), [2,3]);
  });

  it('should return empty array if passed an array with one element that is a string', () => {
    assert.deepEqual(middle(['words']), []);
  });

  it('should return empty array if passed an array with one element that is a number', () => {
    assert.deepEqual(middle([1]), []);
  });

  it('should return empty array if passed an array with two elements', () => {
    assert.deepEqual(middle([1,2]), []);
  });
});