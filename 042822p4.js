/*
Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so:

findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])

should return "found the needle at position 5" (in COBOL "found the needle at position 6")
*/




//problem: write a function that finds the word 'needle' in an array
//of other words. return the string "found needle at position " plus
//the INDEX it found the needle at 

//example: findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 
// 'randomJunk'])  == 'found needle at position 5' index 5


//solution: all we are trying to find is the index of the word needle
//we would have to iterate the whole string -- looking for the word needle and return
//its index.. using indexOf() method? 

function findNeedle(x){
    let num = x.indexOf('needle')
    return "found the needle at position " + num
  }
  
  