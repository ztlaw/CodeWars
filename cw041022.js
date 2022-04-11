/* Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.

Examples:
1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
4) n =  12, x = 7, y = 5 => false because  12 is neither divisible by 7 nor 5 */



// Problem: a number(n) must be true if it can be divisible x and y. If not, return false
// Create a function with 3 parameters (n,x,y) that returns a number if its divisible by x,y

// Solution/Pseudo: number(n) must be divisible by both X AND(&&) Y. Maybe using a conditional (ternary operator? true:false)
// return the number if it fits both conditions
  




let isDivisible = (n,x,y) => {
    return  ( n % x === 0 && n % y === 0) ? true : false
   }
   