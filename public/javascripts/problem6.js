$.extend(hack, {
	intro: "6. Fragments of memory",
	problem: "What is the first 4 characters of the word 'coolness'?",
	example: '"abc".substring(0,2)//This gives us "ab"\n//note that we start counting from 0, computers are weird like that',
	success: function(consoleLog, ret) {		
		if (ret == "cool") {			
			return true;
		} else {
			return false;
		}
	}
});
