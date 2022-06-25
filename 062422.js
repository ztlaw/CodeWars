/*
A Narcissistic Number is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

For example, take 153 (3 digits), which is narcisstic:

    1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153

and 1652 (4 digits), which isn't:

    1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938

The Challenge:

Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10. This may be True and False in your language, e.g. PHP.

Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.

*/



//problem: we have to return true or false whether a number is narcisisstic or not
//a narcissistic number is a number where each digit is squared by the length of the number.
//the squared numbers are then added and if it returns as the same original number, it is narcissistic

//PREP -- 
//parameters: the parameters we are given in this function is a positive non-zero number. the number
//will have multple digits 
//return: we want a boolean returned either true or false. 
//example: a number like 153 (3 digit number) returns true because 1^3 (1) + 5^3 (125) + 3^3 (27) = 153
//example: a single digit number like 9 returns true because 9^1 = 9
//example: 44 returns false because 4^2 (16) + 4^2 (16) = 32

//pseudo: we need to split the number
//take each digit of n and Math.pow(num,n.length)
//reduce the new digits to get a sum
//if the summed number = the initial number, return true, else return false

function narcissistic(value) {
    let valueArr = value.toString().split('').map( a => Number(a));
  let value2 = valueArr.map( a => Math.pow(a, valueArr.length)).reduce( (a,b) => a+b,0);
  if(value === value2){
    return true
  } else return false
    
    
    
   
  }