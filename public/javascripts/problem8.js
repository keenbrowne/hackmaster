$.extend(hack, {
	intro: "8. Sometimes you have to make a decision in life",
	problem: "Figure out how to go on",
	example: "if(1+1 === 3) {\n\tconsole.log('first');\n} else {\n\tconsole.log('second);\n}//prints 'second'",
	code: "var x = 'not';\nif(x == 'love') {\nconsole.log('go on');\n} else {\n console.log('pause and think');\n}",
	success: function(consoleLog, ret) {
		expected = "go on";
		if (consoleLog[0] == expected) {			
			return true;
		} else {
			return false;
		}
	}
});
