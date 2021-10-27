// TESTING ASSERTION FUCTIONS

const eqArrays = (array1, array2) => {

  if (Array.isArray(array1) && Array.isArray(array2)) {

    if (array1.length !== array2.length) {

      return false;
  
    }

    for (let i = 0; i < array1.length; i++) {

      // console.log(array1[i], array2[i]);

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

// LETTER POSITION FUNCTION

const letterPositions = function(sentence) {

  const results = {};

  for (let i = 0; i < sentence.length; i++) {

    if (sentence[i] !== " ") {
      
      if (results[sentence[i]]) {
        
          results[sentence[i]].push(i);
        
        } else {
          
          results[sentence[i]] = [i];

      }

    }

  }

  return results;

};

assertArraysEqual(letterPositions('aabb').a,[0,1]);
assertArraysEqual(letterPositions('1 2 3 3')['2'],[2]);
assertArraysEqual(letterPositions('Ttk K').K,[4]);