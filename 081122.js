/*

Some new animals have arrived at the zoo. The zoo keeper is concerned that perhaps the animals do not have the right tails. To help her, you must correct the broken function to make sure that the second argument (tail), is the same as the last letter of the first argument (body) - otherwise the tail wouldn't fit!

If the tail is right return true, else return false.

The arguments will always be non empty strings, and normal letters.
*/


let correctTail = (bod, tail) => bod[bod.length -1] === tail


//problem: the last letter of the first argument MUST === the second argument to return a boolean

//PREP --- 

//parameters: we are given two parameters that are both strings. we will be using string methods and 
//comparing the two against each other to achieve a result

//return: the return of the function will be a boolean -> boolean can use arrow function with ternary operator ? 

//example: correctTail('grav', 'g') = true
//example: correctTail('grav', 'j') = false

//pseudo: find the last letter of the first arg using arg1[arg1.length -1] to auto-get the last index.
//use the ternary operator to compare the two