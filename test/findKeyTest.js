const {assert} = require('chai');
const findKey = require('../findKey');

describe('#findKey', () => {
  const result1 = findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  }, x => x.stars === 2); // => "noma"

  it('should return noma given the above input', () => {
    assert.strictEqual(result1, 'noma');
  });

  const result2 = findKey({barn:'big', house:'small'}, x => x === 'small');
  
  it("should return 'house' given the above input", () => {
    assert.strictEqual(result2, 'house');
  });

  const result3 = findKey(
    {
      "maroon": {colours: 5},
      "navy":   {colours:12},
      "brown":  {colours: 20},
      "pink":   {colours: 0.5}
    }, x => x.colours === 0.5);

  it("should return 'pink' given the above input", () => {
    assert.strictEqual(result3, 'pink');
  });
});