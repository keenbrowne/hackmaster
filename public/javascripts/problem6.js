$.extend(hack, {
	intro: "you can figure out how long your name is by using .length",
	problem: "what is the length of your name?",
	success: function(consoleLog, ret) {		
		if (typeof(ret) == "number") {			
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
