/**
 *
 * Compact
 *
 *
 * Implement a function compact(array) that creates an array with all falsey values removed.
 * The values false, null, 0, '', undefined, and NaN are falsey (you should know this by heart!).
 *
 *
 * Arguments:
 * array (Array): The array to compact
 *
 *
 * Returns
 * (Array): Returns the new array of filtered values.
 *
 *
 * compact([0, 1, false, 2, '', 3, null]); // => [1, 2, 3]
 * compact(['hello', 123, [], {}, function () {}]); // => ['hello', 123, [], {}, function() {}]
 *
 *
 * Key takeway: 0, '', null, undefined, NaN are falsy values. hence if(value){/never executes/}
 * Empty arrays and objects are not considered falsey.
 */

/**
 * @param {Array} array: The array to compact.
 * @return {Array} Returns the new array of filtered values.
 */
export default function compact(array) {
  let filteredArray = [];
  for (let i = 0; i < array.length; i++) {
    if (!!array[i]) filteredArray.push(array[i]);
  }
  return filteredArray;
}
