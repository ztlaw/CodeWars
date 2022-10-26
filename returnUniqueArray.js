/*
Return the number of unique arrays that can be formed by picking exactly one element from each subarray.

For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].

Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.

solve([[1,2],[4],[5,6]]),4)
solve([[1,2],[4,4],[5,6,6]]),4)
solve([[1,2],[3,4],[5,6]]),8)
solve([[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]]),72)
*/

// for parameters, we are only given an array as the one and only parameter. this array will contain subarrays, containing whole integers only. no funny biz, no decimals or empty arrays. each subarray will have at least 1 number 
//for a return, we want a whole integer -- this integer is going to be the number of arrays that can be made without duplicate numbers. 

function solve(array) {
    //first, take out all duplicates by mapping through the array, each subarray a new Set -- Set takes out duplicates, grab the length
    let noDuplicates = array.map(subArray => [...new Set(subArray)].length);
    //use reduce method to multiply each length by the next value 
    return noDuplicates.reduce((prev, curr) => prev * curr, 1)
  }
  

  // using ES6, one liner -- 
  // let solve = array => array.map(subA => [...new Set(subA)].length).reduce( (prev, curr) => prev * curr, 1)
  
  console.log(solve([[1, 2], [4], [5, 6]]), 4)
  console.log(solve([[1, 2], [4, 4], [5, 6, 6]]), 4)
  console.log(solve([[1, 2, 3], [3, 4, 6, 6, 7], [8, 9, 10, 12, 5, 6]]), 72)