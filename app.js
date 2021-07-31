const express = require('express');
const path = require('path');
const app = express();

app.listen("3030", () => console.log("sv prendido en: http://localhost:3030/home"));

app.get('/home', (req, res) => res.sendFile(path.join(__dirname, "/views/home.html")));

app.get('/register', (req, res) =>  res.sendFile(path.join(__dirname, "/views/register.html")));
app.get('/login', (req, res) =>  res.sendFile(path.join(__dirname, "/views/login.html")));

app.use(express.static('public'));