// alert("Hello");
// console.log(ctx);
// 1. 
const io = require("socket.io-client");
//  2. 
var socket = io.connect("http://localhost:3001");

console.log(socket);
let flag = false;
let paths = [];
let redoArr = [];
board.addEventListener("mousedown", function (e) {
    flag = true;
    ctx.beginPath();
    let { top } = getLocation(board);
    // console.log(top);
    ctx.moveTo(e.clientX, e.clientY - top);

    let mdId = {
        x: e.clientX,
        y: e.clientY - top,
        color: ctx.strokeStyle,
        width: ctx.lineWidth,
        id: "down"
    }
    paths.push(mdId);
    redoArr = [];
    // 3. 
    socket.emit("mousedown", mdId);
    // console.log(`mousedown ${e.clientX} ${e.clientY}`);
})
board.addEventListener("mousemove", function (e) {
    if (flag) {
        let { top } = getLocation(board);
        ctx.lineTo(e.clientX, e.clientY - top);
        ctx.stroke();
        // console.log(`mousemove ${e.clientX} ${e.clientY}`);
        let mmId = {
            x: e.clientX,
            y: e.clientY - top,
            color: ctx.strokeStyle,
            width: ctx.lineWidth,
            id: "move"
        }
        paths.push(mmId);
        socket.emit("mousemove", mmId);
    }
})
board.addEventListener("mouseup", function (e) {
    flag = false;
    // console.log(`mouseup ${e.clientX} ${e.clientY}`);
})
function getLocation(board) {
    let obj = board.getBoundingClientRect();
    // console.log(obj);
    return obj;
}

function undoFn() {
    // clear
    //  last point pop
    if (paths.length > 0) {
        ctx.clearRect(0, 0, board.width, board.height);
        let recentPoint = paths.pop();
        redoArr.push(recentPoint);
        redraw();
    }
    // redraw
}
function redoFn() {
    if (redoArr.length > 0) {
        ctx.clearRect(0, 0, board.width, board.height);
        paths.push(redoArr.pop());
        redraw();
    }
}
function redraw() {
    for (let i = 0; i < paths.length; i++) {
        let cPoint = paths[i];
        let {
            color, width, id, x, y
        } = cPoint;
        ctx.strokeStyle = color;
        ctx.lineWidth = width;

        if (id == "down") {
            ctx.beginPath();
            ctx.moveTo(x, y);
        } else if (id == "move") {
            ctx.lineTo(x, y);
            ctx.stroke();
        }
    }
}
// setInterval => interval fn call
//  clearInterval => 
// reciever
// 4. 
socket.on("onmousedown", function (point) {
    let {
        color, width, id, x, y
    } = point;
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
})
socket.on("onmousemove", function (point) {
    let {
        color, width, id, x, y
    } = point;
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.lineTo(x, y);
    ctx.stroke();
})