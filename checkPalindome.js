/*
Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward.

    For example, 121 is a palindrome while 123 is not.

 

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.

  */

//check to see if an integer is a palindrome (reads the same forwards and backwards)
//if the number is a palindrome, return true or else return false

//we'll only be getting a number as a parameter. whole integer. no decimals, so no need to use methods like Math.floor, which could possibly increase complexity. 

//the return of the statement will be a boolean - true or false only. true if the number reads the same forwards and backwards, false if not. 

/*

function checkPalindrome(integer) {
  //using if conditional statement, see if the num = the num.reversed -- 
  //in order to reverse num, must use methods -- split, reverse, join
  if (integer === +integer.toString().split('').reverse().join('')) {
    //if yes, return true
    return true
    //if not, return false
  } else return false
}

if using ES6, can use arrow functions, ternary operator

*/

let checkPalindrome = integer => integer === +integer.toString().split('').reverse().join('') ? true : false
//constant O(1) complexity ?

console.log(checkPalindrome(234312), false)
console.log(checkPalindrome(111111), true)
console.log(checkPalindrome(0), true)

