//TESTING FUNCTIONS

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

    console.log('Input is not an Array');
  }

};

// EQOBJECTS FUNCTION

// THEIR SOLUTION

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

// MY SOLUTION

// const eqObjects = (object1, object2) => {

//   for (const key in object1) {

//     if (object1[key] != object2[key]) {

//       return false;

//     }

//   }

//   for (const key in object2) {

//     if (object1[key] != object2[key]) {

//       return false;

//     }

    
//   }

//   return true;

// }

//TEST CASES

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertEqual(eqObjects(ab, ba), true);



// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), false);


// assertEqual(eqObjects(abc, ab), false);

// const d = {d:5};
// const e = {e:6};
// assertEqual(eqObjects(d,e), false);

// assertEqual(eqObjects(d,ab), false)

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc),true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2),false);