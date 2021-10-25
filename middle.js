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

  if (eqArrays(actual, expected) === true) {

    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);

  } else {

    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);

  }

};

  for (let i = 0; i < array1.length; i++) {

    if (array1[i] !== array2[i]) {

      console.log(`🛑 Assertion Failed: ${array1} !== ${array2}`);

      return;

    } 

  }

  console.log(`✅ Assertion Passed: ${array1} === ${array2}`);

}



const middle = (array) => {

  let newArray = '';

  let i = 0;

  if (array.length === 1 || array.length === 2) {

    return newArray;

  } else if (array.length % 2 === 0) {

    i = array.length / 2 - 1;
  
  } else {

    i = Math.round(array.length / 2);

  }
}

