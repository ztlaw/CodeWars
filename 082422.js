/* Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces. */


function getCount(str) {
    const regex = /[aeiou]/gi
   let number = str.match(regex)
   if(!number) return 0
     else return number.length
    
    
   }
   
   //problem - we are given a string, we must return the number count of vowels in the string
   
   //PREP --- 
   
   //parameters: we are given one string, with only lowercase letters and/or spaces
   //return: what we want returned is a number count -- this means we will be using a counter or ++ on a variable
   //example: 'billy bob' = 2 [i, o]
   //example: "hello my name is" = 4
   //pseudo: we want a counted number returned, so we will be using ++ 
   //regex variable for vowels, /"aeiou"/gi
   //use match method with regex as argument
   //return the length of the return