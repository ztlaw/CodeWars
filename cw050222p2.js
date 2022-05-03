/*
Your start-up's BA has told marketing that your website has a large audience in Scandinavia 
and surrounding countries. Marketing thinks it would be great to welcome visitors to the site 
in their own language. Luckily you already use an API that detects the user's location, so this is an easy win.

The Task

    Think of a way to store the languages as a database (eg an object). The languages are 
    listed below so you can copy and paste!
    Write a 'welcome' function that takes a parameter 'language' (always a string), and 
    returns a greeting - if you have it in your database. It should default to English if the 
    language is not in the database, or in the event of an invalid input.
    */

    function greet(language) {
	
    }
    
    //problem: you are given a database of language keys and "welcome" keys in their respective languages
    //return the correct iteration of 'Welcome' within the parameter of the function greet.
    
    //example: greet(english) = 'Welcome'
    //example: greet(danish) = 'Velkomst'
    //example: greet(dutch) = 'Welkom'
    
    //pseudo/solution: first, create an object within the function that has properties of languages and keys of
    //'welcome' within the respective language
    //2nd, return the language[lang] or language[english] as a default
    function greet(lang){
      let languages = {
        english: 'Welcome',
        czech: 'Vitejte',
        danish: 'Velkomst',
        dutch: 'Welkom',
        estonian: 'Tere tulemast',
        finnish: 'Tervetuloa',
        flemish: 'Welgekomen',
        french: 'Bienvenue',
        german: 'Willkommen',
        irish: 'Failte',
        italian: 'Benvenuto',
        latvian: 'Gaidits',
        lithuanian: 'Laukiamas',
        polish: 'Witamy',
        spanish: 'Bienvenido',
        swedish: 'Valkommen',
        welsh: 'Croeso'
    
      } //1
      
    return languages[lang] || languages['english'] // remember: when referring to a property, write as a string
    }
