/*

Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

*/

//PROBLEM --- we are given one string of different words, and we need to return the LENGTH of the 
//shortest word. 

// PREP ---

//parameter: the parameter we are given in this problem is one string, but the string is contained
//with multiple words
//return: the LENGTH of the shortest string needs to be returned. so what is returned is a number 
//example: 'this is the string that contains multiple words' should return == 2 because 'is'
//pseudo: first, since we are given one string.. string.split(' ')
//after splitting, we can sort the array elements to length -- .sort( (a,b) => a.length-b.length)
// after sorting, we can return the length of element 0, return arr[0]

function findShort(string){
    let newstr = string.split(' ').sort( (a,b) => a.length-b.length);
    return newstr[0].length
  }