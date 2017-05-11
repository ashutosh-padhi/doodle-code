require("codemirror/mode/htmlmixed/htmlmixed");
var CodeMirror = require('codemirror')
codemirror = CodeMirror.fromTextArea(document.getElementById("editor"), {
  lineNumbers: true,
  mode: "htmlmixed"
});
window.onload = function(){
  var iframe = document.getElementById("iframe"),
      iframeDocument = iframe.contentWindow.document,
      html = document.getElementById("editor"),
      run = function(){
        var htmlContent = html.textContent;
        iframe.contentWindow.document.write(codemirror.getValue());
        iframe.contentWindow.document.close();
      };
  document.getElementById("run").onclick = run;
}