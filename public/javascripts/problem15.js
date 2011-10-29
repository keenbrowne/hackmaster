$.extend(hack, {
    intro: "Actually, YuanYuan's eye's aren't that beautiful.",
    problem: "Use the method 'pop' to remove the last item from the list",
	example: '[1, 2, 3].pop() //becomes [1, 2]',
    code: '["smile", "beautiful face", "sense of humor", "eyes"]',
	success: function(consoleLog, ret) {
        // the push method returns the length of the array
        return (ret == "eyes");
	}
});

