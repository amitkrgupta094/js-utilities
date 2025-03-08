/*
Implement a function inRange(value, [start=0], end) to check if a number value is between start and up to, but not including, end. If only 2 arguments are specified, the second argument becomes end and start is set to 0. If start is greater than end, the parameters are swapped to support negative ranges.

Arguments
value (number): The number to check.
[start=0] (number): The start of the range.
end (number): The end of the range (not including).
Returns
(boolean): Returns true if value is in the range, else false.

Examples

inRange(3, 2, 4); // => true
inRange(4, 8); // => true
inRange(4, 2); // => false
inRange(2, 2); // => false
inRange(1.2, 2); // => true
inRange(5.2, 4); // => false
inRange(-3, -2, -6); // => true
*/

/**
 * @param {number} value The number to check.
 * @param {number} [start=0] The start of the range.
 * @param {number} end The end of the range.
 * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
 */
export default function inRange(value, start, end) {
    let argumentsLength = arguments.length;

    // Case 1: if less than 2 parameters are passed
    if (argumentsLength <= 1) throw Error("please enter valid parameters");

    // Case 2: check if number of arguments are two then set values
    if (argumentsLength === 2) {
      end = arguments[1];
      start = 0;
    }

    // Case 3: check if start is greater then end then swap
    if (start > end) {
      let temp = start;
      start = end;
      end = temp;
    }

    // Case 4: return the expression checking for range of the value
    return value >= start && value < end;
  }
