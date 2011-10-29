$.extend(hack, {
    intro: "Displaying each item in a list is such a common thing to do, javascript arrays have a special method named 'join' to do it.  ['a','b'].join(',') returnns the string 'a,b' by joining each element in the array with a comma.",
    problem: "This time use the join method to display all the elements in the list separated with a comma.",
    code: '["Wangran", "Wuchang", "Zhangchao", "Xingdan"]',
	success: function(consoleLog, ret) {
        guests = ["Wangran", "Wuchang", "Zhangchao", "Xingdan"];
        return (guests.join(",") == ret);
	}
});

