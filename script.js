// numbering the board based on the index of each block on the html
let chessBoardNumbers;

// if the board is fliped
let fliped = false;

// function to change the board's oriantation based on if it's fliped or not
const chessBoardOriantation = () => {
  let normalChessBoard = {
    0: "a8",
    1: "b8",
    2: "c8",
    3: "d8",
    4: "e8",
    5: "f8",
    6: "g8",
    7: "h8",
    8: "a7",
    9: "b7",
    10: "c7",
    11: "d7",
    12: "e7",
    13: "f7",
    14: "g7",
    15: "h7",
    16: "a6",
    17: "b6",
    18: "c6",
    19: "d6",
    20: "e6",
    21: "f6",
    22: "g6",
    23: "h6",
    24: "a5",
    25: "b5",
    26: "c5",
    27: "d5",
    28: "e5",
    29: "f5",
    30: "g5",
    31: "h5",
    32: "a4",
    33: "b4",
    34: "c4",
    35: "d4",
    36: "e4",
    37: "f4",
    38: "g4",
    39: "h4",
    40: "a3",
    41: "b3",
    42: "c3",
    43: "d3",
    44: "e3",
    45: "f3",
    46: "g3",
    47: "h3",
    48: "a2",
    49: "b2",
    50: "c2",
    51: "d2",
    52: "e2",
    53: "f2",
    54: "g2",
    55: "h2",
    56: "a1",
    57: "b1",
    58: "c1",
    59: "d1",
    60: "e1",
    61: "f1",
    62: "g1",
    63: "h1",
  };
  let flipedChessBoard = {
    0: "h1",
    1: "g1",
    2: "f1",
    3: "e1",
    4: "d1",
    5: "c1",
    6: "b1",
    7: "a1",
    8: "h2",
    9: "g2",
    10: "f2",
    11: "e2",
    12: "d2",
    13: "c2",
    14: "b2",
    15: "a2",
    16: "h3",
    17: "g3",
    18: "f3",
    19: "e3",
    20: "d3",
    21: "c3",
    22: "b3",
    23: "a3",
    24: "h4",
    25: "g4",
    26: "f4",
    27: "e4",
    28: "d4",
    29: "c4",
    30: "b4",
    31: "a4",
    32: "h5",
    33: "g5",
    34: "f5",
    35: "e5",
    36: "d5",
    37: "c5",
    38: "b5",
    39: "a5",
    40: "h6",
    41: "g6",
    42: "f6",
    43: "e6",
    44: "d6",
    45: "c6",
    46: "b6",
    47: "a6",
    48: "h7",
    49: "g7",
    50: "f7",
    51: "e7",
    52: "d7",
    53: "c7",
    54: "b7",
    55: "a7",
    56: "h8",
    57: "g8",
    58: "f8",
    59: "e8",
    60: "d8",
    61: "c8",
    62: "b8",
    63: "a8",
  };
  chessBoardNumbers = fliped ? flipedChessBoard : normalChessBoard;
};

// chess pieces as html elements
const chessPieces = {
  "w-rook": '<img src="chess pieces/white-rook.png">',
  "w-knight": '<img src="chess pieces/white-knight.png">',
  "w-bishop": '<img src="chess pieces/white-bishop.png">',
  "w-king": '<img src="chess pieces/white-king.png">',
  "w-queen": '<img src="chess pieces/white-queen.png">',
  "w-pawn": '<img src="chess pieces/white-pawn.png">',
  "b-rook": '<img src="chess pieces/black-rook.png">',
  "b-knight": '<img src="chess pieces/black-knight.png">',
  "b-bishop": '<img src="chess pieces/black-bishop.png">',
  "b-king": '<img src="chess pieces/black-king.png">',
  "b-queen": '<img src="chess pieces/black-queen.png">',
  "b-pawn": '<img src="chess pieces/black-pawn.png">',
};

// the starting poition of every piece on the board
const startingPositions = {
  "w-pawn": ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2"],
  "w-rook": ["h1", "a1"],
  "w-knight": ["b1", "g1"],
  "w-bishop": ["c1", "f1"],
  "w-king": ["e1"],
  "w-queen": ["d1"],
  "b-pawn": ["a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7"],
  "b-rook": ["h8", "a8"],
  "b-knight": ["b8", "g8"],
  "b-bishop": ["c8", "f8"],
  "b-king": ["e8"],
  "b-queen": ["d8"],
};

// possible Moves for each peice
const possibleMoves = {
  knight: [
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
  ],
  bishop: [
    [1, 1],
    [2, 2],
    [3, 3],
    [4, 4],
    [-1, -1],
    [-2, -2],
    [-3, -3],
    [-4, -4],
    [-1, 1],
    [-2, 2],
    [-3, 3],
    [-4, 4],
    [1, -1],
    [2, -2],
    [3, -3],
    [4, -4],
    [5, 5],
    [6, 6],
    [7, 7],
    [-5, -5],
    [-6, -6],
    [-7, -7],
    [-5, 5],
    [-6, 6],
    [-7, 7],
    [5, -5],
    [6, -6],
    [7, -7],
  ],
  rook: [
    [0, 1],
    [0, 2],
    [0, 3],
    [0, 4],
    [0, -1],
    [0, -2],
    [0, -3],
    [0, -4],
    [-1, 0],
    [-2, 0],
    [-3, 0],
    [-4, 0],
    [1, 0],
    [2, 0],
    [3, 0],
    [4, 0],
    [0, 5],
    [0, 6],
    [0, 7],
    [0, -5],
    [0, -6],
    [0, -7],
    [-5, 0],
    [-6, 0],
    [-7, 0],
    [5, 0],
    [6, 0],
    [7, 0],
  ],
  king: [
    [0, 1],
    [1, 1],
    [1, 0],
    [-1, 0],
    [-1, 1],
    [1, -1],
    [0, -1],
    [-1, -1],
  ],
};

// variable to know if the casteling is available capital is white Q for queen's side K for king's side
let canCastle = {
  K: true,
  Q: true,
  k: true,
  q: true,
};

let halfMoveCount = 0;
// letters index of the board
const letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
// numbers index of the board
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// extracting data from url
const url = window.location.href;
const pgnString = url.split("?")[1];
const extractedData = pgnString.split("-");
// getting all the squares of the board
const squares = document.querySelectorAll(".square");

// this will hold all the pgn data extracted
let pgnData = [];

//if the game is playing
let playing = false;

// the Forsyth-Edwards Notation string
let fen = "";

// get the fen string from the board
const getFen = () => {
  const lines = [
    [0, 7],
    [8, 15],
    [16, 23],
    [24, 31],
    [32, 39],
    [40, 47],
    [48, 55],
    [56, 63],
  ];
  const pieceTostring = {
    "w-rook": "R",
    "w-knight": "N",
    "w-bishop": "B",
    "w-king": "K",
    "w-queen": "Q",
    "w-pawn": "P",
    "b-rook": "r",
    "b-knight": "n",
    "b-bishop": "b",
    "b-king": "k",
    "b-queen": "q",
    "b-pawn": "p",
  };
  const rooksStartingPosition = {
    0: ["q", chessPieces["b-rook"]],
    7: ["k", chessPieces["b-rook"]],
    56: ["Q", chessPieces["w-rook"]],
    63: ["K", chessPieces["w-rook"]],
  };
  // cheking if a rook did move
  Object.entries(rooksStartingPosition).forEach((pos) => {
    const [key, value] = pos;
    console.log(key, value[1]);
    if (squares[key].innerHTML != value[1]) {
      canCastle[value[0]] = false;
    }
  });
  if (squares[4].innerHTML != chessPieces["b-king"]) {
    canCastle["k"] = false;
    canCastle["q"] = false;
  } else if (squares[60].innerHTML != chessPieces["w-king"]) {
    canCastle["K"] = false;
    canCastle["Q"] = false;
  }
  let castelingString = "";
  Object.keys(canCastle).forEach((key) => {
    if (canCastle[key] == true) {
      castelingString += key;
    }
  });
  castelingString = castelingString == "" ? "-" : castelingString;
  let turn = getIndex() >= 0 ? (getIndex() % 2 == 0 ? "b" : "w") : "w";
  let emptySquares;
  lines.forEach((line) => {
    emptySquares = 0;
    for (i = line[0]; i <= line[1]; i++) {
      if (squares[i].innerHTML == "") {
        emptySquares += 1;
      } else if (squares[i].innerHTML != "") {
        fen += emptySquares != 0 ? emptySquares : "";
        emptySquares = 0;
        fen += pieceTostring[getKeyByValue(chessPieces, squares[i].innerHTML)];
      }
    }
    fen += emptySquares != 0 ? emptySquares : "";
    fen += "/";
  });
  fen =
    fen.slice(0, -1) +
    " " +
    turn +
    " " +
    castelingString +
    " " +
    "-" +
    " " +
    halfMoveCount +
    " " +
    Math.round((getIndex() + 2) / 2);
};

// function to exctract key by having values
//  this is useful to get the index of which block based on the chessBoardNumbers variable
const getKeyByValue = (object, value) => {
  return Object.keys(object).find((key) => object[key] === value);
};

// resetting the board and puting every peice in its place
const resetBoard = () => {
  chessBoardOriantation();
  Object.keys(canCastle).forEach((key) => {
    canCastle[key] = true;
  });
  for (let i = 0; i < squares.length; i++) {
    // giving every square and empty string value to remove everything
    squares[i].innerHTML = "";
    // puting pieces on their square based on their starting square value
    Object.entries(startingPositions).forEach((entry) => {
      const [key, value] = entry;
      if (value.includes(chessBoardNumbers[i])) {
        squares[i].innerHTML = chessPieces[key];
      }
    });
  }
  document.querySelector("#FEN").innerHTML = "";
};

// Plays The moves
const playMoves = (move, Index) => {
  fen = "";
  halfMoveCount += 1;
  move = move.replaceAll("+", "");
  move = move.replaceAll("#", "");
  move = move.replaceAll("/", "");
  switch (move.length) {
    case 2:
      pawnMoves(move, Index);
      halfMoveCount = 0;
      break;
    case 3:
      switch (move[0]) {
        case "N":
          if (Index % 2 == 0) {
            knightMoves(move[1] + move[2], "w");
          } else {
            knightMoves(move[1] + move[2], "b");
          }
          break;
        case "B":
          if (Index % 2 == 0) {
            bishopMoves(move[1] + move[2], "w");
          } else {
            bishopMoves(move[1] + move[2], "b");
          }
          break;
        case "R":
          if (Index % 2 == 0) {
            rookMoves(move[1] + move[2], "w");
          } else {
            rookMoves(move[1] + move[2], "b");
          }
          break;
        case "Q":
          if (Index % 2 == 0) {
            queenMoves(move[1] + move[2], "w");
          } else {
            queenMoves(move[1] + move[2], "b");
          }
          break;
        case "K":
          if (Index % 2 == 0) {
            kingMoves(move[1] + move[2], "w");
          } else {
            kingMoves(move[1] + move[2], "b");
          }
          break;
      }
      break;
    case 4:
      if (move.includes("x")) {
        halfMoveCount = 0;
        if (letters.includes(move[0])) {
          if (Index % 2 == 0) {
            pawnCapturing(move, "w");
          } else {
            pawnCapturing(move, "b");
          }
        }
        if (move[0] == "N") {
          if (Index % 2 == 0) {
            knightMoves(move[move.length - 2] + move[move.length - 1], "w");
          } else {
            knightMoves(move[move.length - 2] + move[move.length - 1], "b");
          }
        }
        if (move[0] == "B") {
          if (Index % 2 == 0) {
            bishopMoves(move[move.length - 2] + move[move.length - 1], "w");
          } else {
            bishopMoves(move[move.length - 2] + move[move.length - 1], "b");
          }
        }
        if (move[0] == "R") {
          if (Index % 2 == 0) {
            rookMoves(move[move.length - 2] + move[move.length - 1], "w");
          } else {
            rookMoves(move[move.length - 2] + move[move.length - 1], "b");
          }
        }
        if (move[0] == "Q") {
          if (Index % 2 == 0) {
            queenMoves(move[move.length - 2] + move[move.length - 1], "w");
          } else {
            queenMoves(move[move.length - 2] + move[move.length - 1], "b");
          }
        }
        if (move[0] == "K") {
          if (Index % 2 == 0) {
            kingMoves(move[move.length - 2] + move[move.length - 1], "w");
          } else {
            kingMoves(move[move.length - 2] + move[move.length - 1], "b");
          }
        }
      }
      if (move.includes("=")) {
        if (Index % 2 == 0) {
          promotion(move, "w");
        } else {
          promotion(move, "b");
        }
      }
      if (letters.includes(move[1]) || numbers.includes(move[1])) {
        if (move[0] == "N") {
          if (Index % 2 == 0) {
            whichpiece(move, "w", "knight");
          } else {
            whichpiece(move, "b", "knight");
          }
        }
        if (move[0] == "B") {
          if (Index % 2 == 0) {
            whichpiece(move, "w", "bishop");
          } else {
            whichpiece(move, "b", "bishop");
          }
        }
        if (move[0] == "R") {
          if (Index % 2 == 0) {
            whichpiece(move, "w", "rook");
          } else {
            whichpiece(move, "b", "rook");
          }
        }
        if (move[0] == "Q") {
          if (Index % 2 == 0) {
            whichpiece(move, "w", "queen");
          } else {
            whichpiece(move, "b", "queen");
          }
        }
      }
      break;
    case 5:
      if (
        (letters.includes(move[1]) && move.includes("x")) ||
        (numbers.includes(move[1]) && move.includes("x"))
      ) {
        if (move[0] == "N") {
          if (Index % 2 == 0) {
            whichpiece(move, "w", "knight");
          } else {
            whichpiece(move, "b", "knight");
          }
        }
        if (move[0] == "B") {
          if (Index % 2 == 0) {
            whichpiece(move, "w", "bishop");
          } else {
            whichpiece(move, "b", "bishop");
          }
        }
        if (move[0] == "R") {
          if (Index % 2 == 0) {
            whichpiece(move, "w", "rook");
          } else {
            whichpiece(move, "b", "rook");
          }
        }
        if (move[0] == "Q") {
          if (Index % 2 == 0) {
            whichpiece(move, "w", "queen");
          } else {
            whichpiece(move, "b", "queen");
          }
        }
      }
  }
  if (move == "O-O" || move == "O-O-O") {
    if (Index % 2 == 0) {
      castling(move, "w");
    } else {
      castling(move, "b");
    }
  }
  getFen();
  document.querySelector("#FEN").innerHTML = fen;
};

// promotion
const promotion = (move, color) => {
  const promotions = { Q: "queen", N: "Night", B: "bishop", R: "rook" };
  let promotion = move.split("=")[1];
  move = move.split("=")[0];
  if (color == "w") {
    squares[getKeyByValue(chessBoardNumbers, move[0] + "7")].innerHTML = "";
  } else if (color == "b") {
    squares[getKeyByValue(chessBoardNumbers, move[0] + "2")].innerHTML = "";
  }
  squares[getKeyByValue(chessBoardNumbers, move)].innerHTML =
    chessPieces[`${color}-${promotions[promotion]}`];
};

// which piece should move
const whichpiece = (move, color, piece) => {
  let letters = false;
  for (let i = 0; i < squares.length; i++) {
    if (
      chessBoardNumbers[i][0] == move[1] &&
      squares[i].innerHTML == chessPieces[`${color}-${piece}`]
    ) {
      letters = true;
      squares[i].innerHTML = "";
    } else if (
      chessBoardNumbers[i][1] == move[1] &&
      squares[i].innerHTML == chessPieces[`${color}-${piece}`]
    ) {
      squares[i].innerHTML = "";
    }
  }
  squares[
    getKeyByValue(
      chessBoardNumbers,
      move[move.length - 2] + move[move.length - 1]
    )
  ].innerHTML = chessPieces[`${color}-${piece}`];
};

// pawn capturing
const pawnCapturing = (move, color) => {
  // en passant
  if (
    squares[
      getKeyByValue(
        chessBoardNumbers,
        move[move.length - 2] + move[move.length - 1]
      )
    ].innerHTML == "" &&
    color == "w"
  ) {
    squares[
      getKeyByValue(
        chessBoardNumbers,
        move[move.length - 2] + move[move.length - 1] - 1
      )
    ].innerHTML == "";
    squares[
      getKeyByValue(
        chessBoardNumbers,
        move[move.length - 2] + move[move.length - 1]
      )
    ].innerHTML = chessPieces[`${color}-pawn`];
  } else if (
    squares[
      getKeyByValue(
        chessBoardNumbers,
        move[move.length - 2] + move[move.length - 1]
      )
    ].innerHTML == "" &&
    color == "b"
  ) {
    squares[
      getKeyByValue(
        chessBoardNumbers,
        move[move.length - 2] + (parseInt(move[move.length - 1]) + 1)
      )
    ].innerHTML == "";
    squares[
      getKeyByValue(
        chessBoardNumbers,
        move[move.length - 2] + move[move.length - 1]
      )
    ].innerHTML = chessPieces[`${color}-pawn`];
  } else {
    if (color == "w") {
      squares[
        getKeyByValue(chessBoardNumbers, move[0] + (move[3] - 1))
      ].innerHTML = "";
    }
    if (color == "b") {
      squares[
        getKeyByValue(chessBoardNumbers, move[0] + (parseInt(move[3]) + 1))
      ].innerHTML = "";
    }
    squares[
      getKeyByValue(
        chessBoardNumbers,
        move[move.length - 2] + move[move.length - 1]
      )
    ].innerHTML = chessPieces[`${color}-pawn`];
  }
};

// moving a pawn
const pawnMoves = (move, Index) => {
  if (Index % 2 == 0) {
    squares[getKeyByValue(chessBoardNumbers, move)].innerHTML =
      chessPieces["w-pawn"];
    for (let i = parseInt(move.split("")[1]) - 1; i > 0; i--) {
      if (
        squares[getKeyByValue(chessBoardNumbers, move.split("")[0] + i)]
          .innerHTML == chessPieces["w-pawn"]
      ) {
        squares[
          getKeyByValue(chessBoardNumbers, move.split("")[0] + i)
        ].innerHTML = "";
      }
    }
  } else {
    squares[getKeyByValue(chessBoardNumbers, move)].innerHTML =
      chessPieces["b-pawn"];
    for (let i = parseInt(move.split("")[1]) + 1; i < 8; i++) {
      if (
        squares[getKeyByValue(chessBoardNumbers, move.split("")[0] + i)]
          .innerHTML == chessPieces["b-pawn"]
      ) {
        squares[
          getKeyByValue(chessBoardNumbers, move.split("")[0] + i)
        ].innerHTML = "";
      }
    }
  }
};

// moving a night
const knightMoves = (move, color) => {
  for (let i = 0; i < squares.length; i++) {
    if (squares[i].innerHTML == chessPieces[`${color}-knight`]) {
      possibleMoves.knight.forEach((element) => {
        if (
          letters.indexOf(move.split("")[0]) ==
            letters.indexOf(chessBoardNumbers[i].split("")[0]) + element[0] &&
          numbers.indexOf(parseInt(move.split("")[1])) ==
            numbers.indexOf(parseInt(chessBoardNumbers[i].split("")[1])) +
              element[1]
        ) {
          squares[i].innerHTML = "";
        }
      });
    }
  }
  // putting the piece in its place
  squares[getKeyByValue(chessBoardNumbers, move)].innerHTML =
    chessPieces[`${color}-knight`];
};

// bichop moves
const bishopMoves = (move, color) => {
  for (let i = 0; i < squares.length; i++) {
    if (squares[i].innerHTML == chessPieces[`${color}-bishop`]) {
      possibleMoves.bishop.forEach((element) => {
        if (
          letters.indexOf(move.split("")[0]) ==
            letters.indexOf(chessBoardNumbers[i].split("")[0]) + element[0] &&
          numbers.indexOf(parseInt(move.split("")[1])) ==
            numbers.indexOf(parseInt(chessBoardNumbers[i].split("")[1])) +
              element[1]
        ) {
          squares[i].innerHTML = "";
        }
      });
    }
  }
  // putting the piece in its place
  squares[getKeyByValue(chessBoardNumbers, move)].innerHTML =
    chessPieces[`${color}-bishop`];
};

// get the closest castle to move to the square of the move
const closest = (move, color) => {
  // getting the index of the square of the move
  let moveNumb = parseInt(getKeyByValue(chessBoardNumbers, move));
  // ends of the boards as indicated by names
  const leftEnds = [0, 8, 16, 24, 32, 40, 48, 56];
  const rightEnds = [7, 15, 23, 31, 39, 47, 55, 63];
  const bottomEnds = [56, 57, 58, 59, 60, 61, 62, 63];
  const topEnds = [0, 1, 2, 3, 4, 5, 6, 7];
  let found = false;
  let counting = moveNumb;
  let backSteps = 0;
  let frontSteps = 0;
  let steps = 0;

  // cheking the closet castle horisantly
  // cheking evey square on the left to see if it has a castle
  while (!leftEnds.includes(counting)) {
    backSteps--;
    counting--;
    if (squares[counting].innerHTML == chessPieces[`${color}-rook`] && !found) {
      found = true;
      steps = backSteps;
    }
  }

  // rwesetting values
  backSteps = steps == 0 ? 0 : backSteps;
  found = false;
  counting = moveNumb;
  // cheking evey square on the right to see if it has a castle
  while (!rightEnds.includes(counting)) {
    frontSteps++;
    counting++;
    if (squares[counting].innerHTML == chessPieces[`${color}-rook`] && !found) {
      found = true;
      // assigning the closest amount of steps taken to get to the castle
      steps =
        frontSteps < Math.abs(backSteps) || backSteps == 0 ? frontSteps : steps;
    }
  }
  // cheking the closet castle verticaly if no horisantale castle is close
  if (steps == 0) {
    // resseting values
    found = false;
    backSteps = 0;
    frontSteps = 0;
    counting = moveNumb;

    // cheking evey square on the top to see if it has a castle
    while (!topEnds.includes(counting) && counting >= 0) {
      backSteps--;
      counting -= 8;
      if (
        squares[counting].innerHTML == chessPieces[`${color}-rook`] &&
        !found
      ) {
        found = true;
        steps = counting;
      }
    }
    // resetting values
    found = false;
    backSteps = steps == 0 ? 0 : backSteps;
    counting = moveNumb;

    // cheking evey square on the bottom to see if it has a castle
    while (!bottomEnds.includes(counting) && counting <= 63) {
      frontSteps++;
      counting += 8;
      if (
        squares[counting].innerHTML == chessPieces[`${color}-rook`] &&
        !found
      ) {
        found = true;
        // assigning the closest amount of steps taken to get to the castle
        steps =
          frontSteps < Math.abs(backSteps) || backSteps == 0 ? counting : steps;
      }
    }
    // remove the closest castle vertically
    steps != 0 ? (squares[steps].innerHTML = "") : null;
  } else {
    // remove the closest castle horisontaly
    squares[moveNumb + steps].innerHTML = "";
  }
};
// rook moves
const rookMoves = (move, color) => {
  // removing the closest piece
  closest(move, color);
  // putting the piece on its place
  squares[getKeyByValue(chessBoardNumbers, move)].innerHTML =
    chessPieces[`${color}-rook`];
};

// the castling move
const castling = (move, color) => {
  if (color == "b") {
    canCastle["k"] = false;
    canCastle["q"] = false;
  } else if (color == "w") {
    canCastle["K"] = false;
    canCastle["Q"] = false;
  }
  if (move == "O-O") {
    if (color == "b") {
      squares[getKeyByValue(chessBoardNumbers, "h8")].innerHTML = "";
      squares[getKeyByValue(chessBoardNumbers, "f8")].innerHTML =
        chessPieces["b-rook"];
      squares[getKeyByValue(chessBoardNumbers, "e8")].innerHTML = "";
      squares[getKeyByValue(chessBoardNumbers, "g8")].innerHTML =
        chessPieces["b-king"];
    } else {
      squares[getKeyByValue(chessBoardNumbers, "h1")].innerHTML = "";
      squares[getKeyByValue(chessBoardNumbers, "f1")].innerHTML =
        chessPieces["w-rook"];
      squares[getKeyByValue(chessBoardNumbers, "e1")].innerHTML = "";
      squares[getKeyByValue(chessBoardNumbers, "g1")].innerHTML =
        chessPieces["w-king"];
    }
  } else if (move == "O-O-O") {
    if (color == "b") {
      squares[getKeyByValue(chessBoardNumbers, "a8")].innerHTML = "";
      squares[getKeyByValue(chessBoardNumbers, "d8")].innerHTML =
        chessPieces["b-rook"];
      squares[getKeyByValue(chessBoardNumbers, "e8")].innerHTML = "";
      squares[getKeyByValue(chessBoardNumbers, "c8")].innerHTML =
        chessPieces["b-king"];
    } else if (color == "w") {
      squares[getKeyByValue(chessBoardNumbers, "a1")].innerHTML = "";
      squares[getKeyByValue(chessBoardNumbers, "d1")].innerHTML =
        chessPieces["w-rook"];
      squares[getKeyByValue(chessBoardNumbers, "e1")].innerHTML = "";
      squares[getKeyByValue(chessBoardNumbers, "c1")].innerHTML =
        chessPieces["w-king"];
    }
  }
};

// queen moves
const queenMoves = (move, color) => {
  const queenPosibleMoves = possibleMoves.king.concat(
    possibleMoves.bishop,
    possibleMoves.rook
  );
  for (let i = 0; i < squares.length; i++) {
    if (squares[i].innerHTML == chessPieces[`${color}-queen`]) {
      queenPosibleMoves.forEach((element) => {
        if (
          letters.indexOf(move.split("")[0]) ==
            letters.indexOf(chessBoardNumbers[i].split("")[0]) + element[0] &&
          numbers.indexOf(parseInt(move.split("")[1])) ==
            numbers.indexOf(parseInt(chessBoardNumbers[i].split("")[1])) +
              element[1]
        ) {
          squares[i].innerHTML = "";
        }
      });
    }
  }
  squares[getKeyByValue(chessBoardNumbers, move)].innerHTML =
    chessPieces[`${color}-queen`];
};

// king moves
const kingMoves = (move, color) => {
  for (let i = 0; i < squares.length; i++) {
    if (squares[i].innerHTML == chessPieces[`${color}-king`]) {
      possibleMoves.king.forEach((element) => {
        if (
          letters.indexOf(move.split("")[0]) ==
            letters.indexOf(chessBoardNumbers[i].split("")[0]) + element[0] &&
          numbers.indexOf(parseInt(move.split("")[1])) ==
            numbers.indexOf(parseInt(chessBoardNumbers[i].split("")[1])) +
              element[1]
        ) {
          squares[i].innerHTML = "";
        }
      });
    }
  }
  squares[getKeyByValue(chessBoardNumbers, move)].innerHTML =
    chessPieces[`${color}-king`];
};

// extracting the pgn data
for (let j = 0; j < extractedData.length; j++) {
  if (extractedData[j] == "OO") {
    pgnData.push("O-O");
  } else if (extractedData[j] == "OOO") {
    pgnData.push("O-O-O");
  } else {
    pgnData.push(extractedData[j]);
  }
}

// extracting the scor from the pgn data
const score = pgnData[pgnData.length - 2] + "-" + pgnData[pgnData.length - 1];
// removing the score from pgnData
pgnData.pop();
pgnData.pop();

// displaying the pgn data
let count = 1;
for (let i = 0; i < pgnData.length; i++) {
  if (i % 2 == 0) {
    document.querySelector(
      "#game-data"
    ).innerHTML += `<span class='count'>${count}.</span>`;
    count++;
  }
  document.querySelector(
    "#game-data"
  ).innerHTML += `<span class='move'>${pgnData[i]}</span>`;
}

// displaying the score
document.querySelector(
  "#game-data"
).innerHTML += `<span class='score'>${score}</span>`;

// getting the index of the current move
const getIndex = () => {
  for (let i = 0; i < document.querySelectorAll(".move").length; i++) {
    if (document.querySelectorAll(".move")[i].classList.contains("selected")) {
      return i;
    }
  }

  return -1;
};

// displaying the moves based on the clicked move
for (let i = 0; i < document.querySelectorAll(".move").length; i++) {
  let move = document.querySelectorAll(".move")[i];
  move.onclick = () => {
    for (let i = 0; i < document.querySelectorAll(".move").length; i++) {
      document.querySelectorAll(".move")[i].classList.remove("selected");
    }
    document.querySelectorAll(".move")[i].classList.add("selected");
    if (pgnData.indexOf(move.innerHTML) == 0) {
      resetBoard();
      // display the first move
      playMoves(move.innerHTML, getIndex());
    } else {
      resetBoard();
      // display all the previous moves
      for (let x = 0; x <= i; x++) {
        playMoves(pgnData[x], x);
      }
    }
  };
  playing = false;
}

// the autoplay function starting from the index of the move that is currently displayed
const autoplay = (i) => {
  if (i < document.querySelectorAll(".move").length && playing) {
    document.querySelectorAll(".move").forEach((move) => {
      move.classList.remove("selected");
    });
    document.querySelectorAll(".move")[i].classList.add("selected");
    let move = document.querySelectorAll(".move")[i];
    if (i == 0) {
      playMoves(move.innerHTML, i);
    } else {
      for (let x = 0; x <= i; x++) {
        playMoves(pgnData[x], x);
      }
    }
    setTimeout(() => {
      autoplay(getIndex() + 1);
    }, 1000);
  }
};
document.querySelector("#flip").onclick = () => {
  fliped ? (fliped = false) : (fliped = true);
  let i = getIndex();
  resetBoard();
  let move = document.querySelectorAll(".move")[i];
  if (i == 0) {
    playMoves(move.innerHTML, i);
  } else {
    for (let x = 0; x <= i; x++) {
      playMoves(pgnData[x], x);
    }
  }
};
// start the autoplay when after clicking on autoplay
document.querySelector("#autoplay").onclick = () => {
  playing = true;
  autoplay(getIndex() <= 0 ? getIndex() + 1 : getIndex());
};

// pausing the autoplay after clicking on pause
document.querySelector("#pause").onclick = () => {
  playing = false;
};

// displaying the next move after clicking on the next button >>
document.querySelector("#next").onclick = () => {
  playing = false;
  let i = getIndex();
  i++;
  if (i < document.querySelectorAll(".move").length) {
    resetBoard();
    document.querySelectorAll(".move").forEach((move) => {
      move.classList.remove("selected");
    });
    document.querySelectorAll(".move")[i].classList.add("selected");
    let move = document.querySelectorAll(".move")[i];
    if (i == 0) {
      playMoves(move.innerHTML, i);
    } else {
      for (let x = 0; x <= i; x++) {
        playMoves(pgnData[x], x);
      }
    }
  }
};

// displaying the previouse move after clicking on the previous button <<
document.querySelector("#previous").onclick = () => {
  playing = false;
  let i = getIndex();
  i--;
  if (i < document.querySelectorAll(".move").length && i >= 0) {
    resetBoard();
    document.querySelectorAll(".move").forEach((move) => {
      move.classList.remove("selected");
    });
    document.querySelectorAll(".move")[i].classList.add("selected");
    let move = document.querySelectorAll(".move")[i];
    if (i == 0) {
      playMoves(move.innerHTML, i);
    } else {
      for (let x = 0; x <= i; x++) {
        playMoves(pgnData[x], x);
      }
    }
  } else if (i <= 0) {
    document.querySelectorAll(".move").forEach((move) => {
      move.classList.remove("selected");
    });
    resetBoard();
  }
};
// puting the pieces on their starting place on the board
window.onload = (event) => {
  resetBoard();
};

// get best moves
const getResponse = async (fen) => {
  let getData;
  await fetch(
    `https://www.chessdb.cn/cdb.php?action=queryall&board=${fen}&json=1`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      getData = data;
    });
  let count = 1;
  console.log(JSON.stringify(getData));
  console.log(JSON.stringify(getData.moves));
  let bestmoves = await getData.moves;
  document.querySelector("#best-moves").innerHTML = "";
  // for (let i = 0; i < (await bestmoves.length); i++) {
  //   if (i % 2 == 0) {
  //     document.querySelector(
  //       "#best-moves"
  //     ).innerHTML += `<span class='count'>${count}.</span>`;
  //     count++;
  //   }
  //   console.log(bestmoves[i]);
  //   document.querySelector(
  //     "#best-moves"
  //   ).innerHTML += `<span class='move' >${JSON.stringify(bestmoves[i])}</span>`;
  // }
};
for (let i = 0; i < squares.length; i++) {
  squares[i].onclick = () => {
    console.log(i);
  };
}
