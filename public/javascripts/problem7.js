$.extend(hack, {
	intro: "7. Chains of memory",
	problem: "what do you get when you add together the first 4 characters of hacker with the last 5 characters of marathon?",
	example: '"你"+"好"//加在一起就是"你好"\n"hello" + "world"//"hello world"',
	success: function(consoleLog, ret) {
		expected = "hackathon";
		
		if (expected == ret) {			
			return true;
		} else {
			return false;
		}
	}
});
