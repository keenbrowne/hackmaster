$.extend(hack, {
	intro: "10. Milestone",
	problem: "print 1 through 100",
	example: "for(var i = 1; i <= 10; i++) {\nconsole.log('hello')\n}//This prints hello 10 times",
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
