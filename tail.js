const assertEqual = function(actual, expected) {

  if (actual === expected) {

    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);

  } else {
    
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);

  }

};

const tail = (array) => {

  tailArray = array.slice(1);

  return tailArray;

};

console.log(assertEqual(tail([1, 2, 3, 4, 5]).toString(), '2,3,4,5'));