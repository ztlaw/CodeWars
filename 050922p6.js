/*
Your task is to find the first element of an array that is not consecutive.

By not consecutive we mean not exactly 1 larger than the previous element of the array.

E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.

If the whole array is consecutive then return null2.

The array will always have at least 2 elements1 and all elements will 
be numbers. The numbers will also all be unique and in ascending 
order. The numbers could be positive or negative and the first
 non-consecutive could be either too!
 */

 function firstNonConsecutive (arr) {
    for(let i = 0; i <= arr.length; i++){
      if(arr[i] + 1 !== arr[i+1]){
        return arr[i+1]
      } 
    } return null
  }
  
  //problem, given an array of integers, return the first element in the array that is 
  // NOT consecurive to the numbers. If the numbers are all consecutive, return NULL 
  //example: [1,2,3,4,6] = 6 because the first number in the array that is NOT consecutive
  // is 6. 
  //example2: [1,2,3,4,5] = null
  //example3: [1,2,3,4,5,6,7,8,9,11] = 11
  
  //pseudo/solution: since we are iterating through an array, we can use the filter method? 
  //filter iterates through the array, returning values that satisfy the function. 
  //if we use filter, we are filtering to find a number that is NOT(!) num+1
  //also need to use an if conditional.. if it filters through the whole array, return null
  
  //post solution update: using arr.length and a for loop can find the answer. must utilize index
  //of numbers
  
  