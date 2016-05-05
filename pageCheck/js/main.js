$(document).ready(function() {
	$("#sX").text = screen.width;
	$("#sY").text = screen.height;
	$("#wX").text = window.width;
	$("#wY").text = window.width;
	$("#dX").text = document.width;
	$("#dY").text = document.width;
	$("#vX").text = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	$("#vY").text = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
});