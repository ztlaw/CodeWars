
/* Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

For example:

solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
solution(null); // should return [] */

//Problem: Numbers in an array need to be sorted, but if the array is empty,
// return the empy array instead.

//Solution: use sort method on array, but also use conditional to return itself
// if it is an empty array

let solution = nums => {
    return (nums || []).sort( (a,b) => a-b )
   }
   
   
//must have return even with arrow function in order to deeply define