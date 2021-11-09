// FOR TESTING

// const eqArrays = (array1, array2) => {

//   if (Array.isArray(array1) && Array.isArray(array2)) {

//     if (array1.length !== array2.length) {

//       return false;
  
//     }

//     for (let i = 0; i < array1.length; i++) {

//       // console.log(array1[i], array2[i]);

//       if (array1[i] !== array2[i]) {

//         return false;

//       }

//     }

//     return true;

//   } else {

//     console.log('Input is not an Array');
//   }

// };

// const assertArraysEqual = (actual, expected) => {

//   if (eqArrays(actual, expected) === true) {

//     console.log(`✅ Assertion Passed: ${actual} === ${expected}`);

//   } else {

//     console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);

//   }

// };

//FLATTEN FUNCTION

const flatten = (array) => {

  let flatArray = [];

  for (let element of array) {

    if (Array.isArray(element)) {

      for (let item of element) {

        flatArray.push(item);

      }

    } else {

      flatArray.push(element);
    
    }

  }

  return flatArray;

};

module.exports = flatten;

// assertArraysEqual([-1,22,12,3,7], flatten([[-1,22,[12,3],7]]));
// assertArraysEqual([1,2,3,4,5], flatten([1,2,[3,4],5]));
// assertArraysEqual(23, 23);



