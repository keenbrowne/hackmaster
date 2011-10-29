$.extend(hack, {
    intro: "But FangFang also likes her eyes. In javascript you can call a function named 'push' to add items to the array like ['my', 'array'].push('new value');",
    problem: "Can you add eyes to the array?",
    code: '["smile", "beautiful face", "sense of humor"]',
	success: function(consoleLog, ret) {
        // the push method returns the length of the array
        return (ret == 4);
	}
});

