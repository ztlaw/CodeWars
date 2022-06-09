/*
Write a small function that returns the values of an array that are not odd.

All values in the array will be integers. Return the good values in the order they are given.
*/

function noOdds( values ){
    return values.filter( num => num % 2 === 0)
   }
   
   //problem: write a function that returns all the EVEN numbers in the array
   
   //PREP --
   
   //parameters: for the parameters, we are given an array with multiple integers. it will only be integers
   //return: what we want returned is an array with the even values returned
   //example: [1,2,3,4,5,6] = [2,4,6]
   //example: [8,23,2,9,2] = [8,2,2]
   //pseudo: since we are given an array, we can use the filter method, and pass in a function
   //that passes the test %2==0