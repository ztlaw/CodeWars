/*
An AI has infected a text with a character!!

This text is now fully mutated to this character.

If the text or the character are empty, return an empty string.
There will never be a case when both are empty as nothing is going on!!

Note: The character is a string of length 1 or an empty string.
Example

text before = "abc"
character   = "z"
text after  = "zzz"

*/

function contamination(text, char){
    return char.repeat(text.length)
  }
  
  //PROBLEM: we are given two parameters, where we must take the first parameter and replace all letters in the string
  //with the 2nd parameter. we are returning the new string. 
  
  //parameters: there are two parameters -- both will be strings.
  //the first parameter is a string of 1 or more elements
  //the 2nd parameter is a string of only 1 element.
  
  //return: what we want returned is the new string.
  //however, if the string is empty, return the empty string
  
  //example: contamination('billybob', 'j') returns 'jjjjjjjj'
  
  //pseudo: we can use the 2nd char, and use the repeat method to repeat the same character as many times as the length of the 
  //first param
