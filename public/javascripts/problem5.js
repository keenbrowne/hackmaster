$.extend(hack, {
	intro: "strings are useful for showing your name and stuff.",
	problem: "type your name with quotes",
	success: function(consoleLog, ret) {		
		if (typeof(ret) == "string") {			
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
