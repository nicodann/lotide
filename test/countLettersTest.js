const { assert } = require("chai");
const countLetters = require('../countLetters');

describe("#countLetters", () => {
  it("should return the number of times the given letter appears in the string", () => {
    assert.strictEqual(countLetters('mir')['m'], 1);
  });

  it("should return the number of times the given letter appears in the string", () => {
    assert.strictEqual(countLetters('51t5')['5'], 2);
  });

  it("should return the number of times the given letter appears in the string", () => {
    assert.strictEqual(countLetters('Mr. Potato')['t'], 2);
  });

  it("should return the number of times the given letter appears in the string", () => {
    assert.strictEqual(countLetters('   I   tell')['I'], 1);
  });
});