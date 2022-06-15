/*
our goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]

If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]

*/

function arrayDiff(a, b) {
    return a.filter( num => !b.includes(num))
   }
   
   //problem -- we are given two arrays, we must subtract all occurrences of 
   //arrayB in arrayA. we must return an array.
   
   //PREP -- 
   //parameter: the parameters that we are given are two arrays.
   //return: what we want returned in this function is an array that has subtracted
   //arrayB from arrayA.
   //example: [1,5,6,5,3], [5] should return [1,6,3]
   //example: [6,6,7], [6] should return [7]
   //pseudo: we can use the filter method filtering out anything arrayB[0]