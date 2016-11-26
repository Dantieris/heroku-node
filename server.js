var http = require('http');

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

http.createServer(function (req, res) {
    res.send('ola');
}).listen(port);
