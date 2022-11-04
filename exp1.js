var express = require('express')
var app = express()
 // route that gets executed for GET request and the request url path '/' or root
app.get('/', function (req, res) {
   res.send('This is a Sample Example for Express.js .')
})
// route that gets executed for GET request and the request url path '/hello/'
app.get('/welcome/', function (req, res) {
   res.send('Welcome to node express.js.')
})
 // route that gets executed for GET request and the request url path '/bye/'
app.get('/hello/', function (req, res) {
   res.send('hello page.')
})
 // route that gets executed for GET request and the request url path '/bye/'
app.get('/bye/', function (req, res) {
   res.send('bye page.')
})
// route that gets executed for GET request and the request url path '/bye/'
app.get('/thank/', function (req, res) {
   res.send('Thank you page.')
})
// start the server
var server = app.listen(8080, function(){
    console.log('Listening on port 8080...')
})