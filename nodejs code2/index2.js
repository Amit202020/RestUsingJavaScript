const http = require('http')
const server = http.createServer((req,res) => {
    res.writeHead(200,{'content-type':'text/html'})
    console.log('user hit the server')
    res.write('<h1>home page</h1>')
    res.end('welcome')
	})
    
server.listen(5000)