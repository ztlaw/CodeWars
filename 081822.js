/*
Given an array of 3 non-negative integers a, b and c, determine if they form a pythagorean triple.

A pythagorean triple is formed when:
c2 = a2 + b2

where c is the largest value of a, b, c.

For example: a = 3, b = 4, c = 5 forms a pythagorean triple, because 52 = 32 + 42
Return Values

    1 if a, b and c form a pythagorean triple
    0 if a, b and c do not form a pythagorean triple
    For Python: return True or False
    For JavaScript: return true or false


    */

    let isPythagoreanTriple = array => {
        array.sort( (a,b) => a-b);
       if( Math.pow(array[0],2) + Math.pow(array[1],2) == Math.pow(array[2],2) ) return true
        else return false
      
      
      }
      
      
      //problem: we are given an array of integers. if int[0] squared + int[1] squared = int[2] squared, return true
      //if it does not equal, return false. this is the same as pythagorean theorem. a2+b2=c2
      
      //PREP --- 
      
      //parameter: we are given one parameter of an ARRAY. this array will be filled with 3 integers only.
      //we will be using these integers to get a return
      
      //return: what we want returned is a boolean. so we can use an arrow function for an implicit return
      
      //example: isPythagoreanTriple([3,4,5]) = true because 3^2(9)+4^2(16) = 5^2(25)
      
      //pseudo: since we only have one array, we can find its index to do the math.
      //first, use sort method in order to sort from lowest to highest
      
      
      
      
      
      //to square, we can use **2 or Math.pow(number, exponent)