/* You were camping with your friends far away from home, but when it's time to go back, 
you realize that your fuel is running out and the nearest pump is 50 miles away! You know 
that on average, your car runs on about 25 miles per gallon. There are 2 gallons left. 
Considering these factors, write a function that tells you if it is possible to get to the 
pump or not. Function should return true (1 in Prolog, NASM and COBOL) if it is possible and
 false (0 in Prolog, NASM and COBOL) if not. The input values are always positive. */



 //problem, given three arguments, return TRUE or FALSE.

//pseudo/solution - Given three arguments, return true or false 
//conditions.. distanceToPump(a) should be < mpg(b) AND fuelLeft(c)..
//c < a*b
// example.. distanceToPump(50) must be less than mpg(25) times fuelLeft(2),
// if yes,return true. if no, false

const zeroFuel = (a, b, c) => a <= b*c ? true : false