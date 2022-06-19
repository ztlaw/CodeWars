/*

Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

*/

var countBits = function(n) {
    return n.toString(2).split('0').join('').length;
    };
    
    //problem: we are given a number, we must get its binary representation and return the number of 1's in that 
    //binary code. 
    
    //PREP ---
    
    //parameter: the parameter we are given is a number.
    //return: what we want returned here is a number also. but the number comes from all the 1's
    //added in the binary number that comes from the argument
    //example: 55 should return 110111 which returns 5 since there are five 1's in this binary.
    //PSEUDO: first since we are given a number, we must get its binary representation using toString(2)
    //then we can split it, and join the array of 1's together. 