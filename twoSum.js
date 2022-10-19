/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

  */

//find the two elements in the array that add up to the target number
//return the index numbers of the elements

//parameters are the number array and target 
//with numbers, must be numbers (data type) only inside the array, no strings, no funny biz, no booleans. e.g [1,4,6,8,2]
//the target param is also a number, no funny biz. e.g 5

//return should be the INDEX of the elements that add to the target number, each index can be in different positions, does not have to be in any certain order -- e.g [0,1]
//return should be inside an array


let twoSum = (array, target) => {
    //first loop through the first element to find the first element
    for(let i = 0; i <= array.length; i++){
  
      //create second loop that finds the next element to add
      for(let j = 0; j <= array.length; j++){
        //now compare the two loops through each other using if statment
       if(array[i] + array[j] === target){
         return [i,j]
       }
      //this is the brute force way, displaying O(n^2) complexity.
    
      }
    }
  }
  
  console.log(twoSum([1,4,5,6,7,8], 6), [0,1])
  console.log(twoSum([3,6,7,2], 13), [1,2])