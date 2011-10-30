var story_points = [3, 6, 8, 12, 15]

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


var feedback_msg = 0
var hack = {
	handleSyntaxError: function(e) {
		var r = feedback_msg++ % 3;
		if(r == 0 ) {
			debug("There is something wrong with your code. Try to figure it out.");
		} else if (r == 1) {
			debug("You can do it. here's the error: " + e);
		} else {
			debug("send some money to jihua@paypal.com, and we'll help you figure it out!")
		}
	},
	success: function() {
		return false;
	}
}

var debug = function(str) {
	$("#debug").append($("<p/>").html(""+str));
}

$(document).ready(function() {
	
	//
	var level_id = parseInt($("#level_id").attr("level_id"))
	if (level_id < 3) {
		$("#man_page").hide();
	} else {
		$("#man_page").click(function(e) {
			e.preventDefault();
			smoke.alert("Think more, code less", 1000)
		});
	}
	if (level_id < 6) {
		$("#keyboard").hide();
	} else {
		$("#keyboard").click(function(e) {
			e.preventDefault();
			smoke.alert('This problem is so hard even I dont know what to do, says the keyboard');
		});
	}
	
	//tipsy
	$(".tipsy_thing a").tipsy();
	
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
		}

		if (consoleLog.length > 0) {
			debug(consoleLog[0]);
		}
		if (ret) {
			debug(ret)
		}

		if (!hack.success(consoleLog, ret, code)) {
			debug("You are close, but the answer is a bit off, try again");
			consoleLog = null;
		} else {
			debug("胜利 - Victory!!");
						
			smoke.signal("You got it! Onto the next problem!", 2250);
			setTimeout(advance, 2250);
			
			consoleLog = null;
		}
	})
});
