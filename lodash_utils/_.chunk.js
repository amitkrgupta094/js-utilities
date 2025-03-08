/*
Lodash's Chunk method
Implement a function chunk(array, [size=1]) that splits the input array into groups of length size and returns them within a new array. If array can't be split evenly, the final chunk will be the remaining elements. The function should not modify the original input array.

Arguments
array (Array): The array to process.
[size=1] (number): The length of each chunk.
Returns
(Array): Returns the new array of chunks.

Examples

chunk(['a', 'b', 'c', 'd']); // => [['a'], ['b'], ['c'], ['d']]
chunk([1, 2, 3, 4], 2); // => [[1, 2], [3, 4]]
chunk([1, 2, 3, 4], 3); // => [[1, 2, 3], [4]]
The function should return an empty array if the array argument is empty.
*/

/**
 * @template T
 * @param {Array<T>} array The array to process.
 * @param {number} [size=1] The length of each chunk.
 * @returns {Array<Array<T>>} The new array of chunks.
 */
export default function chunk(array, size = 1) {
    let chunkedArray = [];
    for (let i = 0; i < array.length; i = i + size) {
      chunkedArray.push(array.slice(i, i + size));
    }
    return chunkedArray;
  }


// BFE.dev: https://bigfrontend.dev/problem/implement-lodash-chunk

/*
_.chunk() splits array into groups with the specific size.

Please implement your chunk(arr: any[], size: number)

chunk([1,2,3,4,5], 1)
chunk([1,2,3,4,5], 2)
chunk([1,2,3,4,5], 3)
chunk([1,2,3,4,5], 4)
chunk([1,2,3,4,5], 5)
for size smaller than 1, return an empty array.

*/


/**
 * @param {any[]} items
 * @param {number} size
 * @returns {any[][]}
 */
function chunk(items, size) {
    if(!Array.isArray(items) || items.length < 1 || size === 0) return [];

    let chunked = [];
    let output = [];

    for(let i = 0; i < items.length; i++) {
       chunked.push(items[i]);

       if(chunked.length === size || i === items.length - 1) {
        output.push(chunked);
        chunked = [];
       }


    }

    return output;
  }
