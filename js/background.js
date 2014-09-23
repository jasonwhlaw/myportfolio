$(document).ready(function() {

	function randomColor() {
		return '#' + Math.random().toString(16).slice(2, 8);
	}

	$('#bgBtn').on("click", function() {
		console.log("Hello Jason");

		$('.navbar').css('background', randomColor());
	});

});