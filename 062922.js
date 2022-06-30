
/*Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!
Examples (a, b) --> output (explanation)

(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
*/





function GetSum(a,b)
{
  return (Math.abs(a - b) + 1) * (a+b) / 2;
}

//parameter: we are given two numbers as parameters
//return: waht we want returned is the sum of all numbers in between and the argument numbers
//example: 0,5 = 0+1+2+3+4+5 = 15
//pseudo: math.abs returns absolute value of a number, so order is not as important