var express = require('express')
var app = express()
 // route that gets executed for GET request and the request url path '/' or root
app.get('/', function (req, res) {
   res.send('Hello LBRCE')
})
// route that gets executed for GET request and the request url path '/hello/'
app.get('/cse/', function (req, res) {
   res.send('Hello cse-c')
})
 // route that gets executed for GET request and the request url path '/bye/'
app.get('/it/', function (req, res) {
   res.send('hello it.')
})
 // route that gets executed for GET request and the request url path '/bye/'
app.get('/ece/', function (req, res) {
   res.send('Hello ece.')
})
// route that gets executed for GET request and the request url path '/bye/'
app.get('/thank/', function (req, res) {
   res.send('Thank you page.')
})
// start the server
var server = app.listen(8080, function(){
    console.log('Listening on port 8080...')
})