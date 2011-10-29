$.extend(hack, {
	intro: "you can get a part of a string via substring().",
	problem: "try getting the first 4 characters of coolness",
	success: function(consoleLog, ret) {
		expected = "ness";
		
		if (expected) {			
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
