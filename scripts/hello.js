var http = require('http');
//var fs = require('fs');


var hostname = process.env.IP;
var port = process.env.PORT;

var server = http.createServer(function (req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running!!!!`);
});
