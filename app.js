// const express = require('express')
// const app = express()

// // app.get('/', (req, res) => res.send('/index.html'))
// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname + '/index.html'));
// });


var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, 'public')));
// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))