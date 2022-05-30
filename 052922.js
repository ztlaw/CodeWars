/*
Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.

For Example:

[ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
, [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
, [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
]

So the function should return 26 because the sum of the minimums is 1 + 5 + 20 = 26.

Note: You will always be given a non-empty list containing positive values.

ENJOY CODING :)
 */


//Problem: we are given an array that is nested with other arrays full of integers. We must find the lowest number of each 
// nested array, and return the sum all the lowest numbers. 

// PREP -----

//P Parameter: The parameter we are given will always be true. The parameter will always be an array, that is nested with other arrays in it
//R Return: The return of this function should always be one integer.
//E Example: [ [7,3,2,1] , [9,3,4] , [12,17,0] ] should return --- 1 + 4 + 0 (lowest ints) = 5 (return)
//P Psuedo: We are given the parent array as a parameter and want to perform a function forEach child array.
//Each child array also needs a function for each integer. The child array need to be sort()ed, and we need to take index[0]
//Each index[0] needs to be added together, and its integer returned 

function sumOfMinimums(arr){
    let newArr = arr.map( childArr => childArr.sort( (a,b) => a-b) )
    let smallestNums = newArr.map( arr => arr.shift())
    return smallestNums.reduce( (a,b) => a+b,0)
  }