/*

A square of squares

You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.
Task

Given an integral number, determine if it's a square number:

    In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

The tests will always use some integral number, so don't worry about that in dynamic typed languages.
Examples

-1  =>  false
 0  =>  true
 3  =>  false
 4  =>  true
25  =>  true
26  =>  false

*/

// var isSquare = function(n){
//   return false; // fix me
// }

let isSquare = n => Number.isInteger(Math.sqrt(n)) ? true : false

//problem: if the argument in this fx is a square, return true
//if it is not a square, return false

//parameter: the parameter we are given in this function is a number
//return: what we want returned in this function is a boolean. true or false
//if the number is a square, true. if it is not a square, false.
//example: 4 would return true because 2*2 = 4
//example: 25 returns true, 5*5 = 25
//example: 29 returns false because no number can be multiplied with itself to return 29
//pseudo: we can use an arrow function and ternary operator to return the boolean
//ternary operator is shorthand for if/else statements
//conditional: is the square root of n an integer ? true : false 