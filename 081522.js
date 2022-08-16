/*
Create a method to see whether the string is ALL CAPS.
Examples (input -> output)

"c" -> False
"C" -> True
"hello I AM DONALD" -> False
"HELLO I AM DONALD" -> True
"ACSKLDFJSgSKLDFJSKLDFJ" -> False
"ACSKLDFJSGSKLDFJSKLDFJ" -> True

In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.
*/

let isUpperCase = string => string === string.toUpperCase() ? true : false

//PROBLEM -- this function tests whether a string is in all caps or not.
//if the string in ALL CAPS, return true, if not, return false

//PREP ---
//parameters: the parameters we are given in this frunction is a string only. This string will consist of uppercaes
// and lowercase elements.
//return: what we want returned here is a boolean --- true or false.
//example: 'heLo mY Name Is' = false
//example: "HELLO" = true
//pseudo: if 'STRING' === 'STRING'.toUpperCase() return true
//else return false
//can use arrow function for implicit return