const {assert} = require('chai');
const eqObjects = require('../eqObjects');

describe("#eqObjects", () => {

  const ab = { a: "1", b: "2" };
  const ba = { b: "2", a: "1" };
  it("should return true given two objects with equal key/value pairs", () => {
    assert.deepEqual(eqObjects(ab, ba), true);
    
  });

  const abc = { a: "1", b: "2", c: "3" };
  it("should return flase when the ojects are different lengths and the second object is longer", () => {
    assert.deepEqual(eqObjects(ab, abc), false);
  });

  it("should return false when the first object is longer", () => {
    assert.deepEqual(eqObjects(abc, ab), false);
  });
  
  const d = {d:5};
  const e = {e:6};
  it("should return false with two objects, equal in length, that have different key/value pairs", () => {
    assert.deepEqual(eqObjects(d,e), false);
  });
  
  const cd = { c: "1", d: ["2", 3] };
  const dc = { d: ["2", 3], c: "1" };
  it("should return true given two objects with equal key/value pairs and containing arrays", () => {
    assert.deepEqual(eqObjects(cd, dc), true);
  });

  const cd2 = { c: "1", d: ["2", 3, 4] };
  it("should return false given two objects containing similar key/value pairs, containing arrays, different only in the content of the arrays", () => {
    assert.deepEqual(eqObjects(cd, cd2),false);
  });

});









