/* 
Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.
Example:

n= 5, m=5: 25
n=-5, m=5:  0
*/



//problem: you are given two parameters to a function. 
// if there are N classmates and each classmate has M pages to print, what is the 
//function to print those pages. negative numbers will result in 0

//example: n=5, m=10 == return 50 pages
//example: n=20, m = -4 == return 0 pages

//solution/pseudo: first, if m OR n values are falsy(0, negative number), return 
// 0. if they are positive integers, return n multiplied by m

let paperwork = (n,m) => n>0 && m>0  ? n*m : 0
