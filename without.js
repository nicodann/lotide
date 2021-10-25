const assertArraysEqual = (array1, array2) => {

  if (array1.length !== array2.length) {

    console.log(`🛑 Assertion Failed: ${array1} !== ${array2}`);

    return;

  }

  for (let i = 0; i < array1.length; i++) {

    if (array1[i] !== array2[i]) {

      console.log(`🛑 Assertion Failed: ${array1} !== ${array2}`);

      return;

    } 

  }

  console.log(`✅ Assertion Passed: ${array1} === ${array2}`);

}

const eqArrays = (array1, array2) => {

  if (array1.length !== array2.length) {

    return false;

  }

  for (let i = 0; i < array1.length; i++) {

    if (array1[i] !== array2[i]) {

      return false;

    } 

  }

  return true;

}

// Accept two arrays as inputs: array1, array2
// define newArray 
// push items from array1 to newArray if they don't exist in array2
  // iterate through source
  // for each itme in source iterate through array2


const without = (source, itemsToRemove) => {

  let newArray = [];

  for (const element of source) {

    for (let i = 0; i < itemsToRemove.length; i++) {

      if (itemsToRemove[i] === element) {

        break;

      } else if (i === itemsToRemove.length -1 && itemsToRemove[i] !== element) {

        newArray.push(element);

      }

    }

  }

  return newArray;

}

without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]

assertArraysEqual(without([5, 'dog', 8, 5], [8]), [5, 'dog']);