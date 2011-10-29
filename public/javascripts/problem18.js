$.extend(hack, {
    intro: "You can do more on each step of a for loop.  For example, you can combine the function, for loop and if statement to determine if FangFang was invited to the party.",
    problem: "Loop over the guest list.  Use an if test to determine if FangFang is invited to the party.  If he his invited return the string invited.",
    code: 'function invited(guestlist) {\n}',
	success: function(consoleLog, ret, code) {
        eval(code);
        if (invited(["Wangran"])) {
            return false;
        }
        if (invited([])) {
            return false;
        }
        if (!invited(["FangFang"])) {
            return false;
        }

        return true;
	}
});

