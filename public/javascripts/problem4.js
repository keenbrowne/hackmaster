$.extend(hack, {
	intro: "4. Adding it all together",
	problem: "what is (25 + 18) * 30?",
	example: "(1 + 2) * 3//Order of operations is important, this is 6\n1 + (2 * 3)//Order of operations is important, this is 7",
	success: function(consoleLog, ret) {
		expected = (25 + 18) * 30;		
		if (ret === expected) {			
			return true;
		} else {
			return false;
		}
	}
});
