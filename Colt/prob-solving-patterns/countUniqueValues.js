// my solution using while
const items = [1, 1, 2, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6];
function cUv(list) {
  let i = 0;
  let j = 1;
  while (j < list.length) {
    if (list[i] == list[j]) {
      j++;
    } else {
      i++;
      list[i] = list[j];
    }
  }
  return i + 1;
}
console.log(cUv(items));

//  Colt solution
function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  var i = 0;
  for (var j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}
console.log(countUniqueValues([1, 2, 2, 5, 7, 7, 99]));
