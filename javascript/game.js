$(document).ready(function(){	
	// Generates the number to guess.
	var number = Math.floor((Math.random() * 102) + 19);
	// Generates the values for each crystal.
	var blue = Math.floor((Math.random() * 12) + 1);
	var red = Math.floor((Math.random() * 12) + 1);
	var yellow = Math.floor((Math.random() * 12) + 1);
	var green = Math.floor((Math.random() * 12) + 1);
	// Setting initial values to 0.
	var guessTotal = 0;
	var wins = 0;
	var losses = 0;
	var currentStreak = 0;
	var longestStreak = 0;

	
	


	$(".bluecrystal").click(function() {
		update(blue);
	});
	$(".redcrystal").click(function() {
		update(red);
	});
	$(".yellowcrystal").click(function() {
		update(yellow);
	});
	$(".greencrystal").click(function() {
		update(green);
	});
	$(".dropdown").click(function() {
		$(".instructions").toggle("slow");
	})
	


	function reset() {
		// Generates a new number to guess.
		number = Math.floor((Math.random() * 102) + 19);
		// Displays that number on the page.
		$(".numberdisplay").html(number);
		// Generates new values for the crystals.
		blue = Math.floor((Math.random() * 12) + 1);
		red = Math.floor((Math.random() * 12) + 1);
		yellow = Math.floor((Math.random() * 12) + 1);
		green = Math.floor((Math.random() * 12) + 1);
		// Resets the total guess to 0.
		guessTotal = 0;
		// Displays the guess total.
		$(".guessdisplay").html(guessTotal);
	};
}
</body>
</html>
