function wordsToMarks(str)
{
  var sum = 0;
  for (let i = 0; i < str.length; i++)
    sum += str.charCodeAt(i) - 96;
  return sum;
}
  //problem: each letter of the alphabet starting with a and ending with z has a value from 1-26 respectivly
  // a=1, b=2, c=3 ... x=24, y=25, z=26
  //add the values of the letters and return the total value.
  
  //PREP --
  
  //parameters: the parameters we are given in this function are a string. the string will need to be split
  //and converted into its number value
  //return: what we want returned is the sum of values from the letters -- a number will be returned
  //example: 'abc' = a, b, c = 1, 2, 3 = 6
  //example:  l + o + v + e = 54
  //pseudo: first, create an object, or array(?) that initializes a letter to its number value
  //pseudo: first, convert string into an array. 
  //use charCodeAt to get the character code and -96 to get the proper value
  //return sum