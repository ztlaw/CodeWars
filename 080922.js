/*

Return the Nth Even Number

Example(Input --> Output)

1 --> 0 (the first even number is 0)
3 --> 4 (the 3rd even number is 4 (0, 2, 4))
100 --> 198
1298734 --> 2597466

The input will not be 0.

*/

let nthEven = (n) => n*2 - 2

//problem: we are given a number(n), we must return the nth even number starting from 0 

//PREP --- 

//parameters: the parameters we are given in this function is a number only
//return: what is returned will be an even number corresponding to the nth argument
//example: nthEven(4) = 6 , // 0, 2, 4, 6
//example: nthEven(6) = 10 , // 0,2,4,6,8,10
//pseudo: n*2 - 2 