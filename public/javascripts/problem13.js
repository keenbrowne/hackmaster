$.extend(hack, {
    intro: "13. []",
    problem: "You can get stuff out of an array with []. Get the second item in the list of things FangFang likes about YuanYuan.",
	example: "var x = [5, 10, 15];\nx[0]//5\nx[1]//10\nx[2]//15\n//keep in mind it starts with 0!",
    code: 'var likes = ["smile", "lips", "hair", "eyes"];\n',
	success: function(consoleLog, ret) {
        return ret == "lips";
    }
});

