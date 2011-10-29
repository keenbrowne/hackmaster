var hack = {
	handleSyntaxError: function(e) {
		$("#feedback").text(e);
	},
	success: function() {
		return false;
	}
}

$(document).ready(function() {
	var consoleLog,
	    feedback = $('#feedback');
	
	console.log = function(str) {
		consoleLog = str;
	}
	
	$("#compile").click(function() {
		try {
			var code = $("#console textarea").val();
			eval(code);
		} catch(e) {
			hack.handleSyntaxError(e);
		}
		
		if (!hack.success(consoleLog)) {
			$('#feedback').append(
				$("<p/>").text("Try again.")
			);
			consoleLog = null;
		} else {
			$('#feedback').append(
				$("<p/>").text("Success.")
			);
			// go to the next story
			var url = document.URL;
			if(url.length > 0){
				counter = eval(url[url.length - 1]) + 1;
				url = url.substr(0, url.length-1) + counter;
				window.location.href = url;
			} else{
				alert("something wrong");
			}
			consoleLog = null;
		}
	})
});