/*

Implement a function mean(array) that returns the mean (also known as average) of the values inside array, which is an array of numbers.

Arguments
array (Array): Array of numbers.
Returns
(Number): Returns the mean of the values in array.

Examples
mean([4, 2, 8, 6]); // => 5
mean([1, 2, 3, 4]); // => 2.5
mean([1, 2, 2]); // => 1.6666666666666667
The function should return NaN if array is empty.

mean([]); // => NaN

*/


/**
 * @param {Array} array - Array from which the elements are all numbers.
 * @return {Number} Returns mean.
 */
export default function mean(array) {
    let arrayLength = array.length;
    let sum = 0;
    for (let i = 0; i < arrayLength; i++) {
      sum += array[i];
    }

    return sum / arrayLength;
  }
