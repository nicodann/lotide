const { assert } = require('chai');
// const assertEqual = require('../assertEqual');
const head = require('../head')

describe("#head", () => {

  it("returns 1 for [1,2,3]", () => {
    assert.strictEqual(head([1,2,3]), 1);
  });

  it("returns 5 for [5,4,3,2,1]", () => {
    assert.strictEqual(head([5,4,3,2,1]), 5);
  });

  it("should return 'hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual ( head(["Hello", "Lighthouse", "Labs"]) , 'Hello' );
  });

});