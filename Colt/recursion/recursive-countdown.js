function countdown(num) {
  if (num <= 0) {
    console.log("all done");
    return;
  }
  console.log(num);
  num--;
  countdown(num);
}

// countdown(5);

function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

// console.log(sumRange(3));

function fak(num) {
  if (num === 1) return 1;
  return num * fak(num - 1);
}

console.log(fak(4));
