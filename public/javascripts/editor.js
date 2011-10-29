var editor;
$(document).ready(function() {
    editor = CodeMirror.fromTextArea($("#editor").get(0),{
        lineNumbers: false
    });

    example_editor = CodeMirror.fromTextArea($("#example_screen").get(0),{
        lineNumbers: false,
		readOnly: true
    });

});
