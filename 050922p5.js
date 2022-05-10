/*
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.

*/

function disemvowel(str) {
    return str.replace(/[aeiou]/gi, "")
   }
   
   //problem: we are given a string of multiple words. We need to take out the vowels of each word and return the string
   //with no vowels
   //example: 'HELLO MY NAME IS ZTLAW' = 'HLL MY NM S ZTLW'
   //example2: 'What are we doing' = 'Wht r w dng'
   
   //pseudo/solution: since we are given a string, use the replace method in order to take out the 
   //vowels of the string.
   //replace(a,b) == 
   //a = replacement queries "what do you want to replace?"
   //b = "what do you want to replace it with? "