var argMoveId, argPlayerMove, argComputerMove, computerMove, playerMove, randomNumber, playerInput;

/**
 * Zwraca nazwę ruchu na podstawie jego identyfikatora.
 */
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

/**
 * Wyświetla wynik gry na podstawie ruchów gracza i komputera.
 */
function displayResult(argPlayerMove, argComputerMove) {
  console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);

  if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
    console.log('Wygrywasz!');
  } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
    console.log('Wygrywasz!');
  } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
    console.log('Wygrywasz!');
  } else if (argPlayerMove == argComputerMove) {
    console.log('Remis');
  } else {
    console.log('Przegrywasz :(');
  }

  console.log('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
}

playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('wybór ruchu gracza to: ' + playerInput);
playerMove = getMoveName(parseInt(playerInput));
console.log('ruch gracza to: ' + playerMove);
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
computerMove = getMoveName(randomNumber);
console.log('ruch komputera to: ' + computerMove);
displayResult(playerMove, computerMove);
