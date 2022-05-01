/*
You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not.
 */

// function check(a, x) {
//   // your code here
// }

//problem: you are given an array and a value x(can be number or string),
//check whether x(value) is inside a(array). if x IS inside a, return true.
//if x IS NOT inside a, return false

//example: x = 3, value = [4,2,7,1] === FALSE
//example: x = 1, value = ['people', 'things', 1, 'words'] === TRUE

//pseudo, solution: can use the array method .includes.. 
//array.includes(x)

let check = (a, x) => a.includes(x) ? true : false