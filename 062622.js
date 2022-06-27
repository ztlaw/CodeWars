/*
You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.
Examples

[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)


*/

function findOutlier(integers){
  //your code here
  let array1 = integers.filter( a => a%2 == 0);
  let array2 = integers.filter( a => a%2 !== 0);
  return array1.length === 1 ? array1[0] : array2[0]
}

//problem: we are given an array of integers, whose elements may be all EVEN or ODD except ONE.
//we must return the integer that is not like the rest. 

//PREP ---

//parameters: the parameters we are given are one array full of integers. 
//return: the returned value will be the number that is not like the others. if all elements are even,
//return odd. if all elements are odd, return even.
//example: [1,2,3,5,7,9,11] returns 2 because two is the only number that is not ODD
//example: [2,4,6,8,10,11,12,36] returns 11 because 11 is the only number that is not EVEN
//pseudo: we are given an array of integers, so we want to filter that array out somehow to take the number that is not like the others
//how do we find if a number is not liek the others? 
//let array1 = array.filter( get even)
//let array 2 = array.filter ( get odd)
//does array1.length === 1? return array1[0] : array2[0]