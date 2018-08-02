// Write all your JavaScript and JQuery code in this file
var i = 0;
$("#counter").on("click", function(){
	$("h1").eq(1).html(++i);
	
});
$("#reset").on("click", function(){
	$("h1").eq(1).html(i=0);
	
});
$("#reset").on("click", function(){
	$(this).css("color", "green");
	
});
$("#counter").on("click", function(){
	$(this).css("color", "blue");
	});

