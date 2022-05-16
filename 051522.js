/*
Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.
Examples

"4556364607935616" --> "############5616"
     "64607935616" -->      "#######5616"
               "1" -->                "1"
                "" -->                 ""

// "What was the name of your first pet?"

"Skippy" --> "##ippy"

"Nananananananananananananananana Batman!"
-->
"####################################man!"

*/

// return masked string
function maskify(cc) {
    return cc.slice(0, -4).replace(/./gi, '#') + cc.slice(-4)
    }
    
    //problem: we are given a string that SHOULD be a number. We need to return the same number, but with every
    //character masked as ####, but only show the last 4 characters. 
    
    // PREP ---
    //P Parameters: we are given a string. the string can be numbers, letters, but no booleans. We can even 
    //receive a string that is empty. 
    
    //R Return: we must be returned a string, however only the LAST FOUR characters must be shown.
    //everything else must be masked with a "#", with a string thats <=4 characters, only return the same characers 
    //with none masked. with an empty string, return the empty string, no masks or characters
    
    //E Example: '4857333333' should return '#########3333'
    // '7644136' should return '###4136'
    // "459" should return '459'
    // "" should return ""
    
    // P Pseudo: there has to be an if/else conditional for items with <=4 characters because they cannot be masked.
    // be masked at all.
    // we can use a string method like replace to replace each character with a #
    
    //we can also split the string into an array. 
    //after splitting into an array, use the forEach
    
    //learned: you can use the slice method, and use a negative index to count from the END insteado f the beginning
    //also using //gi regex expressions. learn about these more
    //g = global
    //i = insensitive case