const buttonRock = document.getElementById('button-rock');
const buttonPaper = document.getElementById('button-paper');
const buttonScissors = document.getElementById('button-scissors');

let playerPoints = 0;
let compPoints = 0;

const playerPointsElement = document.querySelector('.player-points');
const compPointsElement = document.querySelector('.comp-points');
const resultElement = document.querySelector('.result');
var playerChoiceElement = document.querySelector('.player-choice');
var compChoiceElement = document.querySelector('.comp-choice');

var resetGameButton = document.querySelector('.reset-game');
resetGameButton.addEventListener('click', function () {
    resetGame();
});

function resetGame() {
    playerPoints = 0;
    compPoints = 0;

    playerPointsElement.innerText = playerPoints;
    compPointsElement.innerText = compPoints;
    resultElement.innerText = '';

    playerChoiceElement.innerText = '';
    compChoiceElement.innerText = '';

    clearMessages();
}

function buttonClicked(argButtonName) {
    clearMessages();
    console.log(argButtonName + ' został kliknięty');

    playerMove = argButtonName;
    console.log('wybór ruchu gracza to: ' + playerMove);

    randomNumber = Math.floor(Math.random() * 3 + 1);
    computerMove = getMoveName(randomNumber);
    console.log('ruch komputera to: ' + computerMove);

    displayResult(playerMove, computerMove);
}

function getMoveName(argMoveId) {
    console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
    if (argMoveId == 1) {
        return 'kamień';
    } else if (argMoveId == 2) {
        return 'papier';
    } else if (argMoveId == 3) {
        return 'nożyce';
    } else {
        console.log('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
        return 'kamień';
    }
}

function displayResult(argPlayerMove, argComputerMove) {
    console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);

    if (argPlayerMove == 'papier' && argComputerMove == 'kamień' ||
        argPlayerMove == 'kamień' && argComputerMove == 'nożyce' ||
        argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
        playerPoints++;
        resultElement.innerText = 'Wygrywasz!';
    } else if (argPlayerMove == argComputerMove) {
        resultElement.innerText = 'Remis';
    } else {
        compPoints++;
        resultElement.innerText = 'Przegrywasz :(';
    }

    playerPointsElement.innerText = playerPoints;
    compPointsElement.innerText = compPoints;

    playerChoiceElement.innerText = 'Twój wybór: ' + argPlayerMove;
    compChoiceElement.innerText = 'Wybór komputera: ' + argComputerMove;
}

buttonRock.addEventListener('click', function () {
    buttonClicked('kamień');
});

buttonPaper.addEventListener('click', function () {
    buttonClicked('papier');
});

buttonScissors.addEventListener('click', function () {
    buttonClicked('nożyce');
});
