function createBox() {
    let stickyPad = document.createElement("div");
    let navBar = document.createElement("div");
    let close = document.createElement("div");
    let minmize = document.createElement("div");
    let textbox = document.createElement("div");

    // add styling
    stickyPad.setAttribute("class", "sticky-pad");
    navBar.setAttribute("class", "navbar");
    close.setAttribute("class", "close");
    minmize.setAttribute("class", "minimize");
    textbox.setAttribute("class", "textbox");
    stickyPad.appendChild(navBar);
    stickyPad.appendChild(textbox);
    navBar.appendChild(minmize);
    navBar.appendChild(close);
    document.body.appendChild(stickyPad);
    // added all event listeners
    close.addEventListener("click", function () {
        close.parentNode.parentNode.remove();
    })
    let flag = true;
    minmize.addEventListener("click", function () {
        if (flag == true) {
            textbox.style.display = "none"
        } else {
            textbox.style.display = "block"
        }
        flag = !flag;
    })
    // minimize
    // move 

    let isStickyDown = false;
    let initialX;
    let initialY;
    navBar.addEventListener("mousedown",
        function stickyDown(e) {
            if (e.target == e.currentTarget) {
                initialX = e.clientX;
                initialY = e.clientY;
                isStickyDown = true;
            }
        });
    navBar.addEventListener("mousemove",
        function stickyMove(e) {
            console.log(e.target);
            console.log(e.currentTarget);
            if (e.target == e.currentTarget) {
                if (isStickyDown) {
                    let finalX = e.clientX;
                    let finalY = e.clientY;
                    let diffX = finalX - initialX;
                    let diffY = finalY - initialY;
                    let { top, left } = stickyPad.getBoundingClientRect();
                    stickyPad.style.top = (top + diffY) + "px";
                    stickyPad.style.left = (left + diffX) + "px";
                    initialX = finalX;
                    initialY = finalY;

                }
            }
        });
    navBar.addEventListener("mouseup",
        function stickyUp(e) {
            if (e.target == e.currentTarget) {
                isStickyDown = false;
            }
        });
    navBar.addEventListener("mouseleave",
        function stickyUp(e) {
            if (e.target == e.currentTarget) {
                isStickyDown = false;
            }
        });
    return textbox;
}