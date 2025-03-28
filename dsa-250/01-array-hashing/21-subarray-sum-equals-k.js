/**
 *
 * # [560. Subarray Sum Equals K](https://leetcode.com/problems/subarray-sum-equals-k/description/)

Given an array of integers `nums` and an integer `k`, return the total number of subarrays whose sum equals to `k`.

A subarray is a contiguous **non-empty**  sequence of elements within an array.

**Example 1:**

```
Input: nums = [1,1,1], k = 2
Output: 2
```

**Example 2:**

```
Input: nums = [1,2,3], k = 3
Output: 2
```

**Constraints:**

- `1 <= nums.length <= 2 * 10^4`
- `-1000 <= nums[i] <= 1000`
- `-10^7 <= k <= 10^7`
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// TC: O(n^2), SC: O(1)
var subarraySum = function(nums, k) {
    let count = 0;
    for(let i = 0; i < nums.length; i++) {
        let sum = 0;
        for(let j = i; j < nums.length; j++) {
            sum += nums[j];
            if(sum === k) count++;
        }
    };

    return count;
};
