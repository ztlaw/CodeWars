/*
It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.
*/

// function getAverage(marks){
//   //TODO : calculate the downward rounded average of the marks array
// }

//problem: given an array, find the mean of the array 
//finding the mean: add all numbers and divide the sum of the numbers by its length. 

//example: [1,5,2,5,2]  = 3. -- 1+5+2+5+2 = 15 / 5(length) = 3

//pseudo: 1, given the array, first find the sum of the array using reduce. initialize into a new vairable
//2, given the sum, now divide the sum by the array.length and return
//since returning the nearest number ROUNDED DOWN, use Math.floor in return statement

function getAverage(marks){
    let sumMarks= marks.reduce( (a,b) => a+b)
    return Math.floor(sumMarks / marks.length)
   }