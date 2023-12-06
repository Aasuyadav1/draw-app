let canvas = document.getElementById("myCanvas");
let canvasContext = canvas.getContext("2d");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
canvasContext.strokeStyle = "white";
canvasContext.lineWidth = 50;
canvasContext.lineJoin = "round";
canvasContext.lineCap = "round";

setTimeout(()=>{
    alert("draw somethings")
},1000)

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;

function draw(e) {
    if (!isDrawing) return;
    hue = e.offsetX
    canvasContext.strokeStyle =`hsl(${hue}, 100%, 50%)`;
    console.log(e.offsetX);
    canvasContext.beginPath();
    canvasContext.moveTo(lastX, lastY);
    canvasContext.lineTo(e.offsetX, e.offsetY);
    canvasContext.stroke();
    lastX = e.offsetX;
    lastY = e.offsetY;
    
}

canvas.addEventListener("mousedown", (e) => {
    isDrawing = true;
    lastX = e.offsetX;
    lastY = e.offsetY;
});

canvas.addEventListener("mouseup", () => {
    isDrawing = false;
});

canvas.addEventListener("mousemove", draw);