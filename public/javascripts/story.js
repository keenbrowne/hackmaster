var next_step = 0;
var next_text_step = 0;
var stories = [];

var toNextAction = function(){
	var text = stories[next_step].story.text;
	//alert(stories[next_step]);
	text_arr = text.split(';');
	if(next_text_step == 0 && next_step != 0){
		$('#image').fadeOut('slow', function(){
			//alert('test');
			$(this).attr("src", "/images/"+stories[next_step].story.image).fadeIn('slow');
		});
		$('#text').html("");
	}
	$('#text p').fadeTo('fast', 0.66);
	$('#text').append(
		$("<p/>").text(text_arr[next_text_step])
	);
	$('#text p:last').hide().fadeIn('slow');
	if(next_step == stories.length - 1 && next_text_step == text_arr.length - 1){
		// go to the game
		$('#next a').show();
		//alert("go to the game");
	}else{
		if(text_arr.length <= ++next_text_step){
			next_text_step = 0;
			next_step ++;
		}
		setTimeout(toNextAction, next_text_step==0 ? 6000 : 3000);
	}
}

$(function(){
	//alert($('#hidden').attr('tag'));
	stories = eval($('#hidden').attr('tag'));
	var level = $('hidden_level_id').attr('tag');
	toNextAction();
});