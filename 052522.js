// Complete the method which accepts an array of integers, and returns one of the following:

//     "yes, ascending" - if the numbers in the array are sorted in an ascending order
//     "yes, descending" - if the numbers in the array are sorted in a descending order
//     "no" - otherwise

// You can assume the array will always be valid, and there will always be one correct answer.




//problem: we are given an array of integers. we should return one of the following depending on the condition
// if the numbers are sorted in ascending order, return "yes, ascending", if in a descending order, return 
// "yes, descending", if not either, return "no".

// PREP ----
// P Parameters: the parameter we are given in this function is always a valid array. and there will always be one 
// correct answer. The array will only consist of numbers. 

// R Return: The return will always be one of the following: 
// "yes, ascending"
//  yes, descending"
// "no"

// E Example: [1,2,3,4,5,6,7] returns "yes, ascending"
// [6,3,7,5] returns "no"
// [9,5,2,1] returns "yes, descending"

//Pseudo: the array numbers do not need to be consecutive to have a descending or ascending order
// we need to compare if the an array is equal to the same sorted array. else/if statements
// if (arr) equals equals arr.sort, return yes ascending
//else if arr equals arr.sort(-), return yes descending
//else return no

// function isSortedAndHow(arr){
//   let arrUp = arr.sort( (a,b) => a-b)
//   let arrDown = arr.sort( (a,b) => b-a)
//   if(arr == arrUp){
//     return "yes, ascending"
//   } else if(arr == arrDown){
//     return "yes, descending"
//   } else{
//     return "no"
//   }
// }

function isSortedAndHow(arr) {
    return arr.every((x,i)=>i==0||arr[i]>=arr[i-1])?'yes, ascending':
           arr.every((x,i)=>i==0||arr[i]<=arr[i-1])?'yes, descending':'no'
  }
  