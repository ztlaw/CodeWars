/* 
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
*/

//problem: given two arguments in a function, return true IF(conditional?) the second
//argument has part of the first argument in it. both arguments will be strings.

//example: ('father', 'ther' ) = true
//example: ('mother', 'bacon') = false

//pseudo/solution: use conditional if/else statements? if str2.endsWith(str1), return true
//else, return false. maybe can use ternary operator
//ternary operator (?) is shorthand for a true/false statement

let solution = (str, ending) => str.endsWith(ending) ? true: false
