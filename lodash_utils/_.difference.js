/*
Implement a function difference(array, values) that creates an array of array values not included in the other given arrays using SameValueZero for equality comparisons. The order and references of result values are determined by the first array.

Arguments
array (Array): The array to inspect.
values (Array): The values to exclude.
Returns
(Array): Returns the new array of filtered values.

Examples
difference([1, 2, 3], [2, 3]); // => [1]
difference([1, 2, 3, 4], [2, 3, 1]); // => [4]
difference([1, 2, 3], [2, 3, 1, 4]); // => []
difference([1, , 3], [1]); // => [3]
The function should return the original array values if values is empty.


difference([1, 2, 3], []); // => [1, 2, 3]
*/

/**
 * @param {Array} array - Array from which different elements are to be removed.
 * @param {Array} values - Array of values that are to be removed from the original array.
 * @return {Array} Returns filtered array.
 */
export default function difference(array, values) {
    // check if values is empty
    if (values.length === 0) return array;
    let differenceArray = [];
    for (let i = 0; i < array.length; i++) {
      if (!values.includes(array[i]) && typeof array[i] !== "undefined")
        differenceArray.push(array[i]);
    }

    return differenceArray;
  }
