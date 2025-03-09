/*
The Function.prototype.apply() method calls the specified function with a given this value, and arguments provided as an array (or an array-like object).

Source: Function.prototype.apply() - JavaScript | MDN

Implement your own Function.prototype.apply without calling the native apply method. To avoid overwriting the actual Function.prototype.apply, implement the function as Function.prototype.myApply.

Examples

function multiplyAge(multiplier = 1) {
  return this.age * multiplier;
}

const mary = {
  age: 21,
};

const john = {
  age: 42,
};

multiplyAge.myApply(mary); // 21
multiplyAge.myApply(john, [2]); // 84
*/


/**
 * Calls the function, substituting the specified object for the this value of the function, and the specified array for the arguments of the function.
 * @param thisArg The object to be used as the this object.
 * @param argArray A set of arguments to be passed to the function.
 * @return {any}
 */
Function.prototype.myApply = function (thisArg, argArray) {
    if (!thisArg) thisArg = {};
    thisArg.fn = this;
    return thisArg.fn(...argArray);
  };
