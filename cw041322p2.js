/* Convert number to reversed array of digits

Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
Example:

348597 => [7,9,5,8,4,3]
0 => [0]
*/




//problem: an array of digits are shown, they need to be reversed 
//example: [4,5,2,6,8,9,2] = [2,9,8,6,2,5,4]
//solution/pseudo: array is given, can be reversed using reverse() method?
//first, array needs to be split, then reversed, then joined back.
//split(""), reverse(), join()

let digitize = n => {
    return String(n).split('').map(Number).reverse()
  }
  