/*
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
Examples

"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"

*/

function reverseWords(str) {
    return str.split(' ').map(s => s.split('').reverse().join('')).join(' ')
   }
   
   
   //problem: we are given a string of words, in this string of words, 
   //each word needs to be reversed
   
   
   //PREP --
   
   // P Parameters: the parameter we are given is a string of multiple words
   //we can be given a number, but in a string form. booleans will not work
   //for this function.
   //R Return: The returns of this function should be a string, however each word should
   //be reversed, but still in the same word order
   //E Example: 'hello my name is' should return 'olleh ym eman si'
   //'myspace' should return 'ecapsym'
   //P Pseudo: since are given a string, we can use a string method like reverse, however
   //using reverse would also reverse the order of words. we must first separate the strings by the space
   //then we can use an array method like forEach to reverse each word. then join the array together
   
   