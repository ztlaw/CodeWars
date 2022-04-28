/*
Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

Example: (Input1, Input2 -->Output)

"4",  "5" --> "9"
"34", "5" --> "39"
"", "" --> "0"
"2", "" --> "2"
"-5", "3" --> "-2"

Notes:

    If either input is an empty string, consider it as zero.

    Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1)

*/



//problem: given two integers in the form of STRINGS, add the integers
//together and return them back as a string.

//example: "4","9" should equal "13"
//any string thats not a number should = 0

//solution/pseudo: with strings, "a" + "b" = "ab"
//first turn the strings into numbers with + ? +a + +b = c
//turn c(answer) into a string... c.toString()?
//if its not a number, return 0

function sumStr(a,b){
    return (+a + +b).toString()
    
  }