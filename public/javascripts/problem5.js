$.extend(hack, {
	intro: "5. Second String Hacker",
	problem: "Strings have useful methods to them. How long is your name?",
	example: '"Bob".length\t//putting .length after a String\n\t\t//gets you the number of characters',
	success: function(consoleLog, ret) {
		if (typeof(ret) == "number") {			
			return true;
		} else {
			return false;
		}
	}
});
