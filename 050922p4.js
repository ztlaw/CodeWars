/*

Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]

If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]
 */

function arrayDiff(a, b) {
    return a.filter( num => !b.includes(num))
  }
  
  //problem, we are given two arrays, we must find the difference in the arrays and delete any occurrences
  //of that number into the array.
  
  //for example: [2,4,6,9,12], [2] = [4,6,9,12]. as you can see, the occurrences of 2 are deleted
  //example: [2,3,4,4,4,4,4], [3,4] = [2]. all occurrences of 3 AND 4 are deleted
  //pseudo/solution: since we are given two arrays, i think the first step would be to concat
  //both arrays into 1. so [1,2,3], [2,3] = [1,2,2,3,3].
  //step 2: we can use the filter method? using the filter method to only return the 
  //filter method uses a function and returns the elements that FIT that function
  //filter method: how can we use a function that states "only 1 occurrence"
  
  