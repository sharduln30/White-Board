// alert("Hello");
// console.log(ctx);
let flag = false;
let paths = [];
let initalX =
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
    }
})
board.addEventListener("mouseup", function (e) {
    flag = false;
    // console.log(`mouseup ${e.clientX} ${e.clientY}`);
})
function getLocation(board) {
    let obj = board.getBoundingClientRect();
    console.log(obj);
    return obj;
}

function undoFn() {
    // clear
    ctx.clearRect(0, 0, board.width, board.height);
    //  last point pop
    if (paths.length > 0) {
        paths.pop();
        redraw();
    }
    // redraw
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