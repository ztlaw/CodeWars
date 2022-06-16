/*
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.
Examples

[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
*/



function findOdd(A) {
    return A.reduce((a, b) => a ^ b);
  }
  
  //problem: we are given an array of repeating numbers, return the number that repeats an ODD number of times
  //there will always and only be ONE number that does appears an ODD number of times
  
  //PREP -- 
  
  //paremeters: we are given one parameter that is an array. the array will be elements full of repeating numbers
  //return: what we want returned here is the element that has appeared an odd number of times.
  //this element will always be a number
  //example: [1,1,2,2,3,3,4] should return 4, because 4 appears an odd number of time (1).
  //exmaple: [6,6,45,45,9,45,45,9,9] should return 9 since 9 only appears an odd number of times (3)
  //since we are using an array. we can probabably use a filter method. the filter function will only pass
  //if the element repeats % 3 === 0 
  //what function can we use to find repeating elements ?
  //we have to loop through the array using .length
  //we can also use reduce method with the ^ operator 