$.extend(hack, {
    intro: "12. For your eyes only",
    problem: "Can you add eyes to the array?",
	example: "//just type it in",
    code: '["smile", "lips", "hair"]',
	success: function(consoleLog, ret) {
        // the push method returns the length of the array
        return (ret == 4 || (typeof(ret)=="object" && ret.length == 4));
	}
});

