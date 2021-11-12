const {assert} = require('chai');
const countOnly = require('../countOnly');
  


describe('#countOnly', () => {

  it("should output {dog:2} given (['dog','dog','cat'], {'dog':true)", () => {
    assert.deepEqual(countOnly(['dog','dog','cat'], {dog:true}), {dog:2});
  });

  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];
  
  const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

  it("should return the count of the name given", () => {
    assert.deepEqual(result1.Jason,1);
  });

  it("should return undefined because name given does not occur in first names", () => {
    assert.deepEqual(result1.Karima, undefined);
  });
  
  it("should return the count of the name given", () => {
    assert.deepEqual(result1.Fang,2);
  });

  it("should return undefined because name given is false", () => {
    assert.deepEqual(result1.Agouhanna, undefined);
  });


});