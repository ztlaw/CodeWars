/*
Find the number with the most digits.

If two numbers in the argument array have the same number of digits, return the first one in the array.
 */


const findLongest = l => l
  .reduce((a, b) => (`${b}`.length > `${a}`.length) ? b : a);
  
  //problem --- we are given an array of numbers, we must return the number with the most digits
  // if the two numbers have the same amount of digits, retrn the first number in the array.
  
  //PREP ---
  
  // parameter -- we are given an array of numbers. [3,4,74,9]
  // return: what we want returned in this fn is the number with the most digits. if they 
  //have the same amount of digits, just return the first number 
  // example: [5,37,222] returns 222
  // example: [9, 5, 8] returns 9 -- because it is the first number 
  //pseudo: since we are given an array, we can use an array method