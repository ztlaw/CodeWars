/*

Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

For example, if this array were passed as an argument:

["Telescopes", "Glasses", "Eyes", "Monocles"]

Your function would return the following array:

["Eyes", "Glasses", "Monocles", "Telescopes"]

All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.

*/

function sortByLength (array) {
    return array.sort( (a,b) => a.length - b.length)
  };
  
  //problem: we are given an array of multiple different strings. sort the array so that the strings 
  //in the array are sorted from lowest length to longest length.
  
  //PREP -- 
  
  //P Parameters: The parameter that we are given is one array, with multiple different strings and 
  //string lengths. 
  
  //R Return: The return of this function should be the same array, but mutated, or possibly a different array. 
  //In each array, the strings should be ordered from shortest to longest string. Because we will only
  //be given strings with different lengths, we do not need to decide how to order strings with equal length
  
  //E Example: ['seven', 'mice', 'dog' ] should equal ['dog', 'mice', 'seven']
  
  //P Pseudo: Using the sort method, we can pass in a function that compares each string length.