// --------------- Rock-Paper-Scissors ----------------
// *********Algorithm*********
// Create computer pick
// Compare to your pick
// Display result

const comp = document.querySelector('.comp');
const output = document.querySelector('.result');
const randomPick = Math.random();
const computerMove = pickComputer();
const reset = document.querySelector('#reset');
const scoreCard = document.querySelector('#score')
let result = '';  
const buttonRock = document.querySelector('#rock');
const buttonPaper = document.querySelector('#paper');
const buttonScissors = document.querySelector('#scissors');

reset.addEventListener('click', () => {
  localStorage.removeItem('score')
});

let score = JSON.parse(localStorage.getItem('score')) || { 
  wins: 0, 
  losses: 0,
  ties: 0
};

function pickComputer(){
  let computerMove;

  if(randomPick >= 0 && randomPick <= 1/3){
    computerMove = 'rock';
  } 
  else if(randomPick > 1/3 && randomPick < 2/3){
    computerMove = 'paper';
  } 
  else if(randomPick >= 2/3 && randomPick < 1){
    computerMove = 'scissors';
  }
  return `${computerMove}`;
}

buttonRock.addEventListener('click', () => playerPick('rock'))
buttonPaper.addEventListener('click', () => playerPick('paper'))
buttonScissors.addEventListener('click', () => playerPick('scissors'))

function playerPick(pick){
    startPlay(pick);
}

function startPlay(playerMove){
  if(playerMove === 'rock'){
    computerMove === 'rock' ? result = 'Tie' : null;
    computerMove === 'paper' ? result = 'You Lose': null;
    computerMove === 'scissors' ? result = 'You Win' : null;
  } 
  else if(playerMove === 'paper'){
    computerMove === 'rock' ? result = 'You Win' : null;
    computerMove === 'paper' ? result = 'Tie': null;
    computerMove === 'scissors' ? result = 'You Lose' : null;
  }
  else if(playerMove === 'scissors') {
    computerMove === 'rock' ? result = 'You Lose' : null;
    computerMove === 'paper' ? result = 'You Win': null;
    computerMove === 'scissors' ? result = 'Tie' : null;
  }
  
  result === 'You Win' ? score.wins += 1 :
  result === 'You Lose' ? score.losses += 1 :
  result === 'Tie' ? score.ties += 1: null;
  

  buttonRock.disabled = 'true';
  buttonRock.style.border = 'none';
  buttonRock.style.boxShadow = 'none';
  buttonPaper.disabled = 'true';
  buttonPaper.style.border = 'none';
  buttonPaper.style.boxShadow = 'none';
  buttonScissors.disabled = 'true';
  buttonScissors.style.border = 'none';
  buttonScissors.style.boxShadow = 'none';

  comp.innerHTML = `COMP <img src="./images/${computerMove}_icon.png"         
      class="pick""> vs  <img src="./images/${playerMove}_icon.png" class="pick"> YOU `;
  output.innerHTML = result;

  localStorage.setItem('score', JSON.stringify(score)); 
  
  console.log(score)
  scoreCardUpdate();

  setTimeout(()=>{
    window.location.reload();
  }, 5000)
}

function scoreCardUpdate(){
  scoreCard.innerHTML =(`Wins = ${score.wins}, Losses = ${score.losses},
  Ties = ${score.ties}`);
}
scoreCardUpdate();