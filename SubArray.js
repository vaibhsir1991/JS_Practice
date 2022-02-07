/*
Subarrays with K Different Integers
Hard

Given an integer array nums and an integer k, return the number of good subarrays of nums.

A good array is an array where the number of different integers in that array is exactly k.

For example, [1,2,3,1,2] has 3 different integers: 1, 2, and 3.
A subarray is a contiguous part of an array.

------------------------------------------------------------------------------------------------
 
Example 1:

Input: nums = [1,2,1,2,3], k = 2
Output: 7
Explanation: Subarrays formed with exactly 2 different integers: [1,2], [2,1], [1,2], [2,3], [1,2,1], [2,1,2], [1,2,1,2]
Example 2:

Input: nums = [1,2,1,3,4], k = 3
Output: 3
Explanation: Subarrays formed with exactly 3 different integers: [1,2,1,3], [2,1,3], [1,3,4].
 

Constraints:
1 <= nums.length <= 2 * 104
1 <= nums[i], k <= nums.length
*/

// Solution

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysWithKDistinct = function (nums, k) {
  if (nums == null || !nums.length || !k) return 0;

  if (nums.length === 1) return 1;

  let uniqueCombinations = [];

  function combinationUtil(arr, data, start, end, index, r) {
    if (index == r) {
      if (
        [...new Set(data)].length === k &&
        uniqueCombinations.every((arr) => arr.join() !== data.join())
      ) {
        uniqueCombinations.push([...data]);
      }
      return;
    }

    for (let i = start; i < end; i++) {
      data[index] = arr[i];
      combinationUtil(arr, data, i + 1, end, index + 1, r);
    }
  }

  for (var i = 1; i <= nums.length; i++) {
    let data = new Array(i);
    combinationUtil(nums, data, 0, nums.length, 0, i);
  }

  return uniqueCombinations.length;
};

subarraysWithKDistinct([1, 2], 1);
