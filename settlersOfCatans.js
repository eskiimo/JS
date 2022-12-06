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
  let n = list.length;
  let orderedList = [];
  let st = [];
  for (var i = 0; i < 5; i++) {
    for (let j = 0; j < hex_length[i]; j++) {
      let rand = Math.floor(Math.random() * list.length);
      // console.log(settlers[rand]);
      let randomElement = settlers[rand].toString();

      st.push(randomElement);

      list.splice(rand, 1);
    }
    orderedList.push(st.join(" "));

    console.log(" ".repeat(5 - hex_length[i]) + orderedList[i]);
    st = [];
  }
  return orderedList;
};

// const buildHex = () => {
//   for (var i = 0; i < 5; i++) {
//     console.log(
//       " ".repeat(5 - hex_length[i]) +
//         " h".repeat(hex_length[i]) +
//         " ".repeat(5 - hex_length[i])
//     );
//   }
// };

// buildHex();

console.log(randFunc(settlers));
