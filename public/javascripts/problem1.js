$.extend(hack, {
	intro: "1. 简单的开始",
	problem: "30+12等于?",
	example: "//I'm a comment, comments are here to help you through your journey\n1+1 //2\n3+3 //6",
	success: function(consoleLog, ret) {
		if (ret === 42) {
			return true;
		} else {
			return false;
		}
	}
});
