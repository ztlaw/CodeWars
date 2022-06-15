/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once.
*/

function solution(n){
    let arr= []
    for(let i = 1; i < n; i++){
      if( i%3 === 0 || i%5 === 0){
        arr.push(i)
      }
    }
    let num = arr.reduce( (a,b) => a+b,0)
    return num
    }
  
  //problem: we are given a number as an argument,
  //we need to find all the multiples of either 3 or 5, and sum the numbers together
  //for every number thats BELOW the argument.
  
  //PREP --- 
  
  //parameters: the parameter we are given here is 1 number. we are using this number to find the multiples of 3 or 5
  //return: what we want returned here is the sum of all the numbers under the number argument 
  //example: 16 should return 3+5+6+9+10+12+15 = 60
  //pseudo: first, since we are given a number, we can use a for loop to loop through each number to see if it's divisible
  //by 3 or 5.
  //if the number is divisible by 3 or 5, push it into an initialized array. 
  //after all numbers are pushed into the array, we use the reduce method to find the sum and return it