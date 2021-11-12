const eqArrays = (array1, array2) => {
  //check if both inputs are arrays
  if (!Array.isArray(array1) || !Array.isArray(array2)) {
    console.log('Input is not an Array');
  } else {

    //check if both arrays have the same length
    if (array1.length !== array2.length) {
      return false;
    } else {

      //check if array elements are equal
      for (let i = 0; i < array1.length; i++) {

        //check if element is nested array
        if (Array.isArray(array1[i])) {

          //put array element back through the function
          if (!eqArrays(array1[i], array2[i])) {
            return false;
          }
        } else {

          //compare value of element if not array
          if (array1[i] !== array2[i]) {
            return false;
          }
        }
      }

    }

    return true;

  }

};

console.log(eqArrays([1,2,[3,4],5,6], [1,2,[3,5],5,6]));

module.exports = eqArrays;


//OLD WORKING NON-RECURSIVE FUNCTION


// const eqArrays = (array1, array2) => {
//   //check if both inputs are arrays
//   if (Array.isArray(array1) && Array.isArray(array2)) {
//     //check if both arrays have the same length
//     if (array1.length !== array2.length) {
//       return false;
//     } else {
//       //check if array elements are equal
//       for (let i = 0; i < array1.length; i++) {
//         if (array1[i] !== array2[i]) {
//           return false;
//         }
//       }

//     }

//     return true;

//   } else {
//     console.log('Input is not an Array');
//   }

// };

// module.exports = eqArrays;


