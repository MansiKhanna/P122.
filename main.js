function preload() {
}
function setup() {
canvas = createCanvas (800, 500);
 canvas.position(110, 250);
 video = createCapture(VIDEO);
 video.hide();
//tint_color = "";
}
function draw() { 
    image(video, 150, 100, 500, 300);
    drawShape();
}
function take_snapshot(){ save('shape.png');
}
function drawShape()
{
    //tint_color = document.getElementById("color_name").value;
    fill("green")
    rect(20, 30, 75, 450);//x,y,w,h
    rect(700, 30, 75, 450);//x,y,w,h
    rect(97, 30, 600, 50);//x,y,w,h
    rect(97, 430, 600, 50);//x,y,w,h
    //ellipse(356, 146, 255, 55);//x,y,w,h
   // circle(230, 330, 120);//x,y,d
}