$.extend(hack, {
    intro: "11. List of things you like",
    problem: "Create an array to hold a list of the top three things FangFang admires about YuanYuan: her smile, lips, and hair.",
	example: '["This", "is", "a", "List"]\n[1, 2, 3]//You can also have a list of numbers',
	success: function(consoleLog, ret) {
        var expected = ["smile", "lips", "hair"];
        if (expected.length != ret.length) {
            return false;
		}

        return ret[0].toLowerCase() === expected[0] && ret[2].toLowerCase() === expected[2];
	}
});

