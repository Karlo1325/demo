'use strict';

// selecting elements
const player0El = document.querySelector('.player--0')
const player1El = document.querySelector('.player--1')
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

// buttons
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const diceEl = document.querySelector('.dice');

const playerWinner = function() {
  document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
  document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
  document.getElementById(`name--${activePlayer}`).textContent = `WINNER`;
  diceEl.classList.add('hidden');
}

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;
//console.log(activePlayer);


// switch player funkcija
const switchPlayer = function() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  // css switch
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}

const resetScores = function() {
  for (let i = 0; i < scores.length; i++) {
    scores[i] = 0;
  }return scores;
}


const startingConditions = function () {
  playing = true;
  score0El.textContent = '0';
  score1El.textContent = '0';
  activePlayer = 0;
  currentScore = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
};

const resset = function() {
  document.querySelector(`.player--1`).classList.remove('player--active');
  document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
  document.getElementById(`name--0`).textContent = `PLAYER 1`;
  document.getElementById(`name--1`).textContent = `PLAYER 2`;
  diceEl.classList.add('hidden');
  resetScores();
}

// starting conditions
startingConditions();
diceEl.classList.add('hidden');

// roll a dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
  
    //1. generating a random dice roll
    const rollDice = Math.trunc(Math.random() * 6) + 1;
  
    //2. display the dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${rollDice}.png`;

    if (rollDice !== 1) {
      // add dice to current score
      currentScore += rollDice;
      document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    
    } else {
      // switch to the next player
      switchPlayer();
  }
  }
});

  // za hold button
btnHold.addEventListener('click', function() {
  if (playing) {
    // 1. add current score to active player's score
    scores[activePlayer] += currentScore;
    // score[1] = scores[1] + currentScore

    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
  
    // 2. check if player's score is >= 100
    if (scores[activePlayer] >=100) {
      // finish the game
      playing = false;
      playerWinner();
    
    } else {
      // switch to the next player
      switchPlayer();
    }
  }
});

// new game button
btnNew.addEventListener('click', function() {
  resset();
  startingConditions();  
  
});
