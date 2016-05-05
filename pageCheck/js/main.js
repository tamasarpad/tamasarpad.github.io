$(document).ready(function() {
	d();
});

$(window).resize(function(event) {
	d();
});

function d(){
	var x = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	var y = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	$("#sX").text(screen.width);
	$("#sY").text(screen.height);
	$("#wX").text(window.width);
	$("#wY").text(window.height);
	$("#dX").text(document.width);
	$("#dY").text(document.width);
	$("#vX").text(x);
	$("#vY").text(y);

	console.log(x + " " + y);
}