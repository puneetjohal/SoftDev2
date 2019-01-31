//Puneet Johal
//SoftDev2 pd8
//K00 -- I See A Red Door...
//2019-01-30

//commands needed: fillStyle, strokeStyle, clearRect(), fillText, ellipse()
var mode = 0;

var c = document.getElementById('slate');
var ctx = c.getContext('2d');;

var bounds = c.getBoundingClientRect();
console.log(bounds);
var x_skew = bounds['x'];
var y_skew = bounds['y'];

var clear = document.getElementById('clear');
clear.addEventListener('click', function() {
  ctx.clearRect(0,0,500,500);
});

var toggle = document.getElementById('toggle');
var msg = document.getElementById('mode');
toggle.addEventListener('click', function() {
  if (mode==0) {
    mode=1;
    console.log(mode);
    msg.innerHTML = 'Current Draw Mode: Dot';
  }
  else {
    mode=0;
    console.log(mode);
    msg.innerHTML = 'Current Draw Mode: Box';
  }
});

c.addEventListener('click', function(event) {
  x = event.pageX - x_skew;
  y = event.pageY - y_skew;
  //draw box
  if (mode==0) {
    ctx.fillRect(x,y,100,100);
  }
  //draw dot
  if (mode==1) {
    ctx.beginPath();
    ctx.ellipse(x,y,50,50,0,0,Math.PI*2);
    ctx.fill();
  }
});
