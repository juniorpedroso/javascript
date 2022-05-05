// Requiring users file
// const users = require("./users");
  
// console.log(users);

const fs = require("fs")

// Read yser.json file
fs.readFile("users.json", function(err, data) {
    // Check for errors
    if(err) throwerr;

    // Converting to JSON
    const users = JSON.parse(data);

    console.log(users);
})

