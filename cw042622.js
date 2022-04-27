//problem: you must create a program(function) that takes in an ARRAY
//of strings. if the length of the string = 4, return that name.
//return names with length of 4 into the array.

//example: ['josh', 'james','andy', 'kyler' ]
//solution: ['josh', 'andy']

//pseudo/solution: function will take one parameter (an array). 
//must look through each array and return name if it has 4 letters only
//can use filter to go through each string. filter with .length?

let friend = name => {
    let newFriends = name.filter( n => n.length == 4 )
    return newFriends
   }