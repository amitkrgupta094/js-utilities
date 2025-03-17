/*
# [49. Group Anagrams](https://leetcode.com/problems/group-anagrams/description/)

Given an array of strings `strs`, group the <button type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:rp:" data-state="closed" class="">anagrams</button> together. You can return the answer in **any order** .

**Example 1:**

<div class="example-block">
Input: strs = ["eat","tea","tan","ate","nat","bat"]

Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Explanation:

- There is no string in strs that can be rearranged to form `"bat"`.
- The strings `"nat"` and `"tan"` are anagrams as they can be rearranged to form each other.
- The strings `"ate"`, `"eat"`, and `"tea"` are anagrams as they can be rearranged to form each other.

**Example 2:**

<div class="example-block">
Input: strs = [""]

Output: [[""]]

**Example 3:**

<div class="example-block">
Input: strs = ["a"]

Output: [["a"]]

**Constraints:**

- `1 <= strs.length <= 10^4`
- `0 <= strs[i].length <= 100`
- `strs[i]` consists of lowercase English letters.
*/


/**
 * @param {string[]} strs
 * @return {string[][]}
 */


// TC: nLogn + n, SC: O(n)
var groupAnagrams = function(strs) {
    const anagramMap = new Map();
    let sortedStrs = strs.map((str) => str.split('').sort().join(''));

    for(let i = 0; i < sortedStrs.length; i++) {
        if(!anagramMap.has(sortedStrs[i])) {
            anagramMap.set(sortedStrs[i], [strs[i]])
        } else {
            let indexArr = anagramMap.get(sortedStrs[i])
            indexArr.push(strs[i]);
            anagramMap.set(sortedStrs[i], indexArr)
        }
    };

    let anagramList = [];
    for(let [k,v] of anagramMap) {
        anagramList.push(v);
    }

    return anagramList;
};
