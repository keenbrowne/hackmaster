$.extend(hack, {
	intro: "lets try multiplication",
	problem: "what is 25 * 67?",
	success: function(consoleLog, ret) {
		expected = 25 * 67;
		
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
