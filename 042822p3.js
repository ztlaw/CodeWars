/*
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F
*/


//problem: given a string of a firstName and a lastName, return the 
//first letter of each name CAPITALIZED with a period in between.
//example: John Sinns = J.S
//example: Becky Morris = B.M

//pseudo/solution: first, since we are given a string, must turn it into 
//an array, by splitting it into an array with the split method.

//after splitting it, we will be given  newArr = ['John', 'Sinns']

function abbrevName(name){
    return name.split(" ").map(a => a[0].toUpperCase()).join(".")
    //next we can map array to get each 0 index.
    //after forEaching the 0 index, join the array together with a period
  
    
   
    
  }