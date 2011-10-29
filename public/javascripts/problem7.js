$.extend(hack, {
	intro: "you can add strings just like numbers with + ",
	problem: "add together the first 4 characters of hacker with the last 5 characters of marathon",
	success: function(consoleLog, ret) {
		expected = "hackathon";
		
		if (expected == ret) {			
			return true;
		} else {
			$('#feedback').append(
				$("<p/>").text("expected " + ret)
			);
			$('#feedback').append(
				$("<p/>").text("actual " + consoleLog)
			);
			return false;
		}
	}
});
