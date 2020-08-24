var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var startBtn = document.getElementById('start');


// Timer that counts down from 60
function countdown() {
  var timeLeft = 60;

  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function() {
    if (timeLeft > 1) {
      timerEl.textContent = "Timer: " + timeLeft;
      timeLeft--;
    } else if (timeLeft === 1) {
      timerEl.textContent = "Timer: " + timeLeft;
      timeLeft--;
    } else if (timeLeft === 0) {
      timerEl.textContent = "Timer: 0";
      clearInterval(timeInterval);
      displayMessage("");
    }
  }, 1000);
}

startBtn.onclick = countdown;

