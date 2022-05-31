/*
Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

Example:

"riley" --> "Hello Riley!"
"JACK"  --> "Hello Jack!"

*/

var greet = function(name) {
    return "Hello " + name.charAt(0).toUpperCase() + name.slice(1).toLowerCase() + "!";
  };
  
  //problem: we must take a string, which is a name and return the phrase
  // 'Hello Name!' -- The name must be capitalized propperly
  
  //P Parameters: We are given a string, so we may be using string methods in this 
  //R Return: What we want returned is the string "Hello Name!" with the capital letters and exclamation point
  //E Example: jonathan = 'Hello Jonathan!'
  //  Example: bILLy = 'Hello Billy!'
  //P Pseudo: for a name, we can first, toLowerCase(), then toUpperCase(str.charAt(0))