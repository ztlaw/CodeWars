/*
It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.

getAverage([2,2,2,2]),2)
getAverage([1,2,3,4,5,]),3);
getAverage([1,1,1,1,1,1,1,2]),1)
*/

//return the average number of the array. round down the return to its nearest whole integer.
// in this problem, we'll be receiving an array as its 1 parameter
//inside the array will only contain numbers, no booleans, no string, no other data types other than numbers. 

//return: must be a whole number, which is a number thats rounded DOWN from the average answer. no decimals, no other data types only a number will be returned


let getAverage = numArray => {
    //first, reduce array into one integer sum
    let summedNum = numArray.reduce( (a,b) => a + b, 0 ) 
  
    //use Math.floor to get the sum divided by the length
    return Math.floor(summedNum / numArray.length)
  } //what type of complexity is this? 
  
  console.log(getAverage([1,2,3,4,5]), 3)
  console.log(getAverage([10,12,6,9]), 9)