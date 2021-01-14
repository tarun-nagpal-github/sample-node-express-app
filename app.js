var express = require('express');
var app = express();
const fetch = require("node-fetch");

// Routes

// The Root Path
app.get('/', function(req, res) {
  res.send('Hello World!');
});

/*
   Get the data using Fetch. 
   It will fetch the random activity for tasks suggestion
*/
  
app.get('/show-me-random-activity', function(req, res){
  fetch('https://www.boredapi.com/api/activity')
  .then(response => response.json())
  .then(data => {
    res.send(data);
  })

});

//  It will fetch the random Image
app.get('/show-me-random-image', function(req, res){
  fetch('https://dog.ceo/api/breeds/image/random')
  .then(response => response.json())
  .then(data => {
    res.send(data);
  })
});


// Get your IP Address
app.get('/what-is-my-ip', function(req, res){
  fetch('https://api.ipify.org/?format=json')
  .then(response => response.json())
  .then(data => {
    res.send(data);
  })
});



// Listen
var port = process.env.PORT || 3000;
app.listen(port);
console.log('Server is running on localhost:'+ port);