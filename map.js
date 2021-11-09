// TEST Functions

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

//MAP FUNCTION



const map = (array,callback) => {
  
  console.log("array:",array,"callback:", callback);

  let results = [];

  for (let item of array) {
    results.push(callback(item));
  }

  return results;


};

const words = ["pig", "chocolate", "perfect", "wild", "monkey"];
const results1 = map(words, word => word[0]);
assertArraysEqual(results1, ['p','c','p','w','m']);

const words2 = ["donkey","parentheses"];
const results2 = map(words2, word => word.length);
assertArraysEqual(results2, [6,11]);