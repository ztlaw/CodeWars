/*
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.
Example

For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
*/

// function countPositivesSumNegatives(input) {
//     return ?;
// }

//problem: you are given an array of positive and negative integers,
//return a NEW array with the COUNT of positive integers(length?) and the SUM of negative numbers(reduce?)

//example: [4,5,6,4, -3, -5, -2] = [4, -10]
//example: [1, 1, 1, 1, 1, -6, -12, -2] = [5, -20]

//pseudo/solution:  1, must return a NEW array = declare array variable
//2, for current array, first filter out positive numbers into a new array
//for negatives, 
//3, filter for negative also into a new variable, and reduce method to get sum of negative numbers
// return positive array.length and push into newArr
//return negative sum and push into newArr
function countPositivesSumNegatives(input){
    let newArr = [] //1
    if(input == null || input.length == 0){
      return newArr
    }
    
    let positives = input.filter( x => x > 0) // 2
    let negatives = input.filter( x => x < 0).reduce( (a,b) => a+b, 0 )// 3
    newArr.push(positives.length);
    newArr.push(negatives);
    return newArr;
    
  }
