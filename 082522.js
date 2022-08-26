/*
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'


*/

let solution = str => str.split('').reverse().join('')

//problem: we are given a string and must return the same string but backwards
//PREP ---

//parameters: the parameters we are given are strings only
//return: what we want returned is a string only
//example: "billy bob" must return "bob yllib"
//red must return der
//pseudo: turn into array with split, reverse array, then join back together