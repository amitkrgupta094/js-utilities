/**
 * Number of Arguments
 *
 * Implement a function numberOfArguments, to return the number of
 * arguments it was called with. Note that this value is the actual
 * number of arguments, which can be more or less than the defined
 * parameter count (which is determined by Function.prototype.length).
 *
 * P.S. There's no practical use for this function. However, it
 * is useful to know how to determine the number of arguments, which
 * can be useful for questions that require writing variadic functions
 * like Classnames and Curry II.
 *
 *
 * numberOfArguments(); // 0
 * numberOfArguments(1); // 1
 * numberOfArguments(2, 3); // 2
 * numberOfArguments('a', 'b', 'c'); // 3
 *
 *
 * variadic functions:
 * A function that takes variable number of arguments.
 *
 *
 * Key Takeaway:
 * A function can have variable number of arguments saved
 * inside of spcial property called arguments.
 */

/**
 * @param {...any} args
 * @return {number}
 */
export default function numberOfArguments() {
    return arguments.length;
  }
