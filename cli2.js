//Psuedo Code
    //Require the fs package be built in at the top of the tv file
-	//Use json.parse to convert into json (data comes back as a string)
-	//Create a string with the response containing the following information:
o	
-	//Save string to log.js file using append method
-	//Save data to log.txt
-	//Print to console

var TV = require("tv");

//Create object

// Create variable for CLI

var search = process.argv[2];

var term = process.argv.slice(3).join(" ");

// Console log what was searched
console.log(term);


