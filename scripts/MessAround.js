var http = require('http');
var fs = require('fs');
var hostname = process.env.IP;
var port = process.env.PORT;
var index = fs.readFileSync('index.html');


var myserver = http.createServer(function (req, res) {
    res.end (index);
});

myserver.listen(port, hostname,function () {
    console.log('My first server');
    
});