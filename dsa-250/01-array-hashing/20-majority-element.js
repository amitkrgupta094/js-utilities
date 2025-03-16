/*
# [229. Majority Element II](https://leetcode.com/problems/majority-element-ii/description/)

Given an integer array of size `n`, find all elements that appear more than `⌊ n/3 ⌋` times.

**Example 1:**

```
Input: nums = [3,2,3]
Output: [3]
```

**Example 2:**

```
Input: nums = [1]
Output: [1]
```

**Example 3:**

```
Input: nums = [1,2]
Output: [1,2]
```

**Constraints:**

- `1 <= nums.length <= 5 * 10^4`
- `-10^9 <= nums[i] <= 10^9`

**Follow up:**  Could you solve the problem in linear time and in `O(1)` space?
*/


/**
 * @param {number[]} nums
 * @return {number[]}
 */

// TC: O(n), SC: O(n)
var majorityElement = function(nums) {
    let numsFrequencyMap = new Map();
    let sizeLimit = Math.floor(nums.length/3);
    let majorityElementArr = [];

    for(let num of nums){
        if(!numsFrequencyMap.has(num)) {
            numsFrequencyMap.set(num, 1);
        } else {
            let currentNumFrequency = numsFrequencyMap.get(num);
            numsFrequencyMap.set(num, currentNumFrequency + 1)
        }
    };


    for(let [key, value] of numsFrequencyMap) {
        if(value > sizeLimit) majorityElementArr.push(key)
    };


    return majorityElementArr;



};
