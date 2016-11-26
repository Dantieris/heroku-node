var http = require('http');

var port = process.env.PORT || 8080;

http.createServer(function (req, res) {
    res.end('ola');
}).listen(port);
