/*
This time no story, no theory. The examples below show you how to write function accum:
Examples:

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"

The parameter of accum is a string which includes only letters from a..z and A..Z.

*/



//problem: we are given a string, each letter should be typed as many times as their current length in the 
//string.
// PREP --- 
// parameters: we are given a string, which means we wil be performing string methods, or split into an array, use array methods, and join back into a string
// return: what we want returned is a string, but with a dash after each letter in the argument
// also, the first letter after each dash must be capitalized. 
// example: 'AbCdE' returns 'A-Bb-Ccc-Dddd-Eeeee-Ffffff'
// example: 'klPJ' should return 'K-Ll-Ppp-Jjjj'
// pseudo: since we are given a string, we can turn it into an array, and then iterate through the array.
//first, split the string into an array.
function accum(string){
    let arr = string.split('').map( (a,i) => a.toUpperCase() + a.toLowerCase().repeat(i)).join('-');
    return arr
  //next, capitalize each letter of the array with a map loop
  //next, iterate through the array, adding a lower case letter for each elements index+1
    
  }
  