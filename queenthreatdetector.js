function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

function generateBoard() {
  var generatedBoard =
    [
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0]
    ];
  var blackQueenX = getRandomIntInclusive(0, 7);
  var blackQueenY = getRandomIntInclusive(0, 7);
  var whiteQueenX = getRandomIntInclusive(0, 7);
  var whiteQueenY = getRandomIntInclusive(0, 7);
  generatedBoard[blackQueenX][blackQueenY] = 1;

  while (whiteQueenX === blackQueenX && whiteQueenY === blackQueenY) {
    var whiteQueenX = getRandomIntInclusive(0, 7);
    var whiteQueenY = getRandomIntInclusive(0, 7);
  }

  generatedBoard[whiteQueenX][whiteQueenY] = 1;
  return generatedBoard;
}

function queenThreat(chessBoard) {
  // Uncomment to Display the board that is submitted with queen represented as 1's
  console.log(chessBoard);

  var whiteQueenPositionY = 0;
  var whiteQueenPostionX = 0;
  var blackQueenPositionY = 0;
  var blackQueenPositionX = 0;
  var queenLocator = 0;
  var threatFinderY = 0;
  var threatFinderX = 0;
  var threatLocatorFlag = 0;

  // Find the first queen working from element [0][0] to [7][7]
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      var queenLocator = chessBoard[i][j];
      if (queenLocator === 1) {
        whiteQueenPositionY = i;
        whiteQueenPostionX = j;
        i = 8;
        j = 8;
      }
    }
  }

  // Find the second queen working from element [7][7] to [0][0] 
  for (let i = 7; i >= 0; i--) {
    for (let j = 7; j >= 0; j--) {
      var queenLocator = chessBoard[i][j];
      if (queenLocator === 1) {
        blackQueenPositionY = i;
        blackQueenPositionX = j;
        i = -1;
        j = -1;
      }
    }
  }

  // Checking for threat diagonally right and down
  threatFinderY = whiteQueenPositionY + 1;
  threatFinderX = whiteQueenPostionX + 1;
  for (threatFinderY; threatFinderY < 8; threatFinderY++) {
    if (threatFinderY > 7 || threatFinderX > 7) {
      break;
    }
    threatLocatorFlag = chessBoard[threatFinderY][threatFinderX];
    if (threatLocatorFlag === 1) {
      // return "THREAT DETECTED";
      return true;
    }
    threatFinderX++;
  }
  // Checking for threat diagonally left and down
  threatFinderY = whiteQueenPositionY + 1;
  threatFinderX = whiteQueenPostionX - 1;
  for (threatFinderY; threatFinderY < 8; threatFinderY++) {
    if (threatFinderY > 7 || threatFinderX < 0) {
      break;
    }
    threatLocatorFlag = chessBoard[threatFinderY][threatFinderX];
    if (threatLocatorFlag === 1) {
      // return "THREAT DETECTED";
      return true;
    }
    threatFinderX--;
  }

  // Check if queens are vertically or horizontally aligned
  if (whiteQueenPositionY === blackQueenPositionY) {
    // return "THREAT DETECTED";
    return true;
  } else if (whiteQueenPostionX === blackQueenPositionX) {
    // return "THREAT DETECTED";
    return true;
  } else {
    // return "No Threat Detected";
    return false;
  }
}

console.log(queenThreat(generateBoard()));