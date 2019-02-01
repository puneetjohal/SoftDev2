//DoubleDuckies -- Puneet Johal and Daniel Keriazis
//SoftDev2 pd8
//K01 -- ...and I want to Paint It Better
//2019-01-31

var mode = 0; //box mode

var c = document.getElementById('slate');
var ctx = c.getContext('2d');;

var clear = document.getElementById('clear');
//preventDefault: prevents the default or expected event from occuring.
clear.addEventListener('click', function() {
  ctx.clearRect(0,0,500,500);
});

var toggle = document.getElementById('toggle');
var msg = document.getElementById('mode');
toggle.addEventListener('click', function() {
  if (mode==0) {
    mode=1;
    //console.log(mode);
  }
  else {
    mode=0;
    //console.log(mode);
  }
});

c.addEventListener('click', function(event) {
  //offsetX: MouseEvent property that gives the x or horizontal offest from the left padding edge of the container in which the mouse is
  x = event.offsetX;
  //offsetY: MouseEvent property that gives the y or vertical offest from the top padding edge of the container in which the mouse is
  y = event.offsetY;
  //draw box
  if (mode==0) {
    ctx.fillRect(x,y,100,100);
  }
  //draw dot
  if (mode==1) {
    //beginPath: Called before setting the properties for and drawing a line, allowing for the properties of each stroke (color, angle, etc.) to be altered from the previous stroke.
    ctx.beginPath();
    ctx.ellipse(x,y,50,50,0,0,Math.PI*2);
    ctx.fill();
  }
});
