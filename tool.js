let activeTool = "pencil";
let pencilOptions = document.getElementById("p-options");
let eraserOptions = document.getElementById("e-options");
let tools = document.querySelectorAll(".tool-img");

for (let i = 0; i < tools.length; i++) {
    tools[i].addEventListener("click", function (e) {
        console.log(e);
        // element on which event occured
        let elem = e.currentTarget;
        let toolName = elem.getAttribute("id");
        if (toolName == "eraser") {
            // color whiteif
            if (activeTool == "eraser") {
                eraserOptions.classList.add("show");
            } else {
                activeTool = "eraser"
                pencilOptions.classList.remove("show")
                ctx.strokeStyle = "white";
            }
        } else if (toolName == "pencil") {
            if (activeTool == "pencil") {
                pencilOptions.classList.add("show");

            } else {
                activeTool == "pencil";
                eraserOptions.classList.remove("show");
                ctx.strokeStyle = "black";
            }
        } else if (toolName == "sticky") {
            createSticky();
        }
    })
}

function handleColorChange(color) {
    ctx.strokeStyle = color;
}

let allSliders = document.querySelectorAll(".slider");
for (let i = 0; i < allSliders.length; i++) {
    allSliders[i].addEventListener("change", function (e) {
        console.log(e);
        // element on which event occured
        let elem = e.currentTarget;
        let newSize = elem.value;
        ctx.lineWidth = newSize;
    })
    
}