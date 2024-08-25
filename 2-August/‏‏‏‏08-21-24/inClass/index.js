
//npm init -y
//npm i <directory>

// const myModule = require("./my-module")
// //const fs = require("fs");
// //const http = require("http");

// console.log("Hello");
// console.log(myModule);
// console.log(myModule.length);

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req,res) => {
    res.send("Hello......");
});

app.listen(port, () => {
    console.log(`The server has started listening on port ${port}...`);
});