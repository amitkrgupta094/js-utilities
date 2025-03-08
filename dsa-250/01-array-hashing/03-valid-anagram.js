/*
# [242. Valid Anagram](https://leetcode.com/problems/valid-anagram/description/)

Given two strings `s` and `t`, return `true` if `t` is an <button type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:rp:" data-state="closed" class="">anagram</button> of `s`, and `false` otherwise.

**Example 1:**

<div class="example-block">
Input: s = "anagram", t = "nagaram"

Output: true

**Example 2:**

<div class="example-block">
Input: s = "rat", t = "car"

Output: false

**Constraints:**

- `1 <= s.length, t.length <= 5 * 10^4`
- `s` and `t` consist of lowercase English letters.

**Follow up:**  What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
*/


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// TC: O(n), SC: O(n)
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    let sMap = new Map();
    for(let i = 0; i < s.length; i++) {
        if(!sMap.has(s[i])) sMap.set(s[i], 1);
        else {
            let currentCount = sMap.get(s[i]);
            sMap.set(s[i], currentCount + 1)
        }
    };

    for(let j = 0; j < t.length; j++){
        if(!sMap.has(t[j])) return false;
        let currentCount = sMap.get(t[j]);
        sMap.set(t[j], currentCount - 1)
    };



    for(let [_, value] of sMap){
        if(value) return false;
    };


    return true;
};
