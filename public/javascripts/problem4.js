$.extend(hack, {
	intro: "divison time",
	problem: "what is 9483 / 25",
	success: function(consoleLog, ret) {
		expected = 9483/25;
		
		if (consoleLog === expected || ret === expected) {			
			return true;
		} else {
			$('#feedback').append(
				$("<p/>").text("expected " + expected)
			);
			$('#feedback').append(
				$("<p/>").text("actual " + consoleLog)
			);
			return false;
		}
	}
});
