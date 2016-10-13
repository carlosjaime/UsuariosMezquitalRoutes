var io = require('socket.io').listen(3000)

 


var socketCount = 0
 
io.sockets.on('connection', function(socket){

    socketCount++

    io.sockets.emit('users connected', socketCount)
 
    socket.on('disconnect', function() {

        socketCount--
        io.sockets.emit('users connected', socketCount)
    })
 
   
})