const http = require('http');
const express = require('express');
const app = express();

app.set("view engine", "pug");

app.get("/", (req, res) => {
    res.render("index", { pageTitle: "Index View" });
});

const employees = [{ id: 1, name: "Manish" },
{ id: 2, name: "Abhijeet" },
{ id: 3, name: "Ram" },
{ id: 4, name: "Abhishek" },
{ id: 5, name: "Ramakant" }];

app.get("/employees", (req, res) => {
    res.render("employees", { pageTitle: "Employees View", empList: employees });
});

const server = http.createServer(app);

server.listen(3000);

server.on("listening", function () {
    console.log("Server Started...");
});

server.on("error", function (err) {
    console.log(err);
});