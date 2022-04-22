/* Implement a function which convert the given boolean value into its string representation.

Note: Only valid inputs will be given.
*/



//problem: a boolean value is given. change the boolean value to its string representation
//example: boolean true should equal "true" and boolean false should equal "false"
//solution/pseudo: in order to change the boolean, you can use "string Method".
//can use String(boolean), or can also use boolean.toString(), can also use arrow function for implicit return

let booleanToString = b => String(b)
//also works --- b.toString()