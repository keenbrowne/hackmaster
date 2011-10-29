$.extend(hack, {
    intro: "You can get items out of an array using brackets [ and ].",
    problem: "Get the second item in the list of things FangFang likes about YuanYuan?",
    code: 'var likes = ["smile", "beautiful face", "sense of humor", "eyes"]\n',
	success: function(consoleLog, ret) {
        return ret == "beautiful face";
    }
});

