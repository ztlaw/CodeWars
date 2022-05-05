/* 
Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

*/


//problem: you are given an array of integers. you must multiply the numbers together
//and return the product
//example: [7, 3, 1, 2] = 7 * 3 * 1 * 2 = 42
//example: [1,1,1,100000] = 1 * 1 * 1 * 100000 = 100000

//pseudo/solution: in order to get the sum of an array, reduce is used with a + sign.
//instead of using + in the reduce function, we can use *(multiplication)
//instead of starting the initializer at 0, we start it at 1


let grow = x => x.reduce( (a,b) => a * b, 1)