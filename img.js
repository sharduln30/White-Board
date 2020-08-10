function uploadImage() {
    let fileInput = document.getElementById("file-upload");
    fileInput.click();
    fileInput.addEventListener("change", function () {
        let imgObj = fileInput.files[0];
        console.log(imgObj);
        const objectURL = window.URL.createObjectURL(imgObj);
        let img = document.createElement("img");
        img.setAttribute("class","uploded-img")
        img.setAttribute("src", objectURL);
        let textbox = createBox();
        textbox.appendChild(img);
        // document.body.appendChild(img);
    })
}
function downloadImg() {
    let a = document.createElement("a");
    // 1.
    let url = board.toDataURL("image/png");
    //  2. 
    a.download = "file.png";
    a.href = url;
    // js => click
    a.click();
    a.remove();
}