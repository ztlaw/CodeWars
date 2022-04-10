/*Write a function that returns a string in which firstname is swapped with last name.

nameShuffler('john McClane'); => "McClane john" */


// function nameShuffler(str){
//   //Shuffle It
// }

//Problem: a string with two names is passed, the names need to be reversed
//solution/pseudo: string can be split with split method on the " ", afterwards, can use reverse method to reverse the index numbers from last to first?

let nameShuffler = str => str.split(' ').reverse().join(' ')