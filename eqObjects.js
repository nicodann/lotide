const eqArrays = require('./eqArrays');

const eqObjects = (object1, object2) => {
  //check if Objects have the same amount of keys
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } else {

    for (const key in object1) {
      //check if value is object or array
      if (typeof object1[key] === 'object') {
        //check if key is an array
        if (Array.isArray(object1[key])) {
          return eqArrays(object1[key], object2[key]);
        } else {
          //put key back through the function
          if (!eqObjects(object1[key], object2[key])) {
            return false;
          }
        }
      //compare the value
      } else if (object1[key] !== object2[key]) {
        return false;
      }

    }

  }

  return true;

};

module.exports = eqObjects;

// const eqArrays = require('./eqArrays');

// const eqObjects = (object1, object2) => {

//   if (Object.keys(object1).length !== Object.keys(object2).length) {

//     return false;

//   } else {

//     for (const key in object1) {

//       if (Array.isArray(object1[key])) {

//         return eqArrays(object1[key], object2[key]);

//       } else if (object1[key] !== object2[key]) {

//         return false;

//       }

//     }

//   }

//   return true;

// };

// module.exports = eqObjects;

// ALT

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