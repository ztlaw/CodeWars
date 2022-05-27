/*
The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age, oldest age].

The order of the numbers passed in could be any order. The array will always include at least 2 items. If there are two or more oldest age, then return both of them in array format.

For example:

twoOldestAges( [1, 2, 10, 8] ) // should return [8, 10]
*/

// return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(ages){
    let two
    ages = ages.sort( (a,b) => a-b);
     two = ages.splice(ages.length-2, 2)
     
    return two
   }
   
   
   // problem: We are given an array of multiple integers. We need to return the largest TWO numbers in an array. 
   
   // PREP ----
   
   // Parameters: The parameter we are given is only 1 argument.The argument will only be an array, so we can use array methods
   // Return: The return must be an array of the two highest numbers.
   // Example: [7,3,12,5,14,1] should return [12,14]
   // [123,5,7,33,1] should equal [33, 123]
   // Pseudo: First, we will want to initialize a new variable that will be the return variable
   // Next, we need to sort the array from smallest to largest 
   // Next, after sorting the variables, we can use splice method splice the 2nd to last (arr.length-2) element, and use 2 as the 2nd arguemtn to take 2 elements