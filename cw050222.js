/*
I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.
*/



//problem: return the sum of TWO arrays. array + array
//example: [5,3,4], [6,3,9] = 12 + 18 = 30

//pseudo, solution: 
//1,given two arrays, find the sum of both arrays together. first.. use reduce method to return array sum
//2, next, return sums added together.

let arrayPlusArray = (arr1, arr2) => arr1.reduce( (a,b) => a + b, 0) + arr2.reduce( (a,b) => a+b, 0)