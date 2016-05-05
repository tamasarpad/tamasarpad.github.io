$(document).ready(function() {
	$("#sX").text("Screen width " + screen.width);
	$("#sY").text("Screen height " + screen.height);
	$("#wX").text("Window width " + window.width);
	$("#wY").text("Window height " + window.height);
	$("#dX").text("Document width " + document.width);
	$("#dY").text("Document height " + document.width);
	$("#vX").text("Viewport width " + window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth);
	$("#vY").text("Viewport height " + window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight);
});