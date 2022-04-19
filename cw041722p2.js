/*
Ben has a very simple idea to make some profit: he buys something and sells it again. Of 
course, this wouldn't give him any profit at all if he was simply to buy and sell it at the 
same price. Instead, he's going to buy it for the lowest possible price and sell it at the 
highest.
Task

Write a function that returns both the minimum and maximum number of the given list/array.
Examples

minMax([1,2,3,4,5])   == [1,5]
minMax([2334454,5])   == [5, 2334454]
minMax([1])           == [1, 1]

Remarks

All arrays or lists will always have at least one element, so you don't need to check the 
length. Also, your function will always get an array or a list, you don't have to check for 
null, undefined or similar.
*/

//problem: an array of numbers are given. you must return the minimum and maximum numbers
//example: [4,2,6,8] must return an array [2,4]
//pseudo/solution: first, sort the items in the array using the sort method. the sort
// method will mutate the original array. after using sort, you can take each index to
//   get the lowest and highest numbebrs

let minMax = arr => {
    arr.sort( (a,b) => a-b)
    let newArr = [arr[0], arr[arr.length - 1]]
    return newArr
  } 

/* 
DRYEST WAY TO WRITE THIS: 

function minMax(arr){
  return [Math.min(...arr), Math.max(...arr)];
}
*/