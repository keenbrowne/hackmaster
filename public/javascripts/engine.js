Array.prototype.compareArrays = function(arr) {
    if (this.length != arr.length) return false;
    for (var i = 0; i < arr.length; i++) {
        if (this[i].compareArrays) { //likely nested array
            if (!this[i].compareArrays(arr[i])) return false;
            else continue;
        }
        if (this[i] != arr[i]) return false;
    }
    return true;
}

var old_log = console.log;

var advance = function() {
	// old_log("advancing to next stage")
	var level_id = $("#level_id").attr("level_id")
	if(level_id % 5 == 0) {
		url = '/stories/' + (level_id / 5)
	} else {
		url = '/games/' + (level_id + 1)
	}
	var url = document.URL;
	if(url.length > 0){
		counter = eval(url[url.length - 1]) + 1;
		url = url.substr(0, url.length-1) + counter;
		window.location.href = url;
	}
}

var hack = {
	handleSyntaxError: function(e) {
		$("#feedback").text("ERROR: " + e);
	},
	success: function() {
		return false;
	}
}

var debug = function(str) {
	$("#debug").append($("<p/>").html(str));
}

$(document).ready(function() {
	//load the problem
	$("#intro").html(hack.intro)
	$("#problem").html(hack.problem)
	
	var consoleLog = [];
	var feedback = $('#feedback');
	
	console.log = function(str) {
		consoleLog.push(str);
	}
	
	$("#compile").click(function() {
		consoleLog = [];
		try {
			var code = $("#console textarea").val();
			var ret = eval(code);
			debug("type= " + typeof(ret));
			if(typeof ret == "function") {
	
				ret = ret();
			}
		} catch(e) {
			hack.handleSyntaxError(e);
		}

		debug("ret=" + ret);
		debug("log=" + consoleLog);

		if (!hack.success(consoleLog, ret)) {
			$('#feedback').append(
				$("<p/>").text("Try again.")
			);
			consoleLog = null;
		} else {
			$('#feedback').append(
				$("<p/>").text("Success.")
			);
			
			smoke.signal("You got it! Onto the next problem!", 1500);
			setTimeout(advance, 1500);
			
			consoleLog = null;
		}
	})
});