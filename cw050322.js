/* 
Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

Example:

Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
*/

String.prototype.toJadenCase = function () { 
    return this.split(" ").map(function(word){
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
  }
  
  
  //problem: you are given a string of words. in this string, change the first letter of 
  //every word to upper case, as Jaden Smith would do in his tweets
  //example: 'what are you doing today' = 'What Are You Doing Today'
  //example: "hello there" = 'Hello There'
  //solution: 1, since we are given a string, we have to split the string into an array.
  // 2, return a new array using the map method. turn every index[0] of each word toUpperCase()
  //3, after changing each index[0] of each word toUpperCase, join the array back together
  // using the join method
  
  