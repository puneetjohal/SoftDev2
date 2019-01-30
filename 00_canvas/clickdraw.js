var c = document.getElementById("slate");
var ctx = c.getContext("2d");
ctx.fillStyle = "#ff0000";
ctx.fillRect(40,40,100,200);

var clear = document.getElementById("clear");
clear.addEventListener('click', function() {
  c.innerHTML()
});

//commands needed: fillStyle, strokeStyle, clearRect(), fillText, ellipse()
