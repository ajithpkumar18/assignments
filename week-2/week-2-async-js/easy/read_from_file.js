const fs = require('fs')

fs.readFile("a.txt", "utf-8", (err, data) => {
    console.log(data);
})

fs.writeFile("a.txt", "Hello this is the new text", "utf-8", (err) => {
    console.log(err);
})

fs.readFile("a.txt", "utf-8", (err, data) => {
    console.log(data);
})