$.extend(hack, {
	intro: "1. 简单的开始",
	problem: "30+75等于?",
	example: "1+1 //2\n3+3 //6",
	success: function(consoleLog, ret) {
		if (consoleLog === 4 || ret === 4) {
			return true;
		} else {
			return false;
		}
	}
});
