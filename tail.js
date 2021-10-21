const assertEqual = function(actual, expected) {

  if (actual === expected) {

    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);

  } else {
    
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);

  }

};

const tail = (array) => {

  const tailArray = array.slice(1);

  return tailArray;

};



console.log(assertEqual(tail([1,2,3]).length, 2));
console.log(assertEqual(tail(['one', 'bear', 'headache'])[1], 'headache'));