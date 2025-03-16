/*
# [41. First Missing Positive](https://leetcode.com/problems/first-missing-positive/description/)

Given an unsorted integer array `nums`. Return the smallest positive integer that is not present in `nums`.

You must implement an algorithm that runs in `O(n)` time and uses `O(1)` auxiliary space.

**Example 1:**

```
Input: nums = [1,2,0]
Output: 3
Explanation: The numbers in the range [1,2] are all in the array.
```

**Example 2:**

```
Input: nums = [3,4,-1,1]
Output: 2
Explanation: 1 is in the array but 2 is missing.
```

**Example 3:**

```
Input: nums = [7,8,9,11,12]
Output: 1
Explanation: The smallest positive integer 1 is missing.
```

**Constraints:**

- `1 <= nums.length <= 10^5`
- `-2^31 <= nums[i] <= 2^31 - 1`
*/


// Fails at 173/178

// TC: O(n^2), SC: O(1)

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let minPositiveNumber = Infinity;
    let maxPositiveNumber = -Infinity;
    for(let i = 0; i < nums.length; i++) {
        if(minPositiveNumber > nums[i] && nums[i] >= 0) {
            minPositiveNumber = nums[i];
        }
        if(maxPositiveNumber < nums[i]) {
            maxPositiveNumber = nums[i];
        }
    };
    if(maxPositiveNumber < 0) return 1;
    for(let i = minPositiveNumber === 0 ? 0: 1; i < maxPositiveNumber + 2; i++){
        if(!nums.includes(i)) return i;
    }
};
