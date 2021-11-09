const tail = require('../tail');
const { assert } = require('chai');

describe('#tail', () => {

  it ("should return 3 if given [1,2,3]", () => {
   
    assert.deepEqual(tail([1,2,3]), [3]);
  });

  it("should return 'headache' if given ['one', 'bear', 'headache']", () => {
    assert.deepEqual(tail(['one', 'bear', 'headache']), ["headache"]);
  });

});