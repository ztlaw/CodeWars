/*
Given a string, return a new string that has transformed based on the input:

    Change case of every character, ie. lower case to upper case, upper case to lower case.
    Reverse the order of words from the input.

Note: You will have to handle multiple spaces, and leading/trailing spaces.

For example:

"Example Input" ==> "iNPUT eXAMPLE"

You may assume the input only contain English alphabet and spaces.

  */

//we are given a string, we want to transform the string based on the instructions given to us. the instructions are: change the case of every character, reverse the order of the words and return that

//we are given a string that can be multiple words, however it is possible that they have spaces. those will need to be handled.
//what we want returned is the same input but that has been transformed with the instructions given to us. 
//instructions: change the case of each letter to its opposite case. reverse the words in the input. 
// Input Example would return eXAMPLE iNPUT --- DoG Man would return mAN dOg

//first reverse the string by turning into array, then reverse. split, reverse
//use map - if string[i] == string.lowercase, change to uppercase, else change to lowercase
function change(string) {
    // return string.split('').reverse().map(letter => letter == letter.toLowerCase() ? letter.toUpperCase() : letter.toLowerCase())
   
     //split first but based on the space, to get an array of words, then reverse, then join back together in order to get reversed words
    /*
      let reversedStr = string.split(' ').reverse().join(' ');
    return reversedStr.split('').map(letter => letter == letter.toLowerCase() ? letter.toUpperCase() : letter.toLowerCase()).join('')
   } 
   */
   
     return string.split(' ').reverse().join(' ').split('').map(letter => letter == letter.toLowerCase() ? letter.toUpperCase() : letter.toLowerCase()).join('')
   } 
   console.log(change('Dog Man'))
   console.log(change('HeLo mY nAme Is'))