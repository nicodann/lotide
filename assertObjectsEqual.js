//HELPER FUNCTIONS
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

const eqObjects = (object1, object2) => {

  if (Object.keys(object1).length !== Object.keys(object2).length) {

    return false;

  } else {

    for (const key in object1) {
      
      if (Array.isArray(object1[key])) {

        return eqArrays(object1[key], object2[key]);

      } else if (object1[key] !== object2[key]) {

        return false;

      }

    }

  }

  return true;

};

//ASSERTOBJECTSEQUAL FUNCTION

const assertObjectsEqual = (actual, expected) => {

  const inspect = require('util').inspect;

  if (eqObjects(actual, expected)) {

    console.log(`✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);

  } else {

    console.log(`🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);

  }

};

//TEST CASES

assertObjectsEqual({a:1,b:2}, {a:1,b:2});
assertObjectsEqual({a:1,b:2}, {a:1,b:2,d:1});
assertObjectsEqual({a:1,b:2}, {a:2,b:2});
assertObjectsEqual({a:1,b:2}, "this");
assertObjectsEqual({a:1,b:2}, 4);
assertObjectsEqual({a:1,b:2}, {});
assertObjectsEqual({a:1,b:2}, []);
assertObjectsEqual({a:1,b:2}, {b:2,a:1});
