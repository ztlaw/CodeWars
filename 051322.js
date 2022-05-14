/*
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
Examples:

Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321

*/


//problem: we are given a number, we need to return the number with its own numbers in descending order. 

//PREP --

// P Parameter - using the number (n) as the only parameter. this function only takes non-negative integers
//no strings, no booleans. 
// R Returns -- the return of this function should be the same argument put in, but with its numbers sorted in descending order
//with the highest first to the lowest
// E Example - 47294 should return 97442
// 3847 should return 8743
// P Pseudo - since we are given a string number, we can turn the number into an array using the split method.
//once it is split into an array, we can use the sort method on the array, and then join the array back to a number 

function descendingOrder(n){
    return +n.toString().split('').sort().reverse().join('')
   }