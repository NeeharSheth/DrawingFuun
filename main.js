canvas= document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

color= "pink";

var mouse_event="empty";

var last_position_x,last_position_y;

width_of_line=1;

canvas.addEventListener("mousedown", mymouse_down);

function mymouse_down(e){
    mouse_event="mousedown";
}

canvas.addEventListener("mouseup", mymouse_up);

function mymouse_up(e){
    mouse_event=" ";
}

canvas.addEventListener("mousemove", mymouse_move);

function mymouse_move(e){
    current_position_mouse_x=e.clientX-canvas.offsetLeft;
    current_position_mouse_y=e.clientY-canvas.offsetTop;

if (mouse_event=="mousedown"){
    ctx.beginPath();
ctx.strokeStyle= color;
ctx.lineWidth= 1;
ctx.moveTo(last_position_x,last_position_y);
ctx.lineTo(current_position_mouse_x,current_position_mouse_y);
ctx.stroke();
console.log("code successful");
}
last_position_x= current_position_mouse_x;
last_position_y= current_position_mouse_y;
}

