/*
console.log("Hello from node.js");

const http = require('http');

http.createServer(function (request, response) {
    // Send the HTTP header
    // HTTP Status: 200: OK
    // Content Type: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});

    // Send the response body as "Hello World"
    response.end('Hello World\n');
}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');
*/

var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

app.get('/', function (req, res) {
   res.send('Data Representation and Querying');
})

app.get('/hi', function (req, res) {
    res.send('Hello from the server');
 })

 app.get('/name', function(req, res){
    console.log(req.query.lastname);
    res.send('Hello from ' + req.query.firstname + " " + req.query.lastname);
 })

//Here we are configuring express to use body-parser as middle-ware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/name', function(req, res){
    res.send('Hello from ' + req.body.firstname + " " + req.body.lastname);
})

app.get('/test', function(req, res){
    console.log('send index.html file')
    res.sendFile(path.join(__dirname + '/index.html'));
})

app.get('/api/posts', function(req, res){
        const posts = [
        {
            id: "fadf12421l",
            title: "First server-side post",
            content: "This is coming from the server"
        },
        {
            id: "ksajflaj132",
            title: "Second server-side post",
            content: "This is coming from the server!"
        }
        ];

        res.status(200).json({
        message: 'Posts fetched succesfully!',
        posts: posts
        });    
}) 

 app.get('/hello/:name', function(req, res){
    console.log(req.params.name);
    res.send('Hello ' + req.params.name);
 })

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})

