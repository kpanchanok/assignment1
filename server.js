/*********************************************************************************
*  WEB322 – Assignment 1
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Panchanok Kaewchinda Student ID: 145443214 Date: 13-01-2023
*
*  Online (Cyclic) URL: https://brown-badger-toga.cyclic.app
*
********************************************************************************/ 


var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();

// setup a 'route' to listen on the default url path
app.get("/", (req, res) => {
    res.send("Panchanok Kaewchinda - 145443214");
});

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT);
