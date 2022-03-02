var http = require('http'); 
var server = http.createServer(function (req, res) {
    res.writeHead(200,{'content-type':'text/html'})
	console.log('user hit the server')
    res.write('<h1>home page demo</h1>')
    res.end('welcome')
});

server.listen(5000);
console.log('Node.js web server at port 5000 is running..')