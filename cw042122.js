//problem: you are given a number. each digit in the number must be squared and then concatenated 
//together
//example: 4285 = 4,2,8,5 = 16,4,64,5 = 164645
//example: 35 = 3,5 = 9,25 = 925
//pseudo.solution: when given a number,
//first, split the numbbers into an array [3,5]
//then square each digit in the array using map [9,25]
//then join array using .toString? 

function squareDigits(num){
    return  +num.toString().split('').map(x => x*x).join('')
     
   }
   