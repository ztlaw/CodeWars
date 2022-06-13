 /*You live in the city of Cartesia where all roads are laid out in a perfect grid. 
You arrived ten minutes too early to an appointment, so you decided to take the 
opportunity to go for a short walk. The city provides its citizens with a Walk 
Generating App on their phones -- everytime you press the button it sends you an 
array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e'])
. You always walk only a single block for each letter (direction) and you know it 
takes you one minute to traverse one city block, so create a function that will return
 true if the walk the app gives you will take you exactly ten minutes (you don't want
  to be early or late!) and will, of course, return you to your starting point. Return
   false otherwise.
   */

   /*function isValidWalk(walk) {
 if (walk.length == 10){
    walk.sort()
    let arr1 = walk.slice(0,4)
    let arr2 = walk.slice(5,9)
  arr1.length == arr2.length ? true : false
 }else {return false}
} */

//PROBLEM: 1 direction = 1 block, 1 block = 1 minute only.
//we are going on a 10 minute walk. 
//we must return true if the walk will take us back to our starting location 
//we return false if it does not tkae us to the starting location

//PREP -- 

//parameter: the parameter we are given in this function is an array of 1 letter strings
//in order to return true, we want an array with a length of 10 
//return: what we want returned in this function is a boolean. true or false.
//example: ['n','s','n','s','n','s','n','s','n','s'] returns 
// TRUE: 10 in length. same amount of N's and S's
//pseudo: if we want this to return as true
//array.length MUST = 10, same amount of N's and S's,
//or same amount of W's and E's
//if array.legnth == 10 AND same number of w's to e's or n's to s's. 

function isValidWalk(walk) {
    var dx = 0
    var dy = 0
    var dt = walk.length
    
    for (var i = 0; i < walk.length; i++) {
      switch (walk[i]) {
        case 'n': dy--; break
        case 's': dy++; break
        case 'w': dx--; break
        case 'e': dx++; break
      }
    }
    
    return dt === 10 && dx === 0 && dy === 0
  }
  
  