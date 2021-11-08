// const assertEqual = function(actual, expected) {

//   if (actual === expected) {

//     console.log(`✅ Assertion Passed: ${actual} === ${expected}`);

//   } else {
    
//     console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);

//   }

// };
const tail = (array) => {

  const tailArray = array.slice(1);

  return tailArray;

};




module.exports = tail;