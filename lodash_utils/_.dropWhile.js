/**
 *
 * Implement a function dropWhile(array, predicate) that creates a slice of array excluding elements dropped from the beginning. Elements are dropped until predicate returns falsey. Your function should not modify the original array.

Arguments
array (Array): The array to query.
predicate (Function): The function invoked per iteration. The function is invoked with three arguments: (value, index, array).
Returns
(Array): Returns the slice of array.

Examples
dropWhile([1, 2, 3, 4, 5], (value) => value < 3); // => [3, 4, 5]
dropWhile([1, 2, 3], (value) => value < 6); // => []
Note that Lodash's dropWhile utility also allows you to pass an optional thisArg parameter to bind this inside the predicate function, but for this exercise, you can ignore that parameter.
 */

/**
 * @param {Array} array - The array to iterate over.
 * @param {Function} predicate - The function invoked per iteration.
 * @return {Array} Returns the slice of `array`.
 */
export default function dropWhile(array, predicate) {
    let dropWhileArray = [];
    let keepDropping = true;
    for (let i = 0; i < array.length; i++) {
      if (!predicate(array[i], i, array)) {
        keepDropping = false;
      }

      if (!keepDropping) dropWhileArray.push(array[i]);
    }
    return dropWhileArray;
  }
