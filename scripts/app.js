const express = require('express');
const app = express();
const path = require('path');
const mysql = require('./mysql');

module.exports = app;

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, '../html', 'main.html'));
});

app.get('/css/style.css',(req,res)=>{
    res.sendFile(path.join(__dirname, '../css', 'style.css'));
});

app.get('/showdb',(req,res)=>{
    mysql.showdb(req,res);
});
