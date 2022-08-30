/*Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

Example:

'acb' --> 'bca'
'aabacbaa' --> 'bbabcabb'
*/

//problem: we are given a string that only consists of a, b, and c letters. switch every occurrence of the b and a, and leave the letter c alone 
//PREP --
//parameters: for this, we are given a string parameter only. these strings will only contain a, b, or c. 
//return: what we want returned here is the same string, but with every occurrence of a and b switched. 
//example: 'bbbbbca' will return 'aaaaacb'
//example: 'abc' will return 'bac'
//pseudo: 

/* we are first given a string. we want to loop through each element. if that element is an a, switch it to 'b' -- if the element is a b -- switch it to a 
we can use a for loop (i = 0; i <= arg.length; i++) -- inside this loop, if the element is an 'a', switch to b

instead of looping, we can split into an array, and map the function using if statements above. then, join back together into a string

 */


let strReplace = string => {
    return string.split('').map( letter => {
        if(letter == 'a') return 'b'
        if(letter == 'b') return 'a'
        if(letter == 'c') return 'c'
    }).join('')

}