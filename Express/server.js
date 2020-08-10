const express = require("express");
const app = express();
// 127.0.0.1:3000
//  node server
const http = require('http').createServer(app);
// socket server

const io = require('socket.io')(http);
// **************************************************
// connection
io.on('connection', function (socket) {
    // console.log('a user connected'+socket.id);
    socket.on("mousedown", function (point) {
        console.log(point);
        socket.broadcast.emit("onmousedown", point);
    })
    socket.on("mousemove", function (point) {
        console.log(point);
        socket.broadcast.emit("onmousemove", point);
    })
});
// *********************listen***********************

http.listen(3001, function () {
    console.log("Server is listening to port 3001")
})