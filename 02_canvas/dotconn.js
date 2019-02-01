//DoubleDuckies -- Puneet Johal and Daniel Keriazis
//SoftDev2 pd8
//K02 -- Connecting the Dots
//2019-02-01

//---functions---

var drawDot = (x,y) => {
  //beginPath: starts/resets path
  ctx.beginPath();
  ctx.ellipse(x,y,5,5,0,0,Math.PI*2);
  ctx.fill();
  ctx.closePath();
}

var drawLine = (x,y) => {
  
}

//---elements and event listeners---

var c = document.getElementById('playground');
var ctx = c.getContext('2d');;

//clear button
var clear = document.getElementById('clear');
clear.addEventListener('click', function() {
  ctx.clearRect(0,0,500,500);
});

//click on canvas
c.addEventListener('click', function(e) {
  x = e.offsetX;
  y = e.offsetY;
  drawDot(x,y);
  //drawLine
});
