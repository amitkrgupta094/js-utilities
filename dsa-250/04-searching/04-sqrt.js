/*
# [69. Sqrt(x)](https://leetcode.com/problems/sqrtx/description/)

Given a non-negative integer `x`, return the square root of `x` rounded down to the nearest integer. The returned integer should be **non-negative**  as well.

You **must not use**  any built-in exponent function or operator.

- For example, do not use `pow(x, 0.5)` in c++ or `x ** 0.5` in python.

**Example 1:**

```
Input: x = 4
Output: 2
Explanation: The square root of 4 is 2, so we return 2.
```

**Example 2:**

```
Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.
```

**Constraints:**

- `0 <= x <= 2^31 - 1`
*/

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    // n <-- 1 <sqrt> n
    // 8, 2.8 [0,1,2,3,4...,n]
    // search problem - ls or bs

   // x^2 >= x >= (x-1) ^ 2
    // DRY RUN
    // // x = 9,
    // start = 0, end = 9, mid = 4
    // start = 0, end = 3, mid = 1
    // start = 2, end = 3, mid = 2
    // start = 3, end = 3, mid = 3

    if(x == 1 || x == 0) return x;

    let start = 0;
    let end = x;

    while(start <= end) {
        let mid = Math.floor((start + end) / 2);
        let squareVal = mid * mid;
        let squareValOneOff = (mid + 1) * (mid + 1);
        if(squareVal == x) return mid;
        if(squareVal < x && squareValOneOff > x) return mid;
        else if (squareVal > x) end = mid - 1;
        else start = mid + 1;
    }
};
