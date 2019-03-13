var isClean = true; //state var, tracks if SVG container is clean
var xp; //x value of the previous circle
var yp; //y value of the previous circle

var pic = document.getElementById("vimage");

pic.addEventListener( 'click', function(e) {
  //draw circle
  var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  c.setAttribute("cx",e.offsetX);
  c.setAttribute("cy",e.offsetY);
  c.setAttribute("r",10);
  c.setAttribute("fill", "red");
  c.setAttribute("stroke", "black");
  pic.appendChild(c);
  console.log("dot drawn")

  //connect the dots
  if (isClean) {
    isClean = false;
  }
  else {
    var l = document.createElementNS("http://www.w3.org/2000/svg", "line");
    l.setAttribute("x1", xp);
    l.setAttribute("y1", yp);
    l.setAttribute("x2", e.offsetX);
    l.setAttribute("y2", e.offsetY);
    l.setAttribute("stroke", "black");
    pic.appendChild(l);
    console.log("line drawn")
  }
  xp = e.offsetX;
  yp = e.offsetY;
});

//clear button
var button = document.getElementById("but_clear");

button.addEventListener( 'click', function() {
  pic.selectAll("*").remove();
  console.log("cleared")
});
