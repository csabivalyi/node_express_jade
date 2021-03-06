var mongoose = require('mongoose');
var express = require('express');
var routes = require('./routes');


mongoose.connect('mongodb://localhost', function(err){
  if(err) throw err;
  console.log('connected!');
  
  var app = express();
  routes(app);
  app.get('/', function(req, res) {
    res.send(200, 'hello mongoose blog');
  });
  
  app.listen(3000, function () {
    console.log('now listening on http://localhost:3000');
  });
});