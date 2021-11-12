# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @nicodann/lotide`

**Require it:**

`const _ = require('@nicodann/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `countLetters(string)`: Given a string it returns an object with keys corresonding to each different character in the string and values corresponding to how many times the key exists in the string. 
* `countOnly(array,object)`: Given an array of values and an object of keys and booleans it returns an) object containing the number of times 'true' keys exist in an array.
* `findKey(object, callback)`: Given an object and a callback it returns the key in an object whose value matches the output of the callback.
* `findKeyByValue(object, value)`: given an Object and a Value it returns the key that matches the value.
* `flatten(array)`: Given an array of values, including arrays and n levels of nested arrays, it will output an array without nested arrays with the same values
* `head(array)`: Given an array it returns the array containing the first value of an array.
* `letterPositions('string')`: Given a string it will return an object with each different character as keys and the number of time the character appears in the string, as values.
* `map(array, callback)`: Given an array and a callback it passes each element through the callback and return an array of the results.
* `middle(array)`: Given an array it returns the array containing the middle value, or values, of an array.
* `tail(array or string)`: Given an array or string returns the array or string minus the first value.
* `takeUntil(array, callback)`: Given an array and a callback it will pass each element through the callback in turn and return an array containing each element of the input array until the callback returns true.
* `without(array1,array2)`: Given two arrays it will return the first array minus the elements in the second.
