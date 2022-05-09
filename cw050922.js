/*
As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

The input to the function will be an array of three distinct numbers (Haskell: a tuple).

For example:

gimme([2, 3, 1]) => 0

2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

Another example (just to make sure it is clear):

gimme([5, 10, 14]) => 1

10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.
 */



//problem: we are given an array with three integers. within those integers we need to return
//the INDEX of the integer that is the median of the three.
//example: if we are given [5,22,3], the returned answer would be 0 because integer 5
//is the number in between the three numbers in the array.
//example2: [7,2,3] = INDEX 2 aka NUMBER 3
//example3: [0,12,45] = index 1 aka number 12

//pseudo/solution: the overall array method needed to find the index of the middle numbers would be
// .indexOf() <-- inside the index, a function or a new array method must be called.

function gimme (triplet){
    return triplet.indexOf(triplet.concat().sort( (a,b) => a-b)[1])
  }