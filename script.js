
const userChoiceBtn = document.querySelectorAll('div.choice button');
const resultValue = document.querySelector('#result-content');
const playerPoints = document.querySelector('#player-score');
const computerPoints = document.querySelector('#computer-score');
const restartbtn = document.querySelector('#restart');

let playerScore = 0;
let computerScore = 0;
playVar = ['ROCK', 'PAPER', 'SCISSORS'];

restartbtn.addEventListener('click', () => location.reload());

userChoiceBtn.forEach(button => { button.addEventListener('click', getPlayerChoice) });


function computerPlay(playVar) {
    let computerChoice = Math.floor(Math.random()*3);
    return playVar[computerChoice];
}
function playRound(playerSelection, computerSelection) {
    let result;
    if(playerSelection === computerSelection) {
        playerPoints.textContent = ++playerScore;
        computerPoints.textContent = ++computerScore;
        resultValue.textContent = 'Tie!';
    }
    else if(playerSelection == 'ROCK') {
        if(computerSelection == 'PAPER') {
            computerPoints.textContent = ++computerScore;
            resultValue.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
        }
        else {
            playerPoints.textContent = ++playerScore;
            resultValue.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
        }
    }
    else if(playerSelection == 'SCISSORS') {
        if(computerSelection == 'ROCK') {
            computerPoints.textContent = ++computerScore;
            resultValue.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
        }
        else {
            playerPoints.textContent = ++playerScore;
            resultValue.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
        }
    }
    else if(playerSelection == 'PAPER') {
        if(computerSelection == 'SCISSORS') {
            computerPoints.textContent = ++computerScore;
            resultValue.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
        }
        else {
            playerPoints.textContent = ++playerScore;
            resultValue.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
        }
    }
    winner();
}

function getPlayerChoice(e) {
    const computerSelection = computerPlay(playVar);
    playerSelection = e.target.textContent.toUpperCase();
    result = playRound(playerSelection, computerSelection);
  }

function winner() {
    if(computerScore === 5 || playerScore === 5) {
        if(computerScore === playerScore) {
            resultValue.textContent = 'The game is a tie!';
            resultValue.style.color = 'blue';
            userChoiceBtn.forEach(button => {
                button.removeEventListener('click', getPlayerChoice);
            });
        }
        else if(computerScore > playerScore) {
            resultValue.textContent = 'Computer Wins!!';
            resultValue.style.color = 'red';
            userChoiceBtn.forEach(button => {
                button.removeEventListener('click', getPlayerChoice);
            });
        }
        else {
            resultValue.textContent = 'Player Wins!!';
            resultValue.style.color = 'green';
            userChoiceBtn.forEach(button => {
                button.removeEventListener('click', getPlayerChoice);
            });
        }
    }
}
