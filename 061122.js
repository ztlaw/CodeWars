/*
Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"

*/

function spinWords(words){
    return words.split(' ').map(function (word) {
      return (word.length > 4) ? word.split('').reverse().join('') : word;
    }).join(' ');
  }
  
  
  //problem: we are given a string, return the string, but any word with 5 or more letters must be 
  //reversed. 
  
  //PREP ---
  //paremeters: the parameters were given in this function is a string containing one or 
  //more than 1 word.
  //return: what we want returned is the same string, however any word in the string
  //that has more than 5 letters must be reversed. 
  //exaample: 'this is an example' should return 'this is an elpmaxe'
  //example: 'hello i am small' should return 'olleh i am llams'
  //pseudo: we can first split the string into an aray.
  //after splitting, we can use the map method
  //if the length of str >= 5, str.reverse 