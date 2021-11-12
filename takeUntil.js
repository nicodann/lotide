const takeUntil = (array, callback) => {

  let results = [];

  for (const item of array) {

    if (callback(item) === false) {
      results.push(item);
    } else {
      return results;
    }

  }

};

module.exports = takeUntil;

