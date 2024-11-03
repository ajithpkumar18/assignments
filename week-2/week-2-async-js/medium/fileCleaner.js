const fs = require('fs')
// fs.readFile("a.txt", "utf-8", (err, data) => {

//     let filtered = data.replace(/\s+/g, ' ');

//     fs.writeFile('a.txt', filtered, "utf-8", (err) => {
//         console.log(err)
//     })
// })

function cleanWrite(data) {
    let newdat = data.replace(/\s+/g, " ");

    fs.writeFile("a.txt", newdat, "utf-8", (err) => console.log(err));

    fs.readFile("a.txt", "utf-8", (err, con) => console.log(con))
}

function promisifiedWrite(str) {
    function reading(resolve) {
        let data = fs.readFileSync(str, "utf-8");
        console.log(data);
        resolve(data);
    }

    return new Promise(reading);

}

let p = promisifiedWrite("a.txt");


p.then(cleanWrite);

