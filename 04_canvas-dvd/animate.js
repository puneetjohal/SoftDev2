// Team Meme Machine -- Puneet Johal and Addison Huang
// SoftDev pd8
// K04 -- What is it saving the screen from?
// 2019-02-07
// --------------------------------------------------

//model for HTML5 canvas-based animation

//access canvas and buttons via DOM
var c = document.getElementById("playground");
var dotButton = document.getElementById( "circle" );
var stopButton = document.getElementById( "stop" );
var dvdButton = document.getElementById("dvd");

//prepare to interact with canvas in 2D
var ctx = c.getContext("2d");

//set fill color to celine
ctx.fillStyle = "#00ffff";


var requestID;
var radius = 0;
var growing = true;


var drawDot = function() {
    window.cancelAnimationFrame( requestID );

    ctx.clearRect( 0, 0, c.width, c.height );

    if ( growing ) {
	radius += 1;
    }
    else {
	radius -= 1;
    }

    if ( radius == (c.width / 2) )
	growing = false;
    else if ( radius == 0 ) {
	growing = true;
    }

    //draw the dot
    ctx.beginPath();
    ctx.arc( c.width / 2, c.height / 2, radius, 0, 2 * Math.PI );
    ctx.stroke();
    ctx.fill();

    requestID = window.requestAnimationFrame( drawDot );
};


var stopIt = function() {
    console.log( requestID );
    window.cancelAnimationFrame( requestID );
};

var dvdLogoSetup = function() {
    window.cancelAnimationFrame(requestID);
    ctx.clearRect(0,0,c.width,c.height);
    var rectWidth = 100;
    var rectHeight = 50;
    var rectX = Math.floor(Math.random() *(c.width-rectWidth));
    var rectY = Math.floor(Math.random()*(c.height-rectHeight));
    var xVel=1;
    var yVel = 1;
    var logo = new Image();
    logo.src="logo_dvd.jpg";
    var dvdLogo = function() {
	requestID = window.requestAnimationFrame(dvdLogo);
	if (rectX<=0 || rectX>=c.width-rectWidth) {
	    xVel = xVel *-1;
	}
	if (rectY<=0 || rectY>=c.height-rectHeight) {
	    yVel = yVel *-1;
	}
	ctx.drawImage(logo,rectX,rectY,rectWidth,rectHeight);
	rectX = rectX + xVel
	rectY = rectY + yVel

    }
    dvdLogo();
}

var xVel = 5;
var yVel = 5;
var x = 20;
var y = 100;

var rect=function() {
    window.cancelAnimationFrame(requestID);
    ctx.clearRect(0,0,c.width,c.height);
    ctx.fillRect(x,y,30,20);
    x = x+xVel;
    y= y+yVel;
    requestID = window.requestAnimationFrame(rect);
    if (x==0 || x==c.width-30) {
	xVel = xVel *-1;
    }
    if (y==0 || y==c.height-20) {
	yVel = yVel *-1;
    }

}


dotButton.addEventListener( "click", drawDot );
stopButton.addEventListener( "click",  stopIt );
dvdButton.addEventListener("click",dvdLogoSetup);
