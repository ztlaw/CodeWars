/*
You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

#Examples:

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"

#Input

A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

#Output

The middle character(s) of the word represented as a string.


*/



//problem: we are given a string of a random length. we must return the MIDDLE letter of the string. 
//example: 'furthermore' = 'e' because it has an odd length.
//example2: if there is an even length, you will be returning two letters
//example2: 'atoned' = 'on' because those two letters fall in the middle of of the string

//pseudo/solution: since we are given a string, we can use an if/else conditional to get the index that we want to 
//return

function getMiddle(s)
{
  if(s.length % 2 === 0){
    return s[(s.length/2 - 1)] + s[(s.length/2)]
  }
  else if(s.length % 2 === 1){
    return s[(s.length/2 - 1/2)]
  }
}

