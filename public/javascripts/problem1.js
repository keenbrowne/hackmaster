

$.extend(hack, {
	success: function(consoleLog) {
		if (consoleLog === "Hello World") {
			//alert('yay');
			return true;
		} else {
			return false;
		}
	}
});
