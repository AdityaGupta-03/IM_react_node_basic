// const http = require('http');

// const server = http.createServer((req, res) => {
//     console.log(req.url);
//     res.setHeader("content-type", "text/html");
//     res.write("<h1>Hello from Node Http Server</h1>");
//     res.end();
// });

// server.listen(3000);

// server.on("listening", function () {
//     console.log("Server Started...");
// });

// server.on("error", function (err) {
//     console.log(err);
// });

// --------------------------------------------

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    fs.readFile('./index.html', 'utf-8', (err, htmlContent) => {
        if (err) {
            res.setHeader("content-type", "text/plain");
            res.end("Page Not Found");
        } else {
            res.setHeader("content-type", "text/html");
            res.write(htmlContent);
            res.end();
        }
    });
});

server.listen(3000);

server.on("listening", function () {
    console.log("Server Started...");
});

server.on("error", function (err) {
    console.log(err);
});
