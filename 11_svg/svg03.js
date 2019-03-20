var isClean = true; //state var, tracks if SVG container is clean
var xp; //x value of the previous circle
var yp; //y value of the previous circle
var inCircle = false;

//event listener for each dot
var dotPriming = (dot) => {
  dot.addEventListener( 'click', function() {
    //change purple dot to green
    if (dot.getAttribute("fill") == "purple") {
      dot.setAttribute("fill", "green")
      console.log("color changed")
    }
    //move green dot and change to purple
    else {
      dot.setAttribute("fill", "purple")
      dot.setAttribute("cx", Math.random() * 460 + 20)
      dot.setAttribute("cy", Math.random() * 460 + 20)
      console.log("color changed and dot moved")
    }
    inCircle = true;
  });
}

var svg = document.getElementById("vimage");

svg.addEventListener( 'click', function(e) {
  if (inCircle) {
    inCircle = false;
  }
  else {
    //make purple dot
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("cx",e.offsetX);
    c.setAttribute("cy",e.offsetY);
    c.setAttribute("r",20);
    c.setAttribute("fill", "purple");
    c.setAttribute("stroke", "black");
    dotPriming(c);
    svg.appendChild(c);
    console.log("dot drawn");
  }
});

/*setting the event listeners for all original list items
for (i = 0; i<(svg.childNodes.length); i++) {
  dotPriming(svg.childNodes[i]);
}*/

//clear button
var clearB = document.getElementById("clear");

clearB.addEventListener( 'click', function() {
  svg.innerHTML = "";
  isClean = true;
  console.log("cleared")
});
