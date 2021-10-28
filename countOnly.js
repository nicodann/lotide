// TESTING ASSERTIONS FUNCTION

const assertEqual = function(actual, expected) {

  if (actual === expected) {

    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);

  } else {
    
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);

  }

};

//COUNTONLY FUNCTION

// accept as inputs an array of elements and an object telling us which elements to count.
// create tally object {}
//  iterate through keys of object (for...in)
// for each object key whose value is true, iterate through array (for...of)
// if key = array elemement add key to tally object with value 1
// if key already exists in tally object key's value += 1
// return tally object

const countOnly = function(allItems, itemsToCount) {

  let results = {};

  for (const item of allItems) {
    
    if (itemsToCount[item] === true) {

      if (results[item]) {
        
        results[item] += 1;

      } else {

        results[item] = 1;

      }

      console.log(results);
      
    }

  }
  
  return results;


};

//TEST CASES

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);