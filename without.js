const without = (source, itemsToRemove) => {

  let newArray = [];

  for (const element of source) {

    for (let i = 0; i < itemsToRemove.length; i++) {

      if (itemsToRemove[i] === element) {

        break;

      } else if (i === itemsToRemove.length - 1 && itemsToRemove[i] !== element) {

        newArray.push(element);

      }

    }

  }

  return newArray;

};

module.exports = without;