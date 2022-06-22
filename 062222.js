/*

In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

Examples:

1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12

The result may contain fives. ;-)
The start number will always be smaller than the end number. Both numbers can be also negative!

I'm very curious for your solutions and the way you solve it. Maybe someone of you will find an easy pure mathematics solution.

Have fun coding it and please don't forget to vote and rank this kata! :-)

I have also created other katas. Take a look if you enjoyed this kata!

*/

function dontGiveMeFive(start, end){
    let arr = []
     for(let i = start; i <= end; i++){
       if(!i.toString().includes('5')){
         arr.push(i)
       }
     } return arr.length
   }
   
   //problem: we are given two arguments, a start and an end number. return the length of numbers in between 
   //both parameters except numbers that have a 5 in it. 
   
   //PREP -- 
   
   //parameters: the parameters we are given in this function are two numbers
   //the first param will always be lower in value than the 2ns param. both can also be negatives
   //return: what we want returned in this function is the length of numbers that fall in between both params
   //the return will always be a number. the params are inclusive to the return
   //example: (9,18) = 10,11,12,13,14,16,17,18 = 8
   //example: (1,10) = 1,2,3,4,6,7,8,9,10 = 9
   //pseudo: to loop through the numbers, we want to use a for loop - i = start; i <= end; i++
   //if the looped number does not include 5 in it, push it into an initialized array. 
   //at the end, return array.length
   