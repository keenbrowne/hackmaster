$.extend(hack, {
	success: function(consoleLog, ret) {
		expected = function() {
			var output = [];
			for(var i = 0; i< 100; i++) {
				output.push(i);
			}
			return output;
		}();
		
		if (consoleLog.compareArrays(expected)) {
			return true;
		} else {
			$('#feedback').append(
				$("<p/>").text("expected " + expected)
			);
			$('#feedback').append(
				$("<p/>").text("actual " + consoleLog)
			);
			
			return false;
		}
	}
});
