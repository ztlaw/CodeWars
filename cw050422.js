/*
Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...

Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8

*/



//problem: given the row number (n) passed as an argument, find the sum of the numbers within the row
//the row corresponds to the number of ODD numbers in each row. find the sum
//example: row: 1 = 1, sum = 1
//example: row 2 = 3, 5, sum = 8
//example: row 5 = 21, 23, 25, 27, 29, sum = 125
//solution: after working the examples, it looks like the answer n to the 3rd power.
//5 = 125, 2 = 8

let rowSumOddNumbers = n => n**3