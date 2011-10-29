$.extend(hack, {
	intro: "9. 说出你的感受",
	problem: "print out 'Hello World'",
	example: "console.log('hi')//prints 'hi",
	success: function(consoleLog, ret) {

		if (consoleLog[0].toLowerCase() === "hello world") {
			return true;
		} else {
			return false;
		}
	}
});
