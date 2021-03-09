canvas= document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

color= "pink";

ctx.beginPath();
ctx.strokeStyle= color;
ctx.lineWidth= 5;
ctx.arc(200,300,80,0,2*Math.PI);
ctx.stroke();
console.log("code successful");

canvas.addEventlistener("mousedown", mymouse_down);

function mymouse_down(e){
    mouse_x=e.clientX-canvas.offsetLeft;
mouse_y=e.clientY-canvas.offsetTop;
console.log("X="+ mouse_x +"and Y="+ mouse_y);
circle(mouse_x,mouse_y);
}
function circle(mouse_x,mouse_y){
    ctx.beginPath();
    ctx.strokeStyle= color;
    ctx.lineWidth= 5;
    ctx.arc(mouse_x,mouse_y,58,0,2*Math.PI);
    ctx.stroke();
}