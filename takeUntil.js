//TESTING

const eqArrays = (array1, array2) => {

  if (Array.isArray(array1) && Array.isArray(array2)) {

    if (array1.length !== array2.length) {

      return false;
  
    }

    for (let i = 0; i < array1.length; i++) {

      if (array1[i] !== array2[i]) {

        return false;

      }

    }

    return true;

  } else {

    console.log('Input is not an Array');
  }

};

const assertArraysEqual = (actual, expected) => {

  if (eqArrays(actual, expected)) {

    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);

  } else {

    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);

  }

};


//TAKEUNTIL FUNcTION

/*
1. Make results array
1. Loop through array
  3.  Pass item through callback
  4. if callback returns true stop
  2. push item to results array
2. return results array
*/

const takeUntil = (array, callback) => {

  let results = [];

  for (item of array) {

    if (callback(item) === false) {
      results.push(item);
    } else {
      return results;
    }

  }

};

//TESTs

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);

//TEST ASSERTIONS

// console.log(assertArraysEqual(results1, [1,2,5,7,2]))

const data3 = [1,2,,3];
const results3 = takeUntil(data3, x => x === undefined);
console.log(results3);
console.log(assertArraysEqual(results3, [1,2]));

const data4 = ["pig", "elephant","","roger"];
const results4 = takeUntil(data4, x => x === "");
console.log(results4);
console.log(assertArraysEqual(results4, ["pig","elephant"]));

