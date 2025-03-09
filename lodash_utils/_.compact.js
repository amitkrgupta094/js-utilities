/*
Implement a function compact(array) that creates an array with all falsey values removed. The values false, null, 0, '', undefined, and NaN are falsey (you should know this by heart!).

Arguments
array (Array): The array to compact.
Returns
(Array): Returns the new array of filtered values.

Examples

compact([0, 1, false, 2, '', 3, null]); // => [1, 2, 3]
compact(['hello', 123, [], {}, function () {}]); // => ['hello', 123, [], {}, function() {}]
*/

/**
 * @param {Array} array: The array to compact.
 * @return {Array} Returns the new array of filtered values.
 */
export default function compact(array) {
    const compactArray = [];
    for (let i = 0; i < array.length; i++) {
      // Check for falsy values and do not push them
      if (!array[i]) continue;
      compactArray.push(array[i]);
    }

    return compactArray;
  }
