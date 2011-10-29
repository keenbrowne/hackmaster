$.extend(hack, {
	intro: "Multiplicity",
	problem: "what is 128 * 128?",
	example: "2 * 2 //4\n-6 * 8//-48" , 
	success: function(consoleLog, ret) {
		expected = 128 * 128;
		
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
