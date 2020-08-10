function sayHello() {
    console.log("Hello");
}

let ref = setInterval(sayHello, 1000);
setTimeout(function () {
clearInterval(ref)
}, 5000);