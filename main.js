canvas = document.getElementById("myCanvas");
ctx= canvas.getContext('2d');

var mouseEvent = "empty";
var lastPositionOfX,lastPositionOfY;
color="black";
widthOfLine = 1;

canvas.addEventListener("mousedown",myMousedown);

function myMousedown(e){

    mouseEvent = "mousedown";

}
canvas.addEventListener("mouseleave",myMouseleave);

function myMouseleave(e){

    mouseEvent = "mouseleave";
    
}
canvas.addEventListener("mouseup",myMouseup);

function myMouseup(e){

    mouseEvent = "mouseup";
    
}
canvas.addEventListener("mousemove",myMousemove);

function myMousemove(e){

    current_position_of_mouse_X = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_Y = e.clientY - canvas.offsetTop;

    
    if(mouseEvent == "mousedown"){

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthOfLine;
        
        console.log("Last position of x and y coordinates = ");
        console.log("X = " + lastPositionOfX + "and Y = " + lastPositionOfY);
        ctx.moveTo(lastPositionOfX,lastPositionOfY);

        console.log("Current position of x and y coordinates = ");
        console.log("X = " + current_position_of_mouse_X + "and Y = " + current_position_of_mouse_Y);
        ctx.lineTo(current_position_of_mouse_X,current_position_of_mouse_Y);
        ctx.stroke();

        lastPositionOfX = current_position_of_mouse_X;
        lastPositionOfY = current_position_of_mouse_Y;



    }
}