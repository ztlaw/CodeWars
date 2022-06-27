/*
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/

function XO(str){
 let strArr = str.toLowerCase().split('');
  let x = strArr.filter( a => a == 'x');
  let o = strArr.filter(a => a == 'o');
  if(x.length == o.length) return true
  else return false

}


//problem: we are given a string of letters which include x and o's, which will be case insensitive.
//return true if there are the same amount of x's and o's, and false if there are not the same. 

//PREP ---
//parameters: the parameters we are given in this function is a string of letters
//return: the returns of this function will be a boolean true or false. we can use a ternary operator to return true or false.
//example: 'xxxoooxoxo' would return true because there are 5 X's and 5 O's. 
//example: 'xox' would return false because there are 2 X's and 1 O.
//example: 'xoxomasdkasd' would return true because the function only accounts for X's and O's
//pseudo: we want something to count the number of x's and o's, so we need to ++ everytime we see 
//x or o
