// import express from "express";
// import route from "./route/index.js";
// import { dirname } from 'path';
// import { fileURLToPath } from 'url';
// import db from "./config/db.js";
const express = require("express");
const route = require("./route/index.js")
// const {dirname} = require("path");
const {fileURLToPath} = require('url');
const db = require('./config/db.js')
const app = express();
app.set('views', './src/views');
app.set('view engine','ejs')
app.use(express.urlencoded({limit: '200mb'}))
app.use(express.json({limit: '200mb'}));

app.use('/public', express.static(__dirname + "/public"))
route(app)
db()
app.listen(8000, ()=> {
    console.log("App started on port 8000")
})