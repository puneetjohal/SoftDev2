//Team Meme Machine - Addison Huang and Puneet Johal
//SoftDev2 pd8
//K03 -- They lock us in the tower whenever we get caught ...which is often
//2019-02-04

var c = document.getElementById("playground"); //canvas
var ctx= c.getContext("2d");
var growing = true; //true = growing, false = contracting
var requestID;
var radius = 0; //radius of the circle
var dotButton = document.getElementById("circle");
var stopButton = document.getElementById("stop");
var animation = false; //true = animation is occuring

var clear = function(e) {
    ctx.clearRect(0,0,c.width,c.height);
};


var drawDot = function() {
    clear();
    if (growing) {
	radius+=2;
    }
    if (!growing) {
	radius-=2;
    }
    //draw the dot
    ctx.beginPath();
    ctx.arc(c.width/2,c.height/2,radius,0,2*Math.PI);
    ctx.stroke();
    ctx.fill();
    if (radius >= c.width/2) {
	growing=false;
    }
    if (radius == 0) {
	growing = true;
    }
    requestID=window.requestAnimationFrame(drawDot);
};

var stopIt = function(){
    console.log(requestID);
    window.cancelAnimationFrame(requestID);
};

dotButton.addEventListener("click", function(event){
    if (animation) {
      event.preventDefault();
    }
    else {
      animation = true;
      drawDot();
    }
});

stopButton.addEventListener("click", function(event){
    if (!animation) {
      event.preventDefault();
    }
    else {
      animation = false;
      stopIt();
    }
});
