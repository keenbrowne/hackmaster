$.extend(hack, {
	success: function(consoleLog) {
		expected = function() {
			var output;
			for(var i = 0; i< 100; i++) {
				output += i + "\n"
			}
		}();
		
		if (consoleLog === expected) {
			//alert('yay');
			return true;
		} else {
			return false;
		}
	}
});
