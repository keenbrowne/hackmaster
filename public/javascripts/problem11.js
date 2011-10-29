$.extend(hack, {
    intro: "Sometimes you need a variable that can hold more than one value. For example a list of items to buy at the grocery store or a list of phone numbers.  In javascript you can create an array to hold this list.",
    problem: "Create an array to hold a list of the top three things FangFang admires about YuanYuan.  Her smile, beautiful face, sense of humor.",
	success: function(consoleLog, ret) {
        var expected = ["smile", "beautiful face", "sense of humor"],
            equal = true;
        $(ret).each(function(index, value) {
            if (expected[index] != value) {
                equal = false;
                return false;
            }
        });

        return equal;
	}
});


create
push
pop
index
length
join
