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
      
    }

  }
  
  return results;

};

module.exports = countOnly;