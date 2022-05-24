/*
An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.
Examples

    "foefet" is an anagram of "toffee"

    "Buckethead" is an anagram of "DeathCubeK"

*/

// write the function isAnagram
// let isAnagram = (strA, strB) => strA.includes(strB) && strB.includes(strA) ? true : false


//problem: we are given two parameters, return true if the two parameters are anagrams of each other(contain
//all the same letters as each other), and return false if they are not anagrams of each other.

// PREP -- 
// P Parameters: the parameters we are given for this function are strings. We are not given numbers
//or booleans.
// R Return: Only a boolean must be returned, true or false. 
// E Example: ('anagram', 'granama') = true
// ('grief', 'super') = false
// P Pseudo: Firstly, since we only are returning a true or false, we can use the ternary operator in a 
//arrow function. Since we are looking to see if one string includes the other string, we can use the
//includes method. Ex: Does stringA include stringB? if so, return true, else return false

// After looking at solutions, the best way to solve this is to split the strings into an array, 
//then sort the array, and join it back into a string. after joining it back into a string, use == to compare
// the strings and return true or false

function isAnagram(strA, strB){
    let a = strA.toLowerCase().split('').sort().join('')
    let b = strB.toLowerCase().split('').sort().join('')
    return a == b ? true : false
  }