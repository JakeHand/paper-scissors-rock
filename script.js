// Player choice
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const rock = document.getElementById('rock');

// Game responses
const player = document.getElementById('player');
const computer = document.getElementById('computer');
const outcome = document.getElementById('outcome');
const playerScore = document.getElementById('player-score');
const computerScore = document.getElementById('computer-score');

// Computer's choice innerHTML
const computerPaper = 'The computer played paper!';
const computerScissors = 'The computer played scissors!';
const computerRock = 'The computer played rock!';

// Keep track of scores
let playerScoreCount = 0;
let computerScoreCount = 0;

// Outcome response
const tie = 'You tied!';

const win = function() {
    outcome.innerHTML = 'You won!';
    playerScoreCount++;
    playerScore.innerHTML = 'Your score: ' + playerScoreCount;
}

const lose = function() {
    outcome.innerHTML = 'You lost!';
    computerScoreCount++;
    computerScore.innerHTML = 'Your score: ' + computerScoreCount;
}

const computerChoice = function() {
    const randomNumber = Math.floor(Math.random() * 3);
    let computerChoice;
    switch (randomNumber) {
        case 0:
            computerChoice = 'paper';
            break;
        case 1:
            computerChoice = 'scissors';
            break;
        case 2:
            computerChoice = 'rock';
            break;
    }
    return computerChoice;
}

paper.onclick = function() {
    player.innerHTML = 'You played paper!';
    if (computerChoice() === 'rock') {
        computer.innerHTML = computerRock;
        win();
    } else if (computerChoice() === 'scissors') {
        computer.innerHTML = computerScissors;
        lose();
    } else if (computerChoice() === 'paper') {
        computer.innerHTML = computerPaper;
        outcome.innerHTML = tie;
    }
}

scissors.onclick = function() {
    player.innerHTML = 'You played scissors!';
    if (computerChoice() === 'rock') {
        computer.innerHTML = computerRock;
        lose();
    } else if (computerChoice() === 'scissors') {
        computer.innerHTML = computerScissors;
        outcome.innerHTML = tie;
    }  else if (computerChoice() === 'paper') {
        computer.innerHTML = computerScissors;
        win();
    }
}

rock.onclick = function() {
    player.innerHTML = 'You played rock!';
    if (computerChoice() === 'rock') {
        computer.innerHTML = computerRock;
        outcome.innerHTML = tie;
    } else if (computerChoice() === 'scissors') {
        computer.innerHTML = computerScissors;
        win();
    } else if (computerChoice() === 'paper') {
        computer.innerHTML = computerPaper;
        lose();
    }
}