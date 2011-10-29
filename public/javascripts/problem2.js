$.extend(hack, {
	intro: "2. Heart Strings",
	problem: "Tell me your name, in the form of a String",
	example: '"Hello World" //you define a String like this\n"Jack" //Strings can be used to represent names',
	success: function(consoleLog, ret) {		
		if (typeof(ret) == "string") {			
			return true;
		} else {
			return false;
		}
	}
});
