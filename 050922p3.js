/*
Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.

Examples:

number([]) // => []
number(["a", "b", "c"]) // => ["1: a", "2: b", "3: c"]
*/



//problem: we are given an array, for each index in the array, we need to add a number
//identifying its position starting a 1
//example: ["a", "b", "c", "d", "e"] must return ["1: a", "2: b", "3: c", "4: d", "5: e"]
//an empty array must return an empty array

//pseudo/solution: since we are given an array, we can use an array method to add into each index
//we would need to add the following into EACH index: "num: " aka the number, a colon, and a space before
//each element. update: can't use forEach because we still need to iterate each number
//maybe we can use the forEach method, and .push each answer into a new array
//maybe can also use the .map method, because it returns a new array without needing to use push

let number = array => {
  let solutions = []
    solutions = array.map((element, index) => `${index + 1}: ${element}`)
  return solutions
}

//solution update, using map, the two parameters built into map are element and then index, 
//using the index, plus using a template literal solves this problem, as map is the iterator instead of
//a for loop, or forEach loop. Must initialize a variable and tie it to the map method keep it
