/*
Task:



Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).
Examples:

Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"

Input: [0, -1, -5]
Output: "even"

*/

let oddOrEven = array => array.reduce( (a,b) => a+b,0) % 2 === 0 ? 'even' : 'odd'
  

//problem: given an array, find the sum of the array, and return "even" or "odd" depending 
  //on the sum of the array.
  //if the array is empty, consider it as [0] and return even.
//example: [7,3,1] = 'odd'
  //example: [1,5,9,3] = 'even'
  
//solution: pseudo: first, since we are given an array and need to find the sum, use the reduce method.
//now, using conditionals. if modulus 2 == 0, return EVEN, if modulus 2 == 1, return ODD. 
