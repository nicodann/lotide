const middle = (array) => {

  let newArray = [];

  let i = 0;

  if (array.length === 1 || array.length === 2) {

    return newArray;

  } else if (array.length % 2 === 0) {

    i = array.length / 2 - 1;

    newArray.push(array[i], array[i + 1]);
  
  } else {

    i = Math.floor(array.length / 2);

    newArray.push(array[i]);

  }

  return newArray;

};

module.exports = middle;