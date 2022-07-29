function getWordCount(node) {
  return node.textContent.trim().split(" ").length;
}
var paragraphs = document.querySelectorAll("p.counter")
for ( var i = 0; i < paragraphs.length; i++ ) {
  p = paragraphs[i];
  c = p.textContent.trim().split(/\s+/).length;
  p.innerHTML = p.innerHTML + " <span style='color: gray'><em>(" + c + " words</em>)</span>";
}
var paragraphs = document.querySelectorAll("div.counter")
for ( var i = 0; i < paragraphs.length; i++ ) {
  p = paragraphs[i];
  c = p.textContent.trim().split(/\s+/).length;
  p.innerHTML = p.innerHTML + "\n<p style='color: gray; text-indent: 0; margin-top: 1em'><em>(" + c + " words</em>)</p>";
}
