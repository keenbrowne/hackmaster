$.extend(hack, {
	intro: "Looping through",
	problem: "print 1 through 100",
	success: function(consoleLog, ret) {
		expected = function() {
			var output = [];
			for(var i = 1; i<= 100; i++) {
				output.push(i);
			}
			return output;
		}();
		
		if (consoleLog.compareArrays(expected)) {
			return true;
		} else {
			return false;
		}
	}
});
