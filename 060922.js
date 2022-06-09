/*
Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

For example:

([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]

*/

function evenNumbers(array, number) {
    return array.filter(a => a%2 === 0 ).slice(-number)
  }
  
  //PROBLEM -- we are given an array and a number as arguments. we have to return the last
  // of even numbers referencing to the NUMBER given to us
  
  //PREP --- 
  //Parameter: The parameters we are given are an array and a number.
  //the array will always have more even numbers than the number argument
  //Return: We want an array of even numbers returned, but the length of the array must equal 
  //the value of the number argument
  //Example: ([4,6,12,5,7], 2) = [6,12] because 2 is the 2nd argument passed. We only want the last
  //even numbers passed, so 4 is ommitted.
  //Pseudo: we can use the filter method to get only the even numbers, then use the slice method with the 
  //number arg to slice from the back of the array
  
  
  
  
   
  