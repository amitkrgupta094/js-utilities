
// Implement a function setCancellableInterval, that acts like setInterval but
// instead of returning a timer ID, it returns a function that when called, cancels the interval. The setCancellableInterval function should have the exact same signature as setInterval:

// setCancellableInterval(callback);
// setCancellableInterval(callback, delay);
// setCancellableInterval(callback, delay, param1);
// setCancellableInterval(callback, delay, param1, param2);
// setCancellableInterval(callback, delay, param1, param2, /* … ,*/ paramN);
// You are recommended to read up on for setInterval on MDN Docs if you are unfamiliar.

// Examples
// let i = 0;
// t = 0:
// const cancel = setCancellableInterval(() => {
//   i++;
// }, 10);
// t = 10: i is 1
// t = 20: i is 2
// cancel(); // Called at t = 25
// t = 30: i is still 2 because cancel() was called and the interval callback has stopped running

/**
 * @param {Function} callback
 * @param {number} delay
 * @param {...any} args
 * @returns {Function}
 */
export default function setCancellableInterval(callback, delay, ...args) {
    const cancelId = setInterval(callback, delay, ...args);
    return () => clearTimeout(cancelId);
  }
