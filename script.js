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

let currentScore = 0;

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  // 1. Generate a Random Dice Roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  // 2. Display the Dice
  console.log(dice);
  diceEl.src = `dice-${dice}.png`;
  diceEl.classList.remove('hidden');

  // 3. Check for rolled 1:if true, switch player
  if (dice !== 1) {
    // Add dice to current Score
    currentScore = currentScore + dice;
    current0El.textContent = currentScore;  // Change Later
  } else {
    // switch to next player
  }
});
