/**
 *
 * what is Composition? It is actually not that difficult to
 * understand, see @dan_abramov 's explanation.
 *
 * Here you are asked to create a pipe() function, which chains multiple
 * functions together to create a new function.
 * Suppose we have some simple functions like this
 *
 * const times = (y) =>  (x) => x * y
 * const plus = (y) => (x) => x + y
 * const subtract = (y) =>  (x) => x - y
 * const divide = (y) => (x) => x / y
 *
 *
 * Your pipe() would be used to generate new functions
 *
 * pipe([times(2), times(3)])
 * // x * 2 * 3
 *
 *
 * pipe([times(2),plus(3),times(4)])
 * // (x * 2 + 3) * 4
 *
 * pipe([times(2),subtract(3),divide(4)])
 * // (x * 2 - 3) / 4
 *
 *
 * Note: to make things simple, functions passed to pipe() will all accept 1 argument
 */

/**
 * @param {Array<(arg: any) => any>} funcs
 * @return {(arg: any) => any}
 */
function pipe(funcs) {
  // your code here
  return function (x) {
    // temp value to save starting value passed to piped functions
    let value = x;

    // iterate through array of functions
    for (let i = 0; i < funcs.length; i++) {
      // call the function with updated value
      // and save the new value
      value = funcs[i](value);
    }
    return value;
  };
}
