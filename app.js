var express = require('express');
var app = express();
const fetch = require("node-fetch");

// Routes

// The Root Path
app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.get('/show-me-random-activity', function(req, res){

  // Get the data using Fetch. It will fetch the random activity for tasks suggestion
  fetch('https://www.boredapi.com/api/activity')
  .then(response => response.json())
  .then(data => {
    res.send(data);
  })
})

// Listen
var port = process.env.PORT || 3000;
app.listen(port);
console.log('Server is running on localhost:'+ port);