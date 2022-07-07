/*
Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.

If you need help, here's a reference:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

*/

let take = (arr, n) => arr.slice(0,n)

//problem: return the arr to element of n

//PREP --- 

//parameters: the params we are receiving are an array and a number. 
//return: what we want returned is another array
//example: [0,1,2,3,4], 2 = [0,1]
//pseudo: using the slice(elem1, elem2) -- we can slice an array starting at elem1, and ending at elem2