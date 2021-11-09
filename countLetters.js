// TEST ASSERTION FUNCTION

// const assertEqual = function(actual, expected) {

//   if (actual === expected) {

//     console.log(`✅ Assertion Passed: ${actual} === ${expected}`);

//   } else {
    
//     console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);

//   }

// };

//COUNTLETTERS FUNCTION

//Create function countletters
//take a string as input adn return object with count of each letter
//skip and not count spaces

const countLetters = (string) => {

  let tally = {};

  for (let letter of string) {

    if (letter !== " ") {

      if (tally[letter]) {

        tally[letter] += 1;

      } else {

        tally[letter] = 1;

      }

    }
    
  }
  
  return tally;

};

module.exports = countLetters;

// const result = countLetters('mir');

// console.log(countLetters('mir')['m']);

// assertEqual(countLetters('mir')['m'], 1);
// assertEqual(countLetters('51t5')['5'], 2);
// assertEqual(countLetters('Mr. Potato')['t'], 2);
// assertEqual(countLetters('   I   tell')['I'], 1);
