/**
 *
 * [BFE.dev]
 * _.once(func) is used to force a function to be called only once,
 * later calls only returns the result of first call.
 *
 * Can you implement your own once()?
 *
 * function func(num) {
 *  return num
 * }
 *
 * const onced = once(func)
 *
 * onced(1)
 * // 1, func called with 1
 *
 *
 * onced(2)
 *
 * // 1, even 2 is passed, previous result is returned
 *
 */

/**
 * @param {Function} func
 * @return {Function}
 */
function once(func) {
  // calledOnce and result in closure
  // to track if function called only once
  let calledOnce = false;
  let result = null;
  // return the function with args passed
  return function (...args) {
    // if calledOnce is false
    //   1. set This, pass args, calculate the result;
    //   2. set the calledOnce (closure variable) to true
    // return the result
    if (!calledOnce) {
      result = func.apply(this, args);
      calledOnce = true;
    }
    return result;
  };
}
