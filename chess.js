let board = `~~~~~~~~
             ~~kb~~~~
             ~~K~~~~~
             ~~~~~~~~
             ~~~~~~~~
             ~~~~~~~~
             ~~~~~~~~
             ~~~R~~~~`;

///assuming Capital "white" starts top -> down

const checkMove = (start, end) => {
  let movementType;
  let dx = 0;
  let dy = 0;
  if (start[0] - end[0] !== 0 && start[1] - end[1] !== 0) {
    movementType = "diagonal";
  } else if (start[0] - end[0] === 0 && start[1] - end[1] !== 0) {
    movementType = "vertical";
    dx = Math.abs(start[0] - end[0]);
    dy = Math.abs(start[1] - end[1]);

    if (dx <= 1 && dy <= 1) {
      movementType += " step";
    }
  } else if (start[0] - end[0] !== 0 && start[1] - end[1] === 0) {
    movementType = "horizontal";

    dx = Math.abs(start[0] - end[0]);
    dy = Math.abs(start[1] - end[1]);

    if (dx <= 1 && dy <= 1) {
      movementType += " step";
    }
  }
  return movementType;
};

const isValidMove = (board, aka, endPos) => {
  let places = [];
  let x = 1;
  let y = 1;
  let Ltype;
  let movementType;
  let trimmed = board.replaceAll("\n", "").replaceAll(" ", "");

  if (aka.toUpperCase().charCodeAt(0) - aka.charCodeAt(0) === 0) {
    Ltype = "Capital";
  } else {
    Ltype = "small";
  }
  let step = 0;
  let piece;
  for (let i = 1; i <= trimmed.length; i++) {
    if (trimmed[i] && trimmed[i] !== "~" && trimmed[i] === aka) {
      piece = {
        name: trimmed[i],
        startPos: [i - step + 1, y],
        movementType: checkMove([i - step + 1, y], endPos),
      };

      //   places.push(piece);
    }
    if (i % 8 === 0) {
      step = 8 * y;
      y++;
      x = 1;
    }
  }
  console.log(piece.startPos, endPos, piece.movementType);
};

const testCases = () => {
  isValidMove(board, "k", [1, 1]);
  isValidMove(board, "K", [3, 4]);
  isValidMove(board, "b", [5, 2]);
  isValidMove(board, "R", [8, 8]);
};

testCases();
