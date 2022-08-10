/*
Write a simple regex to validate a username. Allowed characters are:

    lowercase letters,
    numbers,
    underscore

Length should be between 4 and 16 characters (both included).
 */

function validateUsr(username) {
    res = /^[0-9a-z_]{4,16}$/
    //0-9 = digits test
    //a-z = a-z but lowercase only test
    //_ = underscore test
    //{4,16} = character minimum + maximum INCLUSIVE
    return res.test(username)
  }
  
  //problem: we are given a username as a parameter -- using Regex, validate the username 
  //allowed characters: lowercase letters, numbers, underscore, length of 4 to 16 characters (inclusive)
  
  //PREP --- 
  
  //parameters: the parameters we are given is a string, we will only be given a string, whether it is numbers
  //or regular characters
  //return: what we want returned is a boolean, true if the username is VALID
  //false if the username is INVALID
  //example: "ztlaw_417" = true 
  //example: "ZtLaw_13.37" = false 
  //pseudo: using if statement to return true or false?
  /[a-z0-9\_]{4,16}$/ 