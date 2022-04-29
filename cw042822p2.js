/*Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative 
or non-integer. If the array does not contain any numbers then you should return 0.
Examples

Input: [1, 5.2, 4, 0, -1]
Output: 9.2

Input: []
Output: 0

Input: [-2.398]
Output: -2.398
Assumptions

    You can assume that you are only given numbers.
    You cannot assume the size of the array.
    You can assume that you do get an array and if the array is empty, return 0.

*/



//problem: given an array of numbers, return the sum of the numbers
//in the array. if given an empty array, return 0
//example: [7, 5.4, 3, 1] = 16
//example: [] = 0

//pseudo/solution: returning the sum of an array uses an array method.
//array sum method = arr.reduce( (acc, c) => acc + c, 0)
//zero is used as a second argument to define where where to begin

// let sum = arr => {
//   if(arr){
//     return arr.reduce( (acc, c) => acc + c, 0)
//   } else {
//     return 0;
//   }
//   } //THIS WORKS !

let sum = arr => arr.reduce( (a,b) => a+b, 0)
  
