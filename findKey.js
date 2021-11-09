//TESTING FUNCTIONS

// const assertEqual = function(actual, expected) {

//   if (actual === expected) {

//     console.log(`✅ Assertion Passed: ${actual} === ${expected}`);

//   } else {
    
//     console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);

//   }

// };

//FIND KEY FUNC

const findKey = (object, callback) => {

  for (let key in object) {

    if (callback(object[key])) {

      return key;

    }

  }

};

module.exports = findKey;

//TEST ASSERTIONS



// const result1 = findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2); // => "noma"
// assertEqual(result1, 'noma');

// const result2 = findKey({barn:'big', house:'small'}, x => x === 'small');
// assertEqual(result2, 'house');

// const result3 = findKey(
//   {
//     "maroon": {colours: 5},
//     "navy":   {colours:12},
//     "brown":  {colours: 20},
//     "pink":   {colours: 0.5}
//   }
//   , x => x.colours === 0.5);

// assertEqual(result3, 'pink');

