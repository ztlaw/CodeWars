/*
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
*/

//turn a string into a string of parentheses - if a letter has a duplicate, return ')', however if the letter has no duplicates, return '('

//we are given a string of letters. capitalized letters should also count as a duplicate to its lowercase counterpart s == S, f == F. we can also be given numbers, but same rule if its duplicates. no other funny biz, no empty strings

//what we want returned in this statement is a string of parentheses
// duplicate letters = ) and original letters = (

/*
  function parenthify(string) {
  //first, turn string into array using split.
  let newString = string.toLowerCase().split('')
  //use tolowercase to equalize uppercase and lowercase
  //now string is array. map through array = elem => toUpperCase indexOf === lastIndexOf ? ) : (

  return newString.map(elem => {
    if (newString.indexOf(elem) === newString.lastIndexOf(elem)) {
      return '('
    } else return ')'
  }).join('') //join array back into string
}
*/

//using one-liner with best complexity vv
let parenthify = string => string.toLowerCase().split('').map(elem => string.indexOf(elem) === string.lastIndexOf(elem) ? '(' : ')' ).join('')



console.log(parenthify('doggo'), '())))') 
console.log(parenthify('(((('), '))))') 