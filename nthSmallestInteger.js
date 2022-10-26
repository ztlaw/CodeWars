/*
Given an array of integers , Find the Nth smallest element in this array of integers.

Notes
Array/list size is at least 3 .

Array/list's numbers could be a mixture of positives , negatives and zeros .

Repetition in array/list's numbers could occur , so don't Remove Duplications .

nthSmallest({3,1,2} ,2) ==> return (2) 
nthSmallest({15,20,7,10,4,3} ,3) ==> return (7) 
nthSmallest({15,20,7,10,4,3} ,3) ==> return (7) 
nthSmallest({177,225,243,-169,-12,-5,2,92} ,5) ==> return (92)  
*/

//only given an array of different integers. there will be repeated integers., also integers can be positives and negatives and zeroes. we are also given an integer as the 2nd param. this integer will identify the Nth smellest number in the array

//the return must be the Nth smallest number in the array (2nd arg), this return will be in the form of an integer, which wil be taken from the array (1st param)

function nthSmallest(arr, num) {
    //sort arr first in ascending order
    //find nth num -> num -1
    return arr.sort((a, b) => a - b)[num - 1]
    //this sort is lexigraphical - meaning they're sorted as STRINGS in UTF-16, 
  }
  
  console.log(nthSmallest([177, 225, 243, -169, -12, -5, 2, 92], 5), 92)
  console.log(nthSmallest([15, 20, 7, 10, 4, 3], 3), 7)