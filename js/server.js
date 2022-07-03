const http = require('http')
const fs = require('fs')
const port = 8080

const server = http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    fs.readFile('index.html', function(error, data) {
        if (error) {
            res.writeHead(404)
        } else {
            res.write(data)
        }
        res.end()
    })
})

server.listen(port, function(error) {
    if (error) {
        console.log('Something went wrong their buddy. Heres some more info:')
        console.log('========== Error ==========')
        console.log(error)
    } else {
        console.log('Server is running!')
        console.log('========== Extra Information ==========')
        console.log('Port: ' + port)
        console.log('Open: ' + '127.0.0.1:8080')
    }
})
