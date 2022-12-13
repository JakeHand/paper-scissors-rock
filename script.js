let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');
let rock = document.getElementById('rock');

paper.onclick = function() {
    let playedPaper = document.createElement('p');
    playedPaper.innerHTML = 'You played paper!';
    document.querySelector('body').appendChild(playedPaper);

    let randomNumber = Math.floor(Math.random() * 3);
    let computerChoice;
    if (randomNumber === 0) {
        computerChoice = 'paper';
    } else if (randomNumber === 1) {
        computerChoice = 'scissors';
    } else if (randomNumber === 2) {
        computerChoice = 'rock';
    }
    let computerPlay = document.createElement('p');
    computerPlay.innerHTML = 'The computer played ' + computerChoice + '!';
    document.querySelector('body').appendChild(computerPlay);

    if (computerChoice === 'paper') {
        let tie = document.createElement('p');
        tie.innerHTML = 'It was a tie!';
        document.querySelector('body').appendChild(tie);
    } else if (computerChoice === 'scissors') {
        let lose = document.createElement('p');
        lose.innerHTML = 'You lost!';
        document.querySelector('body').appendChild(lose);
    } else if (computerChoice === 'rock') {
        let win = document.createElement('p');
        win.innerHTML = 'You won!';
        document.querySelector('body').appendChild(win);
    }
}

scissors.onclick = function() {
    let playedScissors = document.createElement('p');
    playedScissors.innerHTML = 'You played scissors!';
    document.querySelector('body').appendChild(playedScissors);

    let choiceNumber = Math.floor(Math.random() * 3);
    let computerChoice;
    if (choiceNumber === 0) {
        computerChoice = 'paper';
    } else if (choiceNumber === 1) {
        computerChoice = 'scissors';
    } else if (choiceNumber === 2) {
        computerChoice = 'rock';
    }
    let computerPlay = document.createElement('p');
    computerPlay.innerHTML = 'The computer played ' + computerChoice + '!';
    document.querySelector('body').appendChild(computerPlay);

    if (computerChoice === 'scissors') {
        let tie = document.createElement('p');
        tie.innerHTML = 'It was a tie!';
        document.querySelector('body').appendChild(tie);
    } else if (computerChoice === 'rock') {
        let lose = document.createElement('p');
        lose.innerHTML = 'You lost!';
        document.querySelector('body').appendChild(lose);
    } else if (computerChoice === 'paper') {
        let win = document.createElement('p');
        win.innerHTML = 'You won!';
        document.querySelector('body').appendChild(win);
    }
}

rock.onclick = function() {
    let playedRock = document.createElement('p');
    playedRock.innerHTML = 'You played rock!';
    document.querySelector('body').appendChild(playedRock);

    let choiceNumber = Math.floor(Math.random() * 3);
    let computerChoice;
    if (choiceNumber === 0) {
        computerChoice = 'paper';
    } else if (choiceNumber === 1) {
        computerChoice = 'scissors';
    } else if (choiceNumber === 2) {
        computerChoice = 'rock';
    }
    let computerPlay = document.createElement('p');
    computerPlay.innerHTML = 'The computer played ' + computerChoice + '!';
    document.querySelector('body').appendChild(computerPlay);

    if (computerChoice === 'rock') {
        let tie = document.createElement('p');
        tie.innerHTML = 'It was a tie!';
        document.querySelector('body').appendChild(tie);
    } else if (computerChoice === 'paper') {
        let lose = document.createElement('p');
        lose.innerHTML = 'You lost!';
        document.querySelector('body').appendChild(lose);
    } else if (computerChoice === 'scissors') {
        let win = document.createElement('p');
        win.innerHTML = 'You won!';
        document.querySelector('body').appendChild(win);
    }
}
