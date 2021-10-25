// FOR TESTING

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

}

assertArraysEqual([-1,22,12,3,7], flatten([[-1,22,[12,3],7]]))



