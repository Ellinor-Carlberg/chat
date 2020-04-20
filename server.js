const express = require('express')
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http)

const port = 3000

//dirname remove it?
app.use(express.static(__dirname + '/public'))

io.on('connection', (socket) => {
    console.log("New connection")

    socket.on('message', (msg) => {
        io.emit('message', msg)
})

    socket.on('disconnect', () => {
        console.log("user disconnected")
    })
})

http.listen(port, () => {
    console.log('listening on port ' + port)
})