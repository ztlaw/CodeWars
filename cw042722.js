/*
This function should test if the factor is a factor of base.

Return true if it is a factor or false if it is not.
About factors

Factors are numbers you can multiply together to get another number.

2 and 3 are factors of 6 because: 2 * 3 = 6

    You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
    You can use the mod operator (%) in most languages to check for a remainder

For example 2 is not a factor of 7 because: 7 % 2 = 1

Note: base is a non-negative number, factor is a positive number.
*/



//problem: given two parameters, return true if param1 is a factor of param2.
//example: checkForFactor(5, 50) == true because 5 can be multiplied with another integer to 
//get 50
//example: checkForFactor(3, 19) == false because 3 does not multiply into 19
//a factor is true if the modulus = 0.

//pseudo: must use conditional statement? 
//if factor % base == 0, return true, else return false. 
//can also use arrow statement for an implicit return.

let checkForFactor = (base, factor) => base % factor == 0 ? true : false