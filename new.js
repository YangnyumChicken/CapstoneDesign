const http = require('http');

const express = require("express");
const server = express();

server.use(express.static(__dirname + "/public"));

server.get("/", (req, res) => {
 
    res.sendFile(__dirname + "/MainHomePage.html");
});
server.listen(3000, (err) => {
    if (err) return console.log(err);
    console.log("The server is listening on port 3000");
});

//https://www.gloriouscoding.com/15acff0e-abae-461f-a63a-6e1aa35111f4 출처