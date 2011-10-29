$.extend(hack, {
    intro: "Sometimes when programming it is useful to do something repeatedly.  For example, you might want to display each element of an array on the screen.  A for loop is a useful way to do something to each element in a list.",
    problem: "Yuanyuan is hosting a party and you got a copy of her guest list as an array.  Use console.log to print out each guest in the list.",
    code: 'var guests = ["Wangran", "Wuchang", "Zhangchao", "Xingdan"]',
	success: function(consoleLog, ret) {
        guests = ["Wangran", "Wuchang", "Zhangchao", "Xingdan"];
        return (guests.join(",") == consoleLog);
	}
});

