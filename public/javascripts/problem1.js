$.extend(hack, {
	intro: "start with something simple",
	problem: "add 2 + 2",
	success: function(consoleLog, ret) {
		if (consoleLog === 4 || ret === 4) {
			return true;
		} else {
			return false;
		}
	}
});
