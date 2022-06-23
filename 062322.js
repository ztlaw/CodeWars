/*
You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

Examples:(Input --> Output)

121 --> 144
625 --> 676
114 --> -1 since 114 is not a perfect square

*/

function findNextSquare(sq) {
    let newsq = Math.sqrt(sq)
    if(!Number.isInteger(newsq)){
      return -1
    } else{
      return (Math.sqrt(sq) +1)**2
    }
  }
  
  //problem: we are given a squared number -- we must return the next number that results in a perfect square root
  
  //PREP --- 
  //parameters: the parameter we are given is a large number that is a perfect square, such as 
  //9, 16, 25, 144 -- because they result in a perfect square root
  //return: what we want returned is the next perfect square that results in a square root.
  //if the parameter itself is not a a perfect square, return -1
  //example: (9) should return 16 because 16 is the next perfect square
  //example: 121 should return 144 because 144 sqrt is 12 perfectly.
  //7 should return -1 because 7 itself is not a perfect square
  //pseudo: we are given a number like 121. we need to square root 121, add 1, and square it -- return the squared number
  //if the number !Number.isInteger() return -1 