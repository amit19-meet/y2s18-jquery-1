// Write all your JavaScript and JQuery code in this file! :)

var x = 0; // rotation of X
var y = 0; // rotation of Y
var z = 0; // rotation of Z

function updateSize(newSize) {
	$("img").eq(0).css("width", (newSize.toString()+ "px"));
  // FINISH ME! Set the width of the MEET logo to be newSize in pixels.
}

function updateRotation() {
  // FINISH ME! Set the rotation of the MEET logo based on the values of (x, y, z) (see above!)
}

function updateXRotation(newX) {
  x = newX;
  $("img").eq(0).css("transform", "rotateX(" + x.toString() + "deg)" );

  updateRotation();
}

function updateYRotation(newY) {
  y = newY;
 // $("img").eq(0).css("transform", "skewY("+ y.toString()+ "deg)");
  $("img").eq(0).css("transform", "rotateY("+ y.toString()+ "deg)");
  

  updateRotation();
}

function updateZRotation(newZ) {
  z = newZ;
  $("img").eq(0).css("transform", "rotateZ("+ z.toString()+"deg)");


  updateRotation();
}
updateRotation(this);
updateXRotation(this);
updateYRotation(this);
updateZRotation(this);
