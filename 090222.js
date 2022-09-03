/*

Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck!
*/

/*
PREP -- 

parameters: we are given a string as a parameter. this string will not contain any spaces and the input will always be lowercase to begin with. 
return: what we want returned is a string that is alternating in even and odd letters. index[0] is considered even.
example: 'boberson' should return 'BoBeRsOn' -- always capitalizing the even indexes first 
//pseudo: 
*/
/*let capitalize = string => {
    //split the string into an array
    string.split('') // ['s','t','r','i','n','g']
    for(let i = 0; i<=string.length; i+2){
        string[i].toUpperCase()
    }
    return string.join('')
    

}
*/
function capitalize(s){
    const odd = s.split("").map((l, i) => i % 2 !== 0 ? l.toUpperCase() : l).join("");
    const even = s.split("").map((l, i) => i % 2 === 0 ? l.toUpperCase() : l).join("");
    return [even, odd];
  };
