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
