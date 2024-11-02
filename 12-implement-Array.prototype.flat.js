/**
 *
 *
 * There is already Array.prototype.flat() in
 * JavaScript (ES2019), which reduces the nesting
 * of Array. Please implement your own.
 *
 * const arr = [1, [2], [3, [4]]];
 *
 * flat(arr)
 * // [1, 2, 3, [4]]
 *
 *
 * flat(arr, 1)
 * // [1, 2, 3, [4]]
 *
 *
 * flat(arr, 2)
 * // [1, 2, 3, 4]
 *
 *
 *
 * Follow up:
 * - Solve it recurively
 * - Solve it iteratively
 * - How do you handle sparse array?
 */



// This is a JavaScript coding problem from BFE.dev
/**
 * @param { Array } arr
 * @param { number } depth
 * @returns { Array }
 */


// Solution 1 - bruteforce iterative solution
function flat(arr, depth = 1) {
    // create shallow copy from the arr
    let flattenedArr = [].concat(arr);

    // Util to check if an Array has an array item
    let checkIfAnyItemIsAnArray = (array) => {
      for(let i = 0; i < array.length; i++) {
        if(Array.isArray(array[i])) return true;
      }
      return false;
    }
    let isArrayAnItem = checkIfAnyItemIsAnArray(flattenedArr);
    // check until depth is not zero + Array has an array item
    while(isArrayAnItem && depth){
      // create a temp shallow copy of flattendedArr
      let temp = [].concat(flattenedArr);
      // empty flattened Array after every iteration
      flattenedArr = [];
      for(let j = 0; j < temp.length; j++){
        if(!(j in temp)) continue; // to ignore empty values
        // check if an item is sparse array and remove empty items
        if(Array.isArray(temp[j])) flattenedArr = flattenedArr.concat(temp[j].filter(() => true))
        else flattenedArr = flattenedArr.concat(temp[j])

      }
      // decrement the depth value
      depth--;
      // check if new Array has an array item
      isArrayAnItem = checkIfAnyItemIsAnArray(flattenedArr);
    }
    return flattenedArr;
  }
