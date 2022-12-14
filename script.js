let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');
let rock = document.getElementById('rock');

paper.onclick = function() {
    let div = document.createElement('div');
    div.classList.add('div');
    document.querySelector('body').appendChild(div);

    let playedPaper = document.createElement('p');
    playedPaper.innerHTML = 'You played paper!';
    div.append(playedPaper);

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
    div.append(computerPlay)

    if (computerChoice === 'paper') {
        let tie = document.createElement('p');
        tie.innerHTML = 'It was a tie!';
        div.append(tie);
    } else if (computerChoice === 'scissors') {
        let lose = document.createElement('p');
        lose.innerHTML = 'You lost!';
        div.append(lose);
    } else if (computerChoice === 'rock') {
        let win = document.createElement('p');
        win.innerHTML = 'You won!';
        div.append(win);
    }

    let playAgain = document.createElement('button');
    playAgain.innerHTML = 'Play again';
    div.append(playAgain);
    playAgain.onclick = function() {
        playAgain.parentElement.remove();
    }
}

scissors.onclick = function() {
    let div = document.createElement('div');
    div.classList.add('div');
    document.querySelector('body').appendChild(div);

    let playedScissors = document.createElement('p');
    playedScissors.innerHTML = 'You played scissors!';
    div.append(playedScissors)

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
    div.append(computerPlay);

    if (computerChoice === 'scissors') {
        let tie = document.createElement('p');
        tie.innerHTML = 'It was a tie!';
        div.append(tie);
    } else if (computerChoice === 'rock') {
        let lose = document.createElement('p');
        lose.innerHTML = 'You lost!';
        div.append(lose);
    } else if (computerChoice === 'paper') {
        let win = document.createElement('p');
        win.innerHTML = 'You won!';
        div.append(win);
    }

    let playAgain = document.createElement('button');
    playAgain.innerHTML = 'Play again';
    div.append(playAgain);
    playAgain.onclick = function() {
        playAgain.parentElement.remove();
    }
}

rock.onclick = function() {
    let div = document.createElement('div');
    div.classList.add('div');
    document.querySelector('body').appendChild(div);

    let playedRock = document.createElement('p');
    playedRock.innerHTML = 'You played rock!';
    div.append(playedRock);

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
    div.append(computerPlay);

    if (computerChoice === 'rock') {
        let tie = document.createElement('p');
        tie.innerHTML = 'It was a tie!';
        div.append(tie);
    } else if (computerChoice === 'paper') {
        let lose = document.createElement('p');
        lose.innerHTML = 'You lost!';
        div.append(lose);
    } else if (computerChoice === 'scissors') {
        let win = document.createElement('p');
        win.innerHTML = 'You won!';
        div.append(lose);
    }

    let playAgain = document.createElement('button');
    playAgain.innerHTML = 'Play again';
    div.append(playAgain);
    playAgain.onclick = function() {
        playAgain.parentElement.remove();
    }
}
