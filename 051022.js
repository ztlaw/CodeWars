/* Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
 */


function getCount(str) {
    return (str.match(/[aeiou]/gi) || []).length
  }
  
    
  //problem: we are given a string of letters. we must create a function that counts the vowels
  //and returns the number of vowels. all vowels count, but 'y' does not count.
  
  //example: 'hello my name is ztlaw' returns 6 because there are 6 vowels in the string
  //example2: 'pointing' returns 3
  
  //pseudo/solution: since we are given a string, and in the function we are given a vowel count variable
  //we can possibly use a string method to find that. 
  //when a string encounters a vowel, add 1 to vowelsCount.
  //we can use the .match method to match to find the vowel letters
  //and then return .match().length
  //we must also add a [] in an OR statement in case the string is null
  
  
  