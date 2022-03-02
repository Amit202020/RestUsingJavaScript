var express = require('express')
var app = express()
 
var requestDate = function (req, res, next) {
    req.requestDate = Date.now()
    next()
}
 
app.use(requestDate)
 
app.get('/', function (req, res) {
    var responseMsg = '<h2>Hello Team!!</h2>' 
    responseMsg += '<small>Request genrated at: ' + req.requestDate + '</small>'
    res.send(responseMsg)
})
 
//PORT ENVIRONMENT VARIABLE
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}..`));