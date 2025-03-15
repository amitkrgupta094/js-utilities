/*
# [344. Reverse String](https://leetcode.com/problems/reverse-string/description/)

Write a function that reverses a string. The input string is given as an array of characters `s`.

You must do this by modifying the input array <a href="https://en.wikipedia.org/wiki/In-place_algorithm" target="_blank">in-place</a> with `O(1)` extra memory.

**Example 1:**

```
Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
```

**Example 2:**

```
Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
```

**Constraints:**

- `1 <= s.length <= 10^5`
- `s[i]` is a <a href="https://en.wikipedia.org/wiki/ASCII#Printable_characters" target="_blank">printable ascii character</a>.
*/


/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

// TC: O(n), SC: O(n)
var reverseString = function(s) {
    let reverseStr = [];
    for(let i = s.length - 1; i >= 0; i--){
        reverseStr.push(s[i]);
    }

    return reverseStr;
};



/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

// TC: O(n), SC: O(1)
var reverseString = function(s) {
    let i = 0, j = s.length - 1;
    while(j >= i){
        let temp = s[j];
        s[j] = s[i];
        s[i] = temp;
        i++;
        j--;
    }

    return s;
};
