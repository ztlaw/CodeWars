/* 
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
Examples

highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"

Notes

    All numbers are valid Int32, no need to validate them.
    There will always be at least one number in the input string.
    Output string must be two numbers separated by a single space, and highest number is first.

*/




//problem: You are given a string of numbers separated by spaces. You must return the
//HIGHEST number AND LOWEST number separated by a space. 
//example: ("12,3,9,25") = "25 3"
//example: ("5, -3, 1") = "5 -3"

//solution/pseudo: possibly use string.sort? sort lowest to highest, and then 
//return the last number(highest) and first number(lowest)

//after research, i can use string.split to split into array, then sort from lowest 
//to highest, then return the last and first numbers using a template literal

// let highAndLow = numbers => {
//   numbers.split(" ").sort( (a,b) => b-a);
//   return `${numbers[numbers.length-1]} ${numbers[0]}`
// }

//got first try wrong: looked at solutions and used Math.min/Math.max in return
//instead of template literal. didn't even need to use sort, as math methods will
//sort for you. also used (...rest) arguments.

let highAndLow = numbers => {
    numbers = numbers.split(" ");
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`
  }
  
  
  
  