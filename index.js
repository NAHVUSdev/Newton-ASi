var require;
var express = require('express');
var app = express();
var path = require('path');

app.get('/', function (req, res) {
    "use strict";
    res.sendFile('index.html', {root: path.join(__dirname, 'app')});
});

app.get('/reviews', function (req, res) {
    "use strict";
    res.sendFile('index.html', {root: path.join(__dirname, 'app/reviews')});
});

app.get('/reviews/:name', function (req, res, next) {
  var options = {
    root: path.join(__dirname, 'app/reviews')
  }

  var fileName = req.params.name
  res.sendFile(fileName, options, function (err) {
    if (err) {
      next(err)
    } else {
      console.log('Sent:', fileName)
    }
  })
});

app.listen(8080);
