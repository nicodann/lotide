const {assert} = require('chai');
const without = require('../without');

describe("#without", () => {
  it("should remove the given value from the array", () => {
    assert.deepEqual(without([1,2,3], [1]), [2,3]);
  });
  
  it("should remove the given value strings from the array but not the numbers", () => {
    assert.deepEqual(without(["1","2","3"], [1,2,"3"]), ["1","2"]);
  });

  it("should remove the given numbers and strings from the array", () => {
    assert.deepEqual(without([5, 'dog', 8, 5], [8, 'dog']), [5,5]);
  });
});