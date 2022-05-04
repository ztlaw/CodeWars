/*
Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

Examples:

Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 1, 0] ==> 6
Testing: [1, 1, 1, 1] ==> 15
Testing: [1, 0, 1, 1] ==> 11

However, the arrays can have varying lengths, not just limited to 4.
*/



//problem: we are given a binary in the form of an array. return the number equivalent of the binary
//example: [0, 0, 0, 1] ==> 1
//example: [1, 1, 1, 1] ==> 15
//example: [1, 0, 1, 1] ==> 11
//solution: the parseInt method turns binary equivalents to a number.
//first, turn the array into a string using the join method.
//2nd, after it is a string, use the parseInt method to turn the binary into a number 
//return the number

const binaryArrayToNumber = arr => parseInt(arr.join(''),2)