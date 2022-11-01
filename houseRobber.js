/*
You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.

*/

//we are given an input of an array or nums - return the sum of EVERY OTHER integer 

//array -> whole numbers only, can be negative or positive -> always as a number data type. no fuunny biz
// output: sum of every other index starting with zero. return a whole integer as a number data type. 
//[4,3,2,7,4,9] = 20 because although we start at index 0, we want to go to index 3 then 5 for the maximum output.
//solution will always be the last index summed or 2nd to last index summed
//

//use a for loop to iterate through each index => O(n) linear time complexity meaning the more items inside the array, the longer it will take
function rob(nums){
    if(!nums.length) return 0
    if(nums.length === 1) return nums[0]
    if(nums.length === 2) return Math.max(nums[0], nums[1])
    
    for(let i = 2; i < nums.length; i++){
      nums[i] = Math.max(nums[i-2] + nums[i], (nums[i-3] || 0) + nums[i])
    } return Math.max(nums[nums.length - 1] , nums[nums.length - 2])
  }
  
  console.log(rob([4, 3, 2, 7, 4, 9]))