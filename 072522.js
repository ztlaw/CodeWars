 /*Note: This kata is inspired by Convert a Number to a String!. Try that one too.
Description

We need a function that can transform a string into a number. What ways of achieving this do you know?

Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.
Examples

"1234" --> 1234
"605"  --> 605
"1405" --> 1405
"-7" --> -7

*/

const stringToNumber = string => Number(string)

//problem: we are given a number as a string, we want to convert it back into a number 

//PREP --

//Parameters: we are given a string of a series of numbers. we must turn the string into a number element.
//there are string, booleans, number -- we will be using string methods. 
//Return: what we want returned is a number 
//Example: '455' should return 455
//Psuedo: In order to turn a string into a number, we can use Number(string). If there are any letters, this method will not run
//we can also use a string.split method into an array, and forEach method by turning each string into a number,
//then joining the array back again. 