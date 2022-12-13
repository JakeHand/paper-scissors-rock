let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');
let rock = document.getElementById('rock');

function computerChoice() {
    let choiceNumber = Math.floor(Math.random() * 3);
    let computerChoice;
    if (choiceNumber === 0) {
        computerChoice = 'The computer played paper!';
    } else if (choiceNumber === 1) {
        computerChoice = 'The computer played scissors!';
    } else if (choiceNumber === 2) {
        computerChoice = 'The computer played rock!';
    }
    let computerPlay = document.createElement('p');
    computerPlay.innerHTML = computerChoice;
    document.querySelector('body').appendChild(computerPlay);
}

paper.onclick = function() {
    let playedPaper = document.createElement('p');
    playedPaper.innerHTML = 'You played paper!';
    document.querySelector('body').appendChild(playedPaper);
    computerChoice();
}

scissors.onclick = function() {
    let playedScissors = document.createElement('p');
    playedScissors.innerHTML = 'You played scissors!';
    document.querySelector('body').appendChild(playedScissors);
    computerChoice();
}

rock.onclick = function() {
    let playedRock = document.createElement('p');
    playedRock.innerHTML = 'You played rock!';
    document.querySelector('body').appendChild(playedRock);
    computerChoice();
}
