var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = "pink";
ctx.lineWidth = 2;
ctx.arc(700, 200, 40, 0, 2 * Math.PI);
ctx.stroke();