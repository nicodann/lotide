//TESTING FUNCTIONS

// const assertEqual = function(actual, expected) {

//   if (actual === expected) {

//     console.log(`✅ Assertion Passed: ${actual} === ${expected}`);

//   } else {
    
//     console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);

//   }

// };

//MY FUNCTION

const findKeyByValue = (object, value) => {

  for (let key in object) {

    if (object[key] === value) {

      return key;

    }

  }

};

module.exports = findKeyByValue;

//TEST ASSERTIONS

// const bestTVShowsByGenre = {
//   sciFi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// findKeyByValue(bestTVShowsByGenre, "The Wire")

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
// assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), 'comedy');