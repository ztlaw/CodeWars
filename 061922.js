/*
In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.
Example

alphabetPosition("The sunset sets at twelve o' clock.")

Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )
*/

function alphabetPosition(text) {
    return text.toUpperCase()
    .match(/[A-Z]/g)
    .map( a=> a.charCodeAt() -64) 
    .join(' ')
    
  }
  
  //problem: we are given a string. we must replace the string's letters with their numerical 
  //representation in the alphabet. 
  
  //PREP --- 
  
  //parameters: the parameter we are given is a string. we must either use string methods here, or 
  //a split and array methods.
  //return: what we want returned in this fx is a string that's full of numbers. 
  //example: "The sunset sets at twelve o' clock." should return ---
  // "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
  //pseudo: first, we need to find a way to initialize each letter as a number
  //so 'a'=1, 'b'=2, c='3'... how can we initialize this? 
  //sof: .replace(/[A-Z]/g, m => m.charCodeAt() - 64) -- use replace method on a string/
  //first argument is regex, 2nd arg is a callback fx, we use -64 because A starts at 65
  //A and a, B and b, C and c, etc... have different charCodes , so when using -64, use toUppCase method
  