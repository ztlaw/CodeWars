/*Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

For example: (Input --> Output)

10 --> 1
99 --> 18
-32 --> 5

*/

function sumDigits(number) {
    return Math.abs(number).toString().split('').reduce(function(a,b){return +a + +b}, 0);
  }