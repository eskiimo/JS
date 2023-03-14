// consider input of user
const s1 = [
  [10, 13, 14, 11, 5],
  [11, 12, 13, 15, 6],
  [10, 12, 16, 15, 6],
  [10, 11, 14, 15, 6],
];

let newArr = [];
let avgArr = [];
let subAvg = [];

let subjects = [0, 0, 0, 0, 0];
// list of avgs. for each subject initialized with 0

for (var row = 0; row < 4; row++) {
  // 4 or students length
  let tempArr = [];
  let sub = 0;
  let subjAvg = 0;
  for (var col = 0; col < 5; col++) {
    // 5 or subjects length
    tempArr.push(s1[row][col]);
    subjAvg = subjAvg + s1[row][col];
  }

  tempArr.push(subjAvg / 5);
  newArr.push(tempArr);
  // getting average of subjects for every student as an array then add to main array for log()

  for (var i = 0; i < 5; i++) {
    // 5 or subjects length
    subjects[i] += tempArr[i];
    // for each index in SUBJECTS arr we asign to sum of [] of all students marks in that subject
  }
}

// before adding to main array ... get avg ; 4 students ?  divide /4
for (var i = 0; i < 5; i++) {
  subjects[i] = subjects[i] / 4;
}
newArr.push(subjects);
newArr.unshift(["A", "B", "C", "D", "E", "avg"]);
console.table(newArr);
