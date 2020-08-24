var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var startBtn = document.getElementById('start');

var message =
  'Congratulations! Now you are prepared to tackle the Challenge this week! Good luck!';
var words = message.split(' ');

// Timer that counts down from 5
function countdown() {
  var timeLeft = 5;

  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function() {
    if (timeLeft > 1) {
      timerEl.textContent = timeLeft + ' seconds remaining';
      timeLeft--;
    } else if (timeLeft === 1) {
      timerEl.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } else {
      timerEl.textContent = '';
      clearInterval(timeInterval);
      displayMessage();
    }
  }, 1000);
}

// Displays the message one word at a time
function displayMessage() {
  var wordCount = 0;

  // Uses the `setInterval()` method to call a function to be executed every 300 milliseconds
  var msgInterval = setInterval(function() {
    if (words[wordCount] === undefined) {
      clearInterval(msgInterval);
    } else {
      mainEl.textContent = words[wordCount];
      wordCount++;
    }
  }, 300);
}

startBtn.onclick = countdown;
     
     // The array of questions for our quiz game.
      var questions = [
        { q: 'The sky is blue.', a: 't' },
        { q: 'There are 365 days in a year.', a: 't' },
        { q: 'There are 42 ounces in a pound.', a: 'f' },
        { q: 'The Declaration of Independence was created in 1745.', a: 'f' },
        { q: 'Bananas are vegetables.', a: 'f' }
      ];

      // We start the game with a score of 0.
      var score = 0;

      // Loop over every question object
      for (var i = 0; i < questions.length; i++) {
        // Display current question to user and ask OK/Cancel
        var answer = confirm(questions[i].q);

        // Compare answers
        if (
          (answer === true && questions[i].a === 't') ||
          (answer === false && questions[i].a === 'f')
        ) {
          // Increase score
          score++;
          alert('Correct!');
        } else {
          alert('Wrong!');
        }
      }

      alert('You got ' + score + '/' + questions.length);