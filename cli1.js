// Set a variable for the types of search arguments- 2
var search = process.argv[2];
// Join to handle spaces between words of search term
var term = process.argv.slice(3).join(" ");



// Console log show or actor
if (search === "show") {
  console.log("Searching for TV Show");
} else {
  console.log("Searching for TV Actor");
}

// Console log what was searched
console.log(term);
