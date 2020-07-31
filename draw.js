let flag = false;
let initalX =
    board.addEventListener("mousedown", function (e) {
        flag = true;
        ctx.beginPath();
        let { top } = getLocation(board);
        // console.log(top);
        ctx.moveTo(e.clientX, e.clientY - top);
        // console.log(`mousedown ${e.clientX} ${e.clientY}`);
    })

    board.addEventListener("mousemove", function (e) {
    if (flag) {
        let { top } = getLocation(board);
        ctx.lineTo(e.clientX, e.clientY-top);
        ctx.stroke();
        // console.log(`mousemove ${e.clientX} ${e.clientY}`);
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