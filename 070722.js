/*
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
Example

"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
*/


// function duplicateCount(text){
//   let array = text.toLowerCase().split('')
//   let count = 0
//   for(let i = 0; i < array.length; i++){
//     if (array.indexOf(array[i]) !== array.lastIndexOf(array[i])){
//      console.log(array.indexOf(array[i]))
//       count++
//    } 
//   } return count/2
// }
//problem: we are given a string, we must return the NUMBER of LETTERS that are repeated.

//PREP --- 

//parameters: the parameters we are given in this function is a string only. we will either 
//split the string into an array, or use string methods. it will be case insensitive
//return: what we want returned is a number: so that means we want a counter to go ++ when a letter
//is repeated
//example: 'people' = 1 because there is 1 'e' element that occurs TWICE. 
//example: 'balloon' = 2 because there are 2 elements that appear more than once, "o" and "l".
//pseudo: String.indexOf() returns the number of the FIRST index that an element appears/
// String.lastIndexOf() returns the number of the LAST index that an element appears. 
// we can split and use Array.indexOf/lastIndexOf
// let array = text.tolowercase().split('')
//let count = 0
//for (let i = 0; i <array.length; i++)
// if array.indexOf(i) !== array.lastindexof(i){
//count++
// } return count++
// if 

function duplicateCount(text){
  return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
}

//solution: text('ababcde') to lower case, split into array, sort in order
// ('aabbcde'), then join back into string, then match using regex expression . length