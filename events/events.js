// Write all your JavaScript and JQuery code in this file! :)
/* START PROVIDED CODE */
function randomX() {
  return Math.random() * $(window).width();
}

function randomY() {
  return Math.random() * $(window).height();
}
/* END PROVIDED CODE */

// Write your code below this line :)

$("#moveButton").on("click", function () {
	$("#message").css("left", randomX());
});

$("#moveButton").on("click", function () {
	$("#message").css("top", randomY());
});

$("#moveButton").on("click", function () {
	$(this).css("backgroundColor", "pink");
});

