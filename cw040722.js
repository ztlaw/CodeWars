/*Description:

JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

The solution would work like the following:

getEvenNumbers([2,4,5,6]) // should == [2,4,6]
*/

//Problem: Need to filter out the odd numbers from an ARRAY or numbers
//Solution: using filter method, use a conditional that will take out the odd numbers.
// since the filter method returns a new array, still need to use return because it is part of a larger function

//Pseudo: Use filter method on arrays to iterate. Use a conditional like romulus to filter out numbers
// Ex: [1,2,3,4,5,6] should return [2,4,6]
// Ex 2: [3,4,6,9,12,76] should return [4,6,12,76]

let getEvenNumbers = numbersArray => numbersArray.filter(num => num %2==0);