let activeTool = "pencil";
let tools = document.querySelectorAll(".tool-img");

for (let i = 0; i < tools.length; i++) {
    tools[i].addEventListener("click", function (e) {
        console.log(e);
        // element on which event occured
        let elem = e.currentTarget;
        let toolName = elem.getAttribute("id");
        if (toolName == "eraser") {
            // color white
            ctx.strokeStyle = "white";
        } else {
            ctx.strokeStyle = "black";
        }
    })
}