/*
You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

Note: For 4 or more names, the number in "and 2 others" simply increases.
*/

function likes(names) {
    if(names.length == 1){
      return `${names[0]} likes this`
    } else if (names.length == 2){
      return `${names[0]} and ${names[1]} like this`
    } else if (names.length == 3){
      return `${names[0]}, ${names[1]} and ${names[2]} like this`
    } else if (names.length >= 4){
      return `${names[0]}, ${names[1]} and ${names.length-2} others like this`
    } else {
      return 'no one likes this'
    }
  }
  
  //problem: like a like system on facebook, return "... likes this"
  //depending on the number of people who have liked the post. 
  //0 likes == 'no one likes this'
  //1 like = 'Peter likes this'
  //2 : "Jacob and Alex like this"
  //3 : "Max, John and Mark like this"
  //4 or more: "Alex, Jacob and 2 others like this"
  
  //PREP --- 
  //parameter: The parameters we are given in this function is an array that's filled with 
  //names. 
  //return: what we want returned is a string with the names of the elements
  // along with the "likes this" string concatenated. 
  //example: ['David', 'Felix'] == 'David and Felix like this'
  //example: ['A', 'B', 'C', 'D'] == 'A, B and 2 others like this'
  //pseudo: we can use switch/case statements? we can use if/else statements and 
  // template literals
  // if arr.length = 1 
  
  