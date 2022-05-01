/* 
Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6]
*/



//problem: given an array of integers, return the same array but with each value doubled
//example: [5, 10, 12, 2] = [10, 20, 24, 4]
//example: [1, 1, 7, 3] = [2, 2, 14, 6]

//pseudo: solution: using an array method, return the same array but with each number * 2 OR each
//number + the same number

// let maps = n => n.forEach(x => x*2) // this doesnt work -- returns undefined?

function maps(x){
    return x.map(n => n*2) // using map instead DEEPLY returns needed values
  }
