/*
Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
Examples

    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2


*/

// function digital_root(n) {
//   if(n.toString().length !=1){
// n.toString().split('').map(Number).reduce( (a,b) => a+b,0)
// } return n
//   }
  
  
  //let newN = n.toString().split('').map(Number).reduce( (a,b) => a+b,0)
/* let digits = n.toString().split('');
 let newN = digits.map(Number);
 let sum = newN.reduce( (a,b) => a+b,0 );
 return sum
 }
}*/

//problem -- we are given a large valued number. we must must find the sum of the values until the sum is 
//a single digit

//PREP --- 
//parameters: the parameter we are given in this function is a number
//return: what we want returned is a single digit number only. this would be done by summing the 
//digits each time they are over 1
//example: 955 = (9+5+5) 19, 19 = (1+9) 10, 10 = 1
//example: 76 = 7+6= 13, 1+3= 4
//pseudo: we are given a number. in order to find the sum of that number, 
//we gotta split into an array, and use reduce method. 
//however, if the length of the sum is >1 , we reduce again until the sum.length =1 



function digital_root(n) {
    return (n - 1) % 9 + 1;
  }
  
  //solution used