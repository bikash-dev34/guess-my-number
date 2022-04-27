'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number';
// document.querySelector('.number').textContent = '12';
// document.querySelector('.score').textContent = '18';
// document.querySelector('.guess').value = 1;
// console.log(document.querySelector('.guess').value);

let uscore = 20;
let uhighscore = 0;
let secretnum = Math.trunc(Math.random() * 20) + 1;
let displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.number').textContent = secretnum;
document.querySelector('.check').addEventListener('click', function () {
  const gues = Number(document.querySelector('.guess').value);
  console.log(gues, typeof gues);
  if (!gues) {
    document.querySelector('.message').textContent = '🤣Please enter number!!';
  } else if (gues === secretnum) {
    // document.querySelector('.message').textContent = '✔ Correct Number';
    displayMessage('✔ Correct Number');
    document.querySelector('body').style.backgroundColor = '#A0E7E5';
    document.querySelector('.number').textContent = secretnum;
    document.querySelector('.number').style.width = '30rem';

    if (uscore > uhighscore) {
      uhighscore = uscore;
      document.querySelector('.highscore').textContent = uhighscore;
    }
  } else if (gues !== secretnum) {
    if (uscore > 1) {
      document.querySelector('.message').textContent =
        gues > secretnum ? '👆 The number is high' : '👇 The number is low';
      uscore--;
      document.querySelector('.score').textContent = uscore;
    } else {
      //   document.querySelector('.message').textContent = ' 😭You Lost The Game';
      displayMessage('😭You Lost The Game');
      document.querySelector('.score').textContent = 0;
    }
    //   } else if (gues < secretnum) {
    //     if (uscore > 1) {
    //       uscore--;
    //       document.querySelector('.score').textContent = uscore;
    //       document.querySelector('.message').textContent = '👇 It is low number';
    //     } else {
    //       document.querySelector('.score').textContent = '😭 You loose game';
    //     }
    //   } else if (gues > secretnum) {
    //     if (uscore > 1) {
    //       uscore--;
    //       document.querySelector('.score').textContent = uscore;
    //       document.querySelector('.message').textContent = '👆 The number is high';
    //     } else {
    //       document.querySelector('.score').textContent = '😭 You loose game';
    //     }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  uscore = 20;
  secretnum = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing';
  document.querySelector('.score').textContent = uscore;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
