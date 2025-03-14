/*
Implement a JavaScript function intersection(arrays) that takes multiple arrays as input and returns a new array containing the unique values that are present in all given arrays SameValueZero for equality comparisons. The order and references of result values are determined by the first array.

intersection(...arrays);
Arguments
[arrays] (...Array): The arrays to perform the intersection on.
Returns
(Array): Returns a new array containing the unique values present in all given arrays.

Examples
const arr1 = [1, 2, 3];
const arr2 = [2, 3, 4];
const arr3 = [3, 4, 5];

intersection(arr1, arr2, arr3); // => [3]
Constraints
The input arrays may contain any type of values.
The input arrays may have varying lengths.
The input arrays may be empty.
The function should not modify the original arrays.
*/

/**
 * Computes the intersection of arrays, returning a new array containing unique values present in all given arrays.
 *
 * @param {Array[]} arrays - The arrays to perform the intersection on.
 * @returns {Array} - A new array containing the unique values present in all given arrays.
 */
export default function intersection(...arrays) {
    let arr0 = arrays[0] || [];
    let intersectionArr = [];
    for (let i = 0; i < arr0.length; i++) {
      let intersected = true;
      for (let j = 1; j < arrays.length; j++) {
        if (!arrays[j].includes(arr0[i])) {
          intersected = false;
          break;
        }
      }

      if (intersected && !intersectionArr.includes(arr0[i])) {
        intersectionArr.push(arr0[i]);
      }
    }

    return intersectionArr;
  }
