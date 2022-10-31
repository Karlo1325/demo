'use strict';

/* console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🎉 TOČAN BROJ!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value); */

let scoreNumber = 20;
let highscore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.message').textContent = 'Počni pogađati...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = scoreNumber = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ Nema broja';

    // when player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 TOČAN BROJ!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.highscore').textContent =
      scoreNumber > highscore
        ? (highscore = scoreNumber)
        : (highscore = highscore);

    // when guess is too low
  } else if (guess < secretNumber) {
    if (scoreNumber > 1) {
      document.querySelector('.message').textContent = '📉 Pre mali broj!';
      scoreNumber--;
      document.querySelector('.score').textContent = scoreNumber;
    } else {
      document.querySelector('.message').textContent = '🥲 Izgubio si!';
      document.querySelector('.score').textContent = 0;
    }

    // when guess is too high
  } else if (guess > secretNumber) {
    if (scoreNumber > 1) {
      document.querySelector('.message').textContent = '📈 Pre veliki broj!';
      scoreNumber--;
      document.querySelector('.score').textContent = scoreNumber;
    } else {
      document.querySelector('.message').textContent = '🥲 Izgubio si!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
