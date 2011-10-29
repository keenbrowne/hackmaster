var editor;
window.onload = function() {
    editor = CodeMirror.fromTextArea($("#editor").get(0),{
        lineNumbers: true
    });
};
