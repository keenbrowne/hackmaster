var editor;
$(document).ready(function() {
    editor = CodeMirror.fromTextArea($("#editor").get(0),{
        lineNumbers: true
    });
});
