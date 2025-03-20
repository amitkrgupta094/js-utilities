/*
# [128. Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence/description/)

Given an unsorted array of integers `nums`, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in`O(n)`time.

**Example 1:**

```
Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is `[1, 2, 3, 4]`. Therefore its length is 4.
```

**Example 2:**

```
Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9
```

**Example 3:**

```
Input: nums = [1,0,1,2]
Output: 3
```

**Constraints:**

- `0 <= nums.length <= 10^5`
- `-10^9 <= nums[i] <= 10^9`
*/


/**
 * @param {number[]} nums
 * @return {number}
 */

// TC: nlogn + On, SC: O(n)
var longestConsecutive = function (nums) {
    nums.sort((a, b) => a - b);

    console.log(nums, 'nums')

    let longestSequenceLength = 0;
    let currentCount = 1;
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] == nums[i + 1]) continue;
        if (nums[i + 1] - nums[i]  === 1) {
            currentCount++;
        } else {
            longestSequenceLength = Math.max(longestSequenceLength, currentCount);
            currentCount = 1;
        }
    }

    return longestSequenceLength;
};
