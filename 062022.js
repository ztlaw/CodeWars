
/*
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example (Input --> Output):

39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)

*/

function persistence(num) {
    var times = 0;
    
    num = num.toString();
    
    while (num.length > 1) {
      times++;
      num = num.split('').map(Number).reduce((a, b) => a * b).toString();
    }
    
    return times;
 }
 
 //problem: we are given a number with multiple digits. multiply the digits until a 1 digit number is 
 //the product. return the NUMBER OF TIMES that the numbers were multiplied to get the 1 digit 
 //product. 
 
 //PREP -- 
 
 //parameter: the parameter we are given is a number. 
 //return: what we want returned is the number of times that the arg was multiplied. 
 //we may want to use n++ to count this.
 //example: 762 = 7*6*2(1) = 84, 8*4(2) = 32, 3*2(3) = 6, so we return 3
 //pseudo: first, we are going to want to split the number in order to multiply with it
 // we will need to turn the number into a string, then split, then turn it back into numbers with map and multiply
 