//DoubleDuckies -- Puneet Johal and Daniel Keriazis
//SoftDev2 pd8
//K02 -- Connecting the Dots
//2019-02-01

//---functions---

var drawDot = (x,y) => {
  ctx.beginPath();
  ctx.ellipse(x,y,5,5,0,0,Math.PI*2);
  ctx.fill();
  ctx.closePath();
}

var drawLine = (xi,yi,x,y) => {
  ctx.beginPath();
  ctx.moveTo(xi,yi);
  ctx.lineTo(x,y);
  ctx.stroke();
  ctx.closePath();
}

//---elements and event listeners---

var c = document.getElementById('playground');
var ctx = c.getContext('2d');;

var isClean = true; //state var, tracks if canvas is clean
var xi; //x offset of the previous click
var yi; //y offset of the previojus click

//clear button
var clear = document.getElementById('clear');
clear.addEventListener('click', function() {
  ctx.clearRect(0,0,500,500);
  isClean = true;
});

//click on canvas
c.addEventListener('click', function(e) {
  x = e.offsetX;
  y = e.offsetY;
  drawDot(x,y);
  if (!isClean) { drawLine(xi,yi,x,y); }
  else { isClean = false; }
  xi=x;
  yi=y;
});
