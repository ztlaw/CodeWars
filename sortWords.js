/*

Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

All inputs will be valid.

last('man i need a taxi up to ubud'), ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']
last('what time are we climbing up the volcano'), ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']
last('take me to semynak'), ['take', 'me', 'semynak', 'to'] 
*/

//we are given a string of words. sort the array alphabetically, but by the final character in each word.

//given a string with words -> no numbers, no empty arrays. 
//return -> array of words, each word sorted
//example "a string of words" => ['a', 'of', 'string', 'words'] a, f, g, s

//first, split string into array
//use sort method. sort the 
//find charcode at
function sortWords(string){
    //  let newString = 
      return string.split(' ').sort( (a,b) => 
        a.charCodeAt(a.length -1) - b.charCodeAt(b.length -1)
      )
     // return newString.sort((a, b) => {
     //    a[a.length -1 - b[b.length -1]]
     //  })
    }
    
    
    
    console.log(sortWords("a string of words"), ['a', 'of', 'string', 'words'])