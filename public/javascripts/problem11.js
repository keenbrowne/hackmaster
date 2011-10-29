$.extend(hack, {
    intro: "11. List of things you like",
    problem: "Create an array to hold a list of the top three things FangFang admires about YuanYuan: her smile, lips, and hair.",
	example: '["This", "is", "a", "List"]\n[1, 2, 3]//You can also have a list of numbers',
	success: function(consoleLog, ret) {
        var expected = ["smile", "lips", "hair"],
            equal = true;
        
        if (expected.length != ret.length)
            return false;
        
        $(expected).each(function(index, value) {
            if (ret[index].toLowerCase() != value.toLowerCase()) {
                equal = false;
                return false;
            }
        });

        return equal;
	}
});

