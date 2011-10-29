var story_points = [3, 6, 9, 12, 15]

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

var advance = function() {
	// old_log("advancing to next stage")
	var level_id = parseInt($("#level_id").attr("level_id"))
	var game_id = story_points.indexOf(level_id)
	if(game_id >= 0) {
		url = '/stories/' + (game_id + 2) + "?level_id=" + (level_id + 1)
	} else {
		url = '/games/' + (level_id + 1)
	}
	window.location.href = url;
}

var hack = {
	handleSyntaxError: function(e) {
		$("#debug").text("ERROR: " + e);
	},
	success: function() {
		return false;
	}
}

var debug = function(str) {
	$("#debug").append($("<p/>").html(""+str));
}

$(document).ready(function() {
	//load the problem
	$("#intro").html(hack.intro)
	$("#problem").html(hack.problem)
	example_editor.setValue(hack.example)

    if (hack.code) {
      editor.setValue(hack.code);
    }
	var consoleLog = [];
	var feedback = $('#feedback');
	
	console.log = function(str) {
		consoleLog.push(str);
	}
	
	$("#compile").click(function() {
		consoleLog = [];
		try {
			var code = editor.getValue();
			var ret = eval(code);
			if(typeof ret == "function") {
				ret = ret();
			}
		} catch(e) {
			hack.handleSyntaxError(e);
			debug(e);			
		}

		if (consoleLog.length > 0) {
			debug(consoleLog[0]);
		}
		if (ret) {
			debug(ret)
		}

		if (!hack.success(consoleLog, ret, code)) {
			$('#feedback').append(
				$("<p/>").text("Try again.")
			);
			consoleLog = null;
		} else {
			$('#feedback').append(
				$("<p/>").text("Success.")
			);
			
			smoke.signal("You got it! Onto the next problem!", 2250);
			setTimeout(advance, 2250);
			
			consoleLog = null;
		}
	})
});
