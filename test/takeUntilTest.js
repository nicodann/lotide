const { assert } = require("chai");
const takeUntil = require('../takeUntil');

describe("#takeUntil", () => {
  it("should return the numbers in the array until one is smaller than 0", () => {
    assert.deepEqual(takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0), [1, 2, 5, 7, 2]);
  });

  it("should return the strings up to ','", () => {
    assert.deepEqual(takeUntil(["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"], x => x === ','), ["I've", "been", "to", "Hollywood"]);
  });

  const data4 = ["pig", "elephant","","roger"];
  it("should return the strings until, and not including, the empty string", () => {
    assert.deepEqual(takeUntil(data4, x => x === ""), ["pig","elephant"]);
  });
});