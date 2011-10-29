$.extend(hack, {
	intro: "Sometimes you have to make a decision in ife",
	problem: "you can if() {} else {}",
	code: "var x = 'not';\nif(x == 'love') {\nconsole.log('keep going');\n} else {\n console.log('pause and think');\n}",
	success: function(consoleLog, ret) {
		expected = "keep going";
		if (consoleLog[0] == expected) {			
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
