const assertEqual = function(actual, expected) {

  if (actual === expected) {

    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);

  } else {
    
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);

  }

};

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

    return 'Input is not an Array';
  }

}




assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([4, 2, 3], [1, 2, 3]), false); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 8, 3]), false); // => should PASS
assertEqual(eqArrays([1, 2, 3, 6], [1, 2, 3]), false); // => should PASS
assertEqual(eqArrays([], [1, 2, 3]), false); // => should PASS
assertEqual(eqArrays([1, 2, 3], ['1', '2', '3']), false); // => should PASS
