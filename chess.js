let board = `~~~~~~~~
             ~~kb~~~~
             ~~K~~~~~
             ~~~~~~~~
             ~~~~~~~~
             ~~~~~~~~
             ~~~~~~~~
             ~~~R~~~~`;

// check how the piece moves
const checkMove = (start, end) => {
  let movementType = "";
  let dx = 0;
  let dy = 0;
  dx = Math.abs(start[0] - end[0]);
  dy = Math.abs(start[1] - end[1]);

  if (dx <= 1 && dy <= 1) {
    movementType = "step-";
  }
  if ((dx === 1 && dx === 2 * dy) || dx === 0.5 * dy) {
    movementType = "N";
  }
  if (start[0] - end[0] !== 0 && start[1] - end[1] !== 0) {
    movementType += "diagonal";
  } else if (start[0] - end[0] === 0 && start[1] - end[1] !== 0) {
    movementType += "vertical";
  } else if (start[0] - end[0] !== 0 && start[1] - end[1] === 0) {
    movementType += "horizontal";
  }
  return movementType;
};
const chesslaw = [
  { kind: "K", moves: ["step-vertical", "step-horizontal", "step-diagonal"] },
  {
    kind: "Q",
    moves: [
      "diagonal",
      "horizontal",
      "vertical",
      "step-vertical",
      "step-horizontal",
      "step-diagonal",
    ],
  },
  { kind: "B", moves: ["diagonal", "step-diagonal"] },
  { kind: "N", moves: ["N"] },
  { kind: "p", moves: ["step-horizontal"] },
  {
    kind: "R",
    moves: ["step-horizontal", "step-vertical", "vertical", "horizontal"],
  },
];

const isValidMove = (board, aka, endPos) => {
  let x = 1;
  let y = 1;

  let trimmed = board.replaceAll("\n", "").replaceAll(" ", "");

  let aka2 = aka.toUpperCase();
  let step = 0;
  let piece;
  for (let i = 1; i <= trimmed.length; i++) {
    if (!trimmed.includes(aka)) {
      console.log(aka, " not on the board ");
      return;
    }
    if (trimmed[i] && trimmed[i] !== "~" && trimmed[i] === aka) {
      piece = {
        name: trimmed[i],
        startPos: [i - step + 1, y],
        movementType: checkMove([i - step + 1, y], endPos),
      };
    }
    if (i % 8 === 0) {
      step = 8 * y;
      y++;
      x = 1;
    }
  }
  let c = chesslaw.findIndex((e) => e.kind === aka2);

  console.log(
    chesslaw[c].moves.includes(piece.movementType)
      ? "true ," + piece.movementType + " is a valid move for " + aka
      : "false ," + piece.movementType + " is not a valid move " + aka
  );
};

const testCases = () => {
  isValidMove(board, "R", [1, 1]);
  isValidMove(board, "K", [1, 2]);
  isValidMove(board, "b", [5, 2]);
  isValidMove(board, "R", [8, 8]);
  isValidMove(board, "x", [8, 8]);
};

testCases();
