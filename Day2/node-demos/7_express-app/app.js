const http = require('http');
const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.get("/contact", (req, res) => {
    res.sendFile(__dirname + "/public/contact.html");
});

app.get("/about", (req, res) => {
    res.sendFile(__dirname + "/public/about.html");
});

const employees = [{ id: 1, name: "Manish" },
{ id: 2, name: "Abhijeet" },
{ id: 3, name: "Ram" },
{ id: 4, name: "Abhishek" },
{ id: 5, name: "Ramakant" }];

app.get("/data", (req, res) => {
    res.json(employees);
});

const server = http.createServer(app);

server.listen(3000);

server.on("listening", function () {
    console.log("Server Started...");
});

server.on("error", function (err) {
    console.log(err);
});