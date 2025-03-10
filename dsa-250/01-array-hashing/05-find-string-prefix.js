/*
# [14. Longest Common Prefix](https://leetcode.com/problems/longest-common-prefix/description/)

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string `""`.

**Example 1:**

```
Input: strs = ["flower","flow","flight"]
Output: "fl"
```

**Example 2:**

```
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
```

**Constraints:**

- `1 <= strs.length <= 200`
- `0 <= strs[i].length <= 200`
- `strs[i]` consists of only lowercase English letters if it is non-empty.
*/


/**
 * @param {string[]} strs
 * @return {string}
 */

// TC: O(1), SC: O(1)
var longestCommonPrefix = function (strs) {
    // O(nlogn)
    let shortedSubstrings = strs.sort((a, b) => a.length - b.length);
    let shortestStrArr = shortedSubstrings[0].split('');

    while (shortestStrArr.length) {
        let foundPrefixString = true;

        for (let i = 1; i < strs.length; i++) {
            let subString = shortestStrArr.join('');
            if (strs[i].indexOf(subString) !== 0) {
                shortestStrArr.pop();
                foundPrefixString = false;
                break;
            }
        };

        if (foundPrefixString) return shortestStrArr.join('')
    }


    return '';

};
