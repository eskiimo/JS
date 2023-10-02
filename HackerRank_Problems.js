function timeConversion(s) {
  let result, h, m, sec;
  if (s.includes("AM")) {
    let split = s.split(":");
    h = split[0] == "12" ? "00" : split[0];
    m = split[1];
    sec = split[2].replace("AM", "");
    result = [h, m, sec].join(":");
  } else if (s.includes("PM")) {
    let split = s.split(":");
    h =
      split[0] == "12"
        ? "00"
        : parseInt(split[0]) < 12
        ? parseInt(split[0]) + 12
        : split[0];
    m = split[1];
    sec = split[2].replace("PM", "");
    result = [h.toString(), m, sec].join(":");
  }
  return result;
}

console.log(
  "Converting time format from 12 AM/PM to 24: " + timeConversion("07:05:22PM")
);
//////////////////////////////////////////////////////////////////////////////////////////////////////////

function leftRotation(arr, n) {
  for (var i = 0; i < n; i++) {
    arr.push(arr.shift());
  }
  return arr;
}
console.log(
  "rotating an array to the left n of times" + leftRotation([1, 2, 3, 4, 5], 4)
);

//////////////////////////////////////////////////////////////////////////////////////////////////////////

function matchStrings(stringList, queries) {
  let result = [];
  let queryLength = {};
  for (var i = 0; i < queries.length; i++) {
    queryLength[queries[i]] = 1;
  }
  console.log(queryLength);

  for (var i = 0; i < stringList.length; i++) {
    let str = stringList[i];

    if (queryLength[str] >= 1) {
      queryLength[str] += 1;
    } else {
      queryLength[str] -= 1;
    }
  }
  for (let i = 0; i < queries.length; i++) {
    result.push(queryLength[queries[i]] - 1);
  }

  return result;
}
// there's a bug but it works, I really dont know why !! XD
// update
// I figured the bug , it's not a bug it's JavaScript !!! wtf !
console.log(
  "count how many times a query appeared in the stringList",
  matchStrings(
    ["aba", "xd", "xd", "lol", "lol", "xd"],
    ["aba", "xd", "lol", "lol"]
  )
);
