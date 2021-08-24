'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

//Setter Functions
const displayMessage = message =>
  (document.querySelector('.message').textContent = message);

const setScore = score =>
  (document.querySelector('.score').textContent = score);

const setBackground = color =>
  (document.querySelector('body').style.backgroundColor = color);

//Main Logic
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //When there is no input
  if (!guess) {
    displayMessage('⛔ No Number..');
  }

  //When the player wins
  else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number...');

    setBackground('#60b347');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  //When the guess is different
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too low! ');
      score--;
      setScore(score);
    } else {
      displayMessage('💥 You lost the game');
      setBackground('red');
      setScore(0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  displayMessage('😐 Start Guessing');
  setScore(score);
  document.querySelector('.guess').value = '';
  setBackground('#222');
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
});
