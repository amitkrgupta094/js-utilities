/*
# [283. Move Zeroes](https://leetcode.com/problems/move-zeroes/description/)

Given an integer array `nums`, move all `0`'s to the end of it while maintaining the relative order of the non-zero elements.

**Note**  that you must do this in-place without making a copy of the array.

**Example 1:**

```
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
```

**Example 2:**

```
Input: nums = [0]
Output: [0]
```

**Constraints:**

- `1 <= nums.length <= 10^4`
- `-2^31 <= nums[i] <= 2^31 - 1`

**Follow up:**  Could you minimize the total number of operations done?
*/


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// O(n*n), O(1)
var moveZeroes = function(nums) {
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === 0) {
            for(let j = i + 1; j < nums.length; j++){
                if(nums[j] !== 0) {
                    nums[i] = nums[j];
                    nums[j] = 0;
                    break;
                }
            }
        }
    }
    return nums;
};


// TC: O(n), SC: O(1)
var moveZeroes = function(nums) {
    let nonZeroNumCount = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== 0) {
            let temp = nums[i];
            nums[i] = 0;
            nums[nonZeroNumCount] = temp
            nonZeroNumCount++;
        }
    }
    return nums;
};
