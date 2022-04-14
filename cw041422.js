// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.



//problem: exclamation marks must be taken out of the string. 
//example: 'He!ll!o wor!ld' must be 'Hello world'
//solution/pseudo: when given a string, exclamation marks must be removed.
//can turn string into an array using split method. after, use filter method on array to filter out !=== '!'
//after, join back array into a string

function removeExclamationMarks(s){
    return s.split("").filter(n => n !== '!').join('')
   }