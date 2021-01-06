document.addEventListener('DOMContentLoaded', function() {
  document.querySelector("button").onclick = function(event) {
  console.log('you just got clicked')
}
})

let turnCounter = 0;

let currentToken = () => {
  if (turnCounter % 2 === 0) {
    return 'X'
  } else {
    return 'O'
  };
}