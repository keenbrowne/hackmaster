$.extend(hack, {
    intro: "14. Count your blessings",
    problem: "You can count the number of items in an array with .length - How many things does FangFang like about YuanYuan",
	example: "[1, 10, 100].length //3",
    code: '["smile", "lips", "hair", "eyes"]',
	success: function(consoleLog, ret) {
        // the push method returns the length of the array
        return (ret == 4);
	}
});

