/*
You are given two interior angles (in degrees) of a triangle.

Write a function to return the 3rd.

Note: only positive integers will be tested.

https://en.wikipedia.org/wiki/Triangle
*/


//problem: you have a triangle and are given two degrees. you must use the function
//to calculate the last side. triangle = 180 degrees

//example: angle1 = 75 degrees, angle2 = 75 degrees. use both angles to calcualte the 
// the last angle. 180 - (75+75) = 30

//solution/pseudo: If a triangle = 180 degrees and you are given two degrees, the last angle 
//must be 180 degrees minus both degrees added together.

let otherAngle = (a,b) => 180 - (a+b)