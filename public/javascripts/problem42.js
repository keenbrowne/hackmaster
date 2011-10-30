$.extend(hack, {
    intro: "42. ???",
    problem: "Hack your way into the party.  Use an if test to determine if FangFang is invited to the party.  If he his invited return the string invited.",
    code: 'function invited(guestlist) {\n}',
	example: '//you are on your own',
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

