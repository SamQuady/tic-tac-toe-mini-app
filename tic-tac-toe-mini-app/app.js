document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("top-left").onclick = function(event) {console.log('you just got clicked')}
  document.getElementById("top-center").onclick = function(event) {console.log('you just got clicked')}
  document.getElementById("top-right").onclick = function(event) {console.log('you just got clicked')}
  document.getElementById("center-left").onclick = function(event) {console.log('you just got clicked')}
  document.getElementById("center-center").onclick = function(event) {console.log('you just got clicked')}
  document.getElementById("center-right").onclick = function(event) {console.log('you just got clicked')}
  document.getElementById("bottom-left").onclick = function(event) {console.log('you just got clicked')}
  document.getElementById("bottom-center").onclick = function(event) {console.log('you just got clicked')}
  document.getElementById("bottom-right").onclick = function(event) {console.log('you just got clicked')}
})

let turnCounter = 0;

let currentToken = () => {
  if (turnCounter % 2 === 0) {
    return 'X'
  } else {
    return 'O'
  };
}