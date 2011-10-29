$.extend(hack, {
	success: function(consoleLog, ret) {
		expected = 4
		
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
