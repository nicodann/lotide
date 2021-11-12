const flatten = (array) => {
  
  let flatArray = [];
  
  if (Array.isArray(array)) {

    for (const element of array) {

      if (Array.isArray(element)) {
        flatArray = flatArray.concat(flatten(element));
      } else {
        flatArray.push(element);
      }

    }
    
  } else {
    throw new Error("input is not an array");
  }
  
  return flatArray;

};

module.exports = flatten;