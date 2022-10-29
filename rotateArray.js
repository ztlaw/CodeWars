//how to transpose array --
/*
given a 2d matrix (an array with subarrays) 
ex: [
[1,2,3] , 
[4,5,6] ,  this is a 3 x 3 matrix.
[7,8,9]    
]
 transpose of a matrix is the flipped version of the original matrix. 
 transposing can heppen by switching the rows and columns. 

 transpose by using a for loop inside a for loop

*/

/*let transpose = (array) => {
  for (let r = 0; r <= array.length; r++) { // this loops through the rows aka [1,2,3], [4,5,6], then [7,8,9]
    //now within the row loop, loop through the columns
    for(let c = 0; c < r; c++){ //within this column for loop, change the columns into rows and rows into columns
      //use a variable to temporary store the value thats being replaced
      let tempVariable = array[r][c];
      //turn array[i][j] -> array[j][i] -> switching the rows and columns
      array[r][c] = array[c][r];
      array[c][r] = tempVariable
        
    } 
    
  } 
}
*/
const transpose = arr => {
    for (let i = 0; i < arr.length; i++) { // loop the rows
       for (let j = 0; j < i; j++) { // looping through each subarray aka arr[0] = [1,2,3] so arr[0][0] = 1
          const tmp = arr[i][j]; //for first loop, tmp = arr[row0][col0] aka 1
          arr[i][j] = arr[j][i]; //arr[row0][col0] now = arr[col0][row0]
          arr[j][i] = tmp
       };
    } return arr
 }