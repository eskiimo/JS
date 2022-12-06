//  Generate a valid randomized Catan board in which 6s and 8s cannot touch each other.
//  These use A B C for 10 11 12, respectively, and . for the empty desert hex.

//   B B C
//  3 A 3 A
// 2 4 6 . 6
//  4 5 9 9
//   8 5 8

const settlers = [
  2,
  3,
  4,
  5,
  6,
  8,
  9,
  "A",
  "B",
  "C",
  3,
  4,
  5,
  6,
  8,
  9,
  "A",
  "B",
  ".",
];
const hex_length = [3, 4, 5, 4, 3];

const randFunc = (array) => {
  let list = [...array];
  orderedList = [];
  let st = [];
  let valid = [];
  for (var i = 0; i < hex_length.length; i++) {
    for (let j = 0; j < hex_length[i]; j++) {
      let rand = Math.floor(Math.random() * list.length);
      // console.log(settlers[rand]);
      let randomElement = list[rand].toString();

      st.push(randomElement);
      valid.push(randomElement);

      list.splice(rand, 1);
    }
    orderedList.push(st);

    st = [];

    console.log(" ".repeat(5 - hex_length[i]) + orderedList[i].join(" "));
  }

  for (var i = 0; i < hex_length.length; i++) {
    for (let j = 0; j < hex_length[i]; j++) {
      if (orderedList[i][j] == 6 || orderedList[i][j] == 8) {
        if (i <= 3) {
          // top side of hexagon
          if (
            (i - 1 > -1 &&
              j - 1 > -1 &&
              orderedList[i - 1][j - 1] == orderedList[i][j]) ||
            (i - 1 > -1 && orderedList[i - 1][j] == orderedList[i][j]) ||
            (j - 1 > -1 && orderedList[i][j - 1] == orderedList[i][j]) ||
            (j + 1 <= hex_length[i] &&
              orderedList[i][j + 1] == orderedList[i][j]) ||
            (i + 1 < 5 && orderedList[i + 1][j] == orderedList[i][j]) ||
            (i + 1 > 5 &&
              j + 1 <= hex_length[i] &&
              orderedList[i + 1][j + 1] == orderedList[i][j])
          ) {
            console.log("Err in top side at element : " + orderedList[i][j]);
            console.log(settlers);
            return;
          }
        } else {
          // bottom side of hexagon
          if (
            (i - 1 > -1 &&
              j + 1 <= hex_length[i] &&
              orderedList[i - 1][j + 1] == orderedList[i][j]) ||
            (i - 1 > -1 && orderedList[i - 1][j] == orderedList[i][j]) ||
            (j - 1 > -1 && orderedList[i][j - 1] == orderedList[i][j]) ||
            (j + 1 <= hex_length[i] &&
              orderedList[i][j + 1] == orderedList[i][j]) ||
            (i + 1 < 5 && orderedList[i + 1][j] == orderedList[i][j]) ||
            (i + 1 < 5 &&
              j - 1 > -1 &&
              orderedList[i + 1][j - 1] == orderedList[i][j])
          ) {
            console.log("Err in bottom side at element : " + orderedList[i][j]);
            console.log(settlers);
            return;
          }
        }
      }
    }
  }
  console.log(settlers);
  console.log(' Valid Board "fingers crossed"');
};
const testCases = () => {
  randFunc(settlers);
  randFunc(settlers);
  randFunc(settlers);
  randFunc(settlers);
};
testCases();
// B 6 A
// 6 B 3 8
// . C 4 8 A
// 5 2 9 5
// 9 4 3
