$.extend(hack, {
    intro: "You can get the number of items in an array by referencing the length property like. [].length",
    problem: "How many things does FangFang like about YuanYuan",
    code: '["smile", "beautiful face", "sense of humor", "eyes"]',
	success: function(consoleLog, ret) {
        // the push method returns the length of the array
        return (ret == 4);
	}
});

