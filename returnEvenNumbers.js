/*
Given an array of digital numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

For example:

([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]
*/

//we are given two parameters, and array and a target number. return the last (TARGET NUMBER) of even numbers within the array. 

//for our params, we will be given an array of numbers only, but both negative nad positive integers, there will be at least (target number) even numbers inside the array. no strings, no other data types. For our second param, we will be given a target number (which will be the number of even integers inside our return array). our target number will always be positive.

//our return will be an array of the integers from the first param, in the same order. 
//return will be inside an array, only integers.

function returnEven(array, targetNumber) {
    //first, filter out the array in order to get ONLY the even numbers back
    let newArray = array.filter(num => num % 2 === 0)
    //slice to the index, but since we're getting the last numbers, slice from -(n)
    return newArray.slice(-targetNumber)
  }
  
  
    console.log(returnEven([1, 2, 3, 4, 5, 6], 2), [4, 6])
    console.log(returnEven([7, 4, 2, 8, 12, 16], 1), [16])     