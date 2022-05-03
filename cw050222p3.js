/*

Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []

You can assume that all values are integers. Do not mutate the input array/list.

*/



//problem: given an array of integers, return the negative version of each integer in a new array
//example: [9, 55, -32, 3, 7] = [-9, -55, 32, -3, -7]
//example: [-1, -3, 3, 95] = [1, 3, -3, -95]
//example: [] = []
//pseudo,solution: instructions state to NOT mutate array. instead, return a new array using map method
//can map and just multiply by -1 or -

function invert(array){
    return array.map( num => -(num) )
  }