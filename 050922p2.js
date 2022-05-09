/*
You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

For example:

monkeyCount(10) // --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
monkeyCount(1) // --> [1]
*/



//problem: you are given a number (n), populate an array EXCLUDING 0, and add each number 
//up to n into the array. 
//example: n=6, return [1,2,3,4,5,6]
//example 2: n=14, return [1,2,3,4,5,6,7,8,9,10,11,12,13,14]

//solution/pseudo: firstly, we are iterating a number starting at 1, all the way to n
//can use a 'for' loop to iterate, and then .PUSH each number into a new array.
//instead of using a FOR loop, can use a forEach? -- no because forEach is an ARRAY method.
//we are first given a number

let monkeyCount = n => {
    let monkeys = []
    for(let i = 1; i <= n; i++ ){
      monkeys.push(i)
    } return monkeys
  }