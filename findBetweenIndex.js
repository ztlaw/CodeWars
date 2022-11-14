/*
You need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

The input to the function will be an array of three distinct numbers.

For example:

gimme([2, 3, 1]) => 0
2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

Another example (just to make sure it is clear):

gimme([5, 10, 14]) => 1
10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.
*/

//we are given an array with three elements, we must RETURN the INDEX of the middle number

//we will be given an array full of numbers. 3 numbers only which are distinct -> no one number will be repeated more than once. array elements will only be numbers

//we want to return the index of the numerical element that sits in between the two elements 
// [0,2,1] -> 2 because index[2] = 1, and 1 is the number that sits in between 0 and 2.

//gimme([7,12,1]) -> 0 -> 7 (index[0]) falls in between the numbers 1 and 12. 
//we want to look at each number and compare them to the other numbers in the array aka a for loop
//but we dont want the Math.max or Math.min numbers, we want the number in the middle. 
let gimme = array => {
    let sorted = [...array].sort((a, b) => a - b)
    return array.indexOf(sorted[1])
  
  }
  
  
  console.log(gimme([12, 0, 7]), 2)
  console.log(gimme([2, 1, 3]), 0)
  console.log(gimme([75, 99, 6]), 0)