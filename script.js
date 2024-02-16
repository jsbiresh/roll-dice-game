'use strict';

// let diceValue = 5;
// let currScore0 = 0;
// let currScore1 = 1;

// function rollDice() {
//   diceValue = Math.trunc(Math.random() * 6) + 1;

//   console.log(diceValue);
// }

// const score0El = document.querySelector('#score--0');
// const score1El = document.getElementById('score--1');

// const currScore0El = document.getElementById('current--0');
// const currScore1El = document.getElementById('current--1');

// // Button to Roll Dice and Generate a new Number
// const btnRollDice = document.querySelector('.btn--roll');

// // Button to hold and add the current score to specific user's total value
// // const btnHoldDice = document.querySelector('.')

// // change dice picture
// const dicePicture = document.querySelector('.dice');

// btnRollDice.addEventListener('click', rollDice);

// selecting elements
// selecting the <section></section> with class, to activate the style for active player
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

// function to switch player
const switchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) { // if game is still active and no player has won yet.
    // 1. Generate a Random Dice Roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display the Dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3. Check for rolled 1:if true, switch player
    if (dice !== 1) {
      // Add dice to current Score
      currentScore = currentScore + dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      // current0El.textContent = currentScore;  // Change Later
    } else {
      // switch to next player
      // document.getElementById(`current--${activePlayer}`).textContent = 0;
      // currentScore = 0;
      // activePlayer = activePlayer === 0 ? 1 : 0;
      // player0El.classList.toggle('player--active');
      // player1El.classList.toggle('player--active');
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // this denotes if the game is still active or not
    // console.log('Hold Button!')

    // 1. Add current score to the score of the active player
    scores[activePlayer] = scores[activePlayer] + currentScore;
    // scores[1] = scores[1] = currentScore;

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2. Check if score >= 100.
    if (scores[activePlayer] >= 110) {
      // Finish the game
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // Switch to the next player
      switchPlayer();
    }
  }
});


btnNew.addEventListener('click', function() {

  currentScore = 0;
  scores[0] = 0;
  scores[1] = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  
  // player0El.classList.remove('.player--winner')
  // player1El.classList.remove('.player--winner')
  // player0El.classList.add('player--active');
  // player1El.classList.remove('player--active');
  document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
  
  activePlayer = 0;
  playing = true;
  document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
  
});