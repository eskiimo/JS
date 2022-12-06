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

const randFunc = (list) => {
  let orderedList = [];
  let st = [];
  let valid = [];
  for (var i = 0; i < hex_length.length; i++) {
    for (let j = 0; j < hex_length[i]; j++) {
      let rand = Math.floor(Math.random() * list.length);
      // console.log(settlers[rand]);
      let randomElement = settlers[rand].toString();

      st.push(randomElement);
      valid.push(randomElement);

      list.splice(rand, 1);
    }
    orderedList.push(st.join(" "));

    // console.log(" ".repeat(5 - hex_length[i]) + orderedList[i]);
    // console.log(orderedList[i]);
    st = [];

    console.log(" ".repeat(5 - hex_length[i]) + orderedList[i]);
  }
  // console.log(valid);
  for (let i = 0; i < valid.length; i++) {
    if (valid[i] == 6 || valid[i] == 8) {
      if (
        (i - 5 > -1 && valid[i - 5] == valid[i]) ||
        (i - 4 > -1 && valid[i - 4] == valid[i]) ||
        (i - 1 > -1 && valid[i - 1] == valid[i]) ||
        (i + 1 < valid.length && valid[i + 1] == valid[i]) ||
        (i + 4 < valid.length && valid[i + 4] == valid[i]) ||
        (i + 5 < valid.length && valid[i + 5] == valid[i])
      ) {
        console.log("false");
        break;
      } else {
        console.log("gg");
      }
    }
  }
  return;
};

randFunc(settlers);
