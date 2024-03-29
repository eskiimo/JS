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

///////////////////////////////////////////////////////////////////////////////////////
// Magic square

// const checkMagic = (arr, m) => {
//   // Checking if each row sum is same
//   for (var i = 0; i < arr.length; i++) {
//     const tmp = arr[i].reduce((acc, val) => acc + val, 0);
//     return tmp !== m && false;
//   }

//   // Checking if each column sum is same
//   for (let j = 0; j < 3; j++) {
//     const tmp = arr.reduce((acc, row) => acc + row[j], 0);
//     return tmp !== m && false;
//   }

//   //check sum of first diagonal
//   const d1 = a[0][0] + a[1][1] + a[2][2];
//   if (d1 !== m) {
//     return false;
//   }

//   //check sum of second diagonal
//   const d2 = a[0][2] + a[1][1] + a[2][0];
//   if (d2 !== m) {
//     return false;
//   }

//   return true;
// };

function formingMagicSquare(s) {
  const all_possible_values_for_ms = [
    [
      [8, 1, 6],
      [3, 5, 7],
      [4, 9, 2],
    ],
    [
      [6, 1, 8],
      [7, 5, 3],
      [2, 9, 4],
    ],
    [
      [4, 9, 2],
      [3, 5, 7],
      [8, 1, 6],
    ],
    [
      [2, 9, 4],
      [7, 5, 3],
      [6, 1, 8],
    ],
    [
      [8, 3, 4],
      [1, 5, 9],
      [6, 7, 2],
    ],
    [
      [4, 3, 8],
      [9, 5, 1],
      [2, 7, 6],
    ],
    [
      [6, 7, 2],
      [1, 5, 9],
      [8, 3, 4],
    ],
    [
      [2, 7, 6],
      [9, 5, 1],
      [4, 3, 8],
    ],
  ];
  let min = Infinity;
  for (var k = 0; k < all_possible_values_for_ms.length; k++) {
    let cost = 0;
    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 3; j++) {
        cost += Math.abs(s[i][j] - all_possible_values_for_ms[k][i][j]);
      }
    }
    min = Math.min(min, cost);
  }
  console.log(min);
  return min;
}

console.log(
  formingMagicSquare([
    [5, 3, 4],
    [1, 5, 8],
    [6, 4, 2],
  ])
);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// BIG INTEGERS FACTORIAL

function extraLongFactorials(n) {
  const func = (n) => {
    if (BigInt(n) === BigInt(1)) return BigInt(1);
    return BigInt(func(BigInt(n) - BigInt(1)) * BigInt(n));
  };
  console.log(func(n).toString());
}

//////////////////////////////////////////////////////////////////////////////////////////////
// recording score rank on a leaderboard
function climbingLeaderboard(ranked, player) {
  // Write your code here
  let board = [];
  let playerLadder = [];
  for (let score of ranked) {
    if (board.length === 0 || score !== board[board.length - 1]) {
      board.push(score);
    }
  }
  let i = 0;
  let j = board.length - 1;
  while (i < player.length) {
    while (j >= 0 && player[i] >= board[j]) {
      j--;
    }
    const x = j + 2;
    playerLadder.push(x);
    i++;
  }

  return playerLadder;
}

console.log(
  climbingLeaderboard([100, 90, 90, 80, 75, 60], [50, 65, 77, 90, 102])
);
console.log(
  climbingLeaderboard([100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120])
);

// /////////////////////////////////////////////////////////////////////////////
// nonDivisable Subset

function nonDivisibleSubset(s, k) {
  // Write your code here
  const count = new Array(k).fill(0);

  // Count elements with each remainder
  for (let x of s) {
    count[x % k]++;
  }
  console.log(count);
  // Initialize result to store maximal subset size
  let result = 0;

  // Handle elements with remainder 0 separately
  if (count[0] > 0) {
    result++;
  }

  // Iterate through remainders from 1 to k/2 (inclusive)
  for (let i = 1; i <= Math.floor(k / 2); i++) {
    if (i !== k - i) {
      result += Math.max(count[i], count[k - i]);
    } else {
      result++;
    }
  }

  return result;
}

console.log(nonDivisibleSubset([19, 10, 12, 10, 24, 25, 22], 4));

/////////////////////////////////////////////////////////////////////////
// Repeated String
function repeatedString(s, n) {
  // Write your code here
  // abaabaabaa
  let aInString = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "a") aInString += 1;
  }

  const SwilleRepeat = Math.floor(n / s.length);
  const aInRepeated = aInString * SwilleRepeat;

  const lengthOfSInRemainder = n % s.length;

  let charAtRenmainder = 0;
  for (var i = 0; i < lengthOfSInRemainder; i++) {
    if (s[i] === "a") charAtRenmainder += 1;
  }
  const total_A = aInRepeated + charAtRenmainder;
  return total_A;
}

console.log(repeatedString("aba", 10));
//////////////////////////////////////////////////////////////////////////

function jumpingOnClouds(c) {
  // Write your code here
  console.log(c.length);
  let jumps = 0;
  let i = 0;
  while (i < c.length - 1) {
    if (i + 2 < c.length && c[i + 2] === 0) {
      i += 2;
    } else {
      i += 1;
    }
    jumps++;
  }
  return jumps;
}

console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]));
////////////////////////////////////////////////////////////////////////////////////////////////////
function equalizeArray(arr) {
  // Write your code here
  let maxCount = 0;
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) count++;
    }
    maxCount = Math.max(maxCount, count);
  }
  const minDeletions = arr.length - maxCount;
  return minDeletions;
}

console.log(equalizeArray([3, 3, 2, 1, 3]));

////////////////////////////////////////////////////////////////////////////////////////////////////
function queenAttack(n, k, r_q, c_q, obstacles) {
  // Write your code here
  //   return minDeletions;
  let up = n - r_q;
  let right = n - c_q;
  let down = r_q - 1;
  let left = c_q - 1;
  let up_left = Math.min(up, left);
  let up_right = Math.min(up, right);
  let down_left = Math.min(down, left);
  let down_right = Math.min(down, right);

  for (var i = 0; i < k; i++) {
    const [r_o, c_o] = obstacles[i];
    if (r_o === r_q) {
      if (c_o < c_q) {
        left = Math.min(left, c_q - c_o - 1);
      } else if (c_o > c_q) {
        right = Math.min(right, c_o - c_q - 1);
      }
    } else if (c_o === c_q) {
      if (r_o < r_q) {
        down = Math.min(down, r_q - r_o - 1);
      } else if (r_o > r_q) {
        up = Math.min(up, r_o - r_q - 1);
      }
    }

    const dr = r_o - r_q;
    const dc = c_o - c_q;
    if (Math.abs(dr) === Math.abs(dc)) {
      if (dr > 0 && dc > 0) {
        up_right = Math.min(up_right, dr - 1);
      } else if (dr > 0 && dc < 0) {
        up_left = Math.min(up_left, dr - 1);
      } else if (dr < 0 && dc > 0) {
        down_right = Math.min(down_right, -dr - 1);
      } else if (dr < 0 && dc < 0) {
        down_left = Math.min(down_left, -dr - 1);
      }
    }
  }
  const totalAttackSquares =
    up + down + left + right + up_left + up_right + down_left + down_right;

  return totalAttackSquares;
}

console.log(
  queenAttack(5, 3, 4, 3, [
    [5, 5],
    [4, 2],
    [2, 3],
  ])
);

/////////////////////////////////////////////////////////////////////////////////////////////////////
// ACM ICPC Team
function acmTeam(topic) {
  let pairs = [];
  for (var i = 1; i < topic.length + 1; i++) {
    for (var j = i + 1; j < topic.length + 1; j++) {
      if (i !== j) {
        pairs.push([i, j]);
      }
    }
  }

  let maxCount = 0;
  let n = [];
  for (let i = 0; i < pairs.length; i++) {
    let pair = pairs[i];
    let topic1 = topic[pair[0] - 1];
    let topic2 = topic[pair[1] - 1];
    let count = 0;
    for (var j = 0; j < topic1.length; j++) {
      if (topic1[j] | topic2[j]) {
        count++;
      }
    }
    n.push(count);
    console.log(maxCount, count);
    maxCount = Math.max(count, maxCount);
  }
  let teamCount = 0;
  for (var i = 0; i < n.length; i++) {
    if (n[i] === maxCount) teamCount++;
  }
  return [maxCount, teamCount];
}

console.log(acmTeam(["10101", "11100", "11010", "00101"]));
//////////////////////////////////////////////////////////////////////////////////////////////
function gradingStudents(grades) {
  let newGrades = [];
  for (var i = 0; i < grades.length; i++) {
    let remainder = grades[i] % 5;
    if (remainder >= 3) {
      let adj = grades[i] + 5 - remainder;
      if (adj < 40) {
        newGrades.push(grades[i]);
      } else {
        newGrades.push(adj);
      }
    } else {
      newGrades.push(grades[i]);
    }
  }
  return newGrades;
}

console.log(gradingStudents([73, 54, 32, 33]));
//////////////////////////////////////////////////////////////////////////////////////////////
function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // Write your code here
  let apple_count = 0;
  let orange_count = 0;

  for (var i = 0; i < apples.length; i++) {
    if (a + apples[i] >= s && a + apples[i] <= t) {
      apple_count += 1;
    }
  }
  for (var i = 0; i < oranges.length; i++) {
    if (b + oranges[i] <= t && b + oranges[i] >= s) {
      orange_count += 1;
    }
  }

  console.log(apple_count);
  console.log(orange_count);
}

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);
//////////////////////////////////////////////////////////////////////////////////////////////
function kangaroo(x1, v1, x2, v2) {
  // Write your code here

  if (v1 <= v2) {
    return "NO";
  }
  if ((x2 - x1) % (v1 - v2) === 0) {
    return "YES";
  } else {
    return "NO";
  }
}
console.log(kangaroo(0, 3, 4, 2));
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
// Least common multiple and greatest common divisor   factorrrsss (Between two sets)
const gcd = (a, b) => {
  while (b != 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

const lcm = (a, b) => {
  return (a * b) / gcd(a, b);
};

const getTotalx = (a, b) => {
  let lcmA = a[0];
  let gcdB = b[0];

  for (let i = 0; i < a.length; i++) {
    lcmA = lcm(lcmA, a[i]);
  }
  for (let i = 0; i < b.length; i++) {
    gcdB = gcd(gcdB, b[i]);
  }
  console.log(lcmA, gcdB);

  let count = 0;

  for (let i = lcmA, j = 2; i <= gcdB; i = lcmA * j, j++) {
    if (gcdB % i === 0) {
      count++;
    }
  }

  return count;
};

console.log(getTotalx([3, 4], [24, 48]));
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
function birthday(s, d, m) {
  // Write your code here
  let count = 0;
  for (var i = 0; i <= s.length - m; i++) {
    let temp = s.slice(i, i + m);
    let total = temp.reduce((acc, i) => acc + i, 0);
    if (total === d) count++;
  }
  return count;
}

console.log(birthday([1, 2, 1, 3, 2], 3, 2));
/////////////////////////////////////////////////////////////////////////////////////////////
function breakingRecords(scores) {
  // Write your code here
  let minCount = 0;
  let maxCount = 0;
  let max = scores[0];
  let min = scores[0];
  for (let i = 1; i < scores.length; i++) {
    if (scores[i] > max) {
      max = Math.max(max, scores[i]);
      maxCount++;
    } else if (scores[i] < min) {
      min = Math.min(min, scores[i]);
      minCount++;
    }
    //     console.log(maxCount, minCount);
  }
  return [maxCount, minCount];
}

breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]);
///////////////////////////////////////////////////////////////////////////////////////////////////
function divisibleSumPairs(n, k, ar) {
  // Write your code here
  let pairs = [];
  for (var i = 0; i < n; i++) {
    for (var j = i + 1; j < n; j++) {
      let a = ar[i];
      let b = ar[j];
      let sum = a + b;
      if (i < j && sum % k === 0) {
        pairs.push([a, b]);
      }
    }
  }
  return pairs;
}
console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]));
///////////////////////////////////////////////////////////////////////////////////////////////////
function migratoryBirds(arr) {
  // Write your code here
  let obj = {};
  for (var i = 0; i < arr.length; i++) {
    let item = arr[i];
    obj[item] ? (obj[item] += 1) : (obj[item] = 1);
  }
  let max = -Infinity;
  let k;
  for (const key in obj) {
    if (obj[key] > max) {
      max = obj[key];
      k = key;
    } else if ((obj[key] = max)) {
      k = Math.min(k, key);
    }
  }
  return k;
}

console.log(migratoryBirds([1, 1, 2, 2, 3]));
////////////////////////////////////////////////////////////////////////////
function bonAppetit(bill, k, b) {
  // Write your code here
  let sum = bill.reduce((acc, i) => acc + i, 0);
  let annaHalf = sum / 2 - bill[k] / 2;

  if (annaHalf === b) {
    console.log("Bon Appetit");
  } else {
    console.log(b - annaHalf);
  }
}
console.log(bonAppetit([3, 10, 2, 9], 1, 12));
// //////////////////////////////////////////////////////////////////////////////////

const sockMerchant = (n, arr) => {
  let sock = {};
  for (var i = 0; i < n; i++) {
    let far = arr[i];
    sock[far] ? (sock[far] += 1) : (sock[far] = 1);
  }
  console.log(sock);
  let pairs = 0;
  for (let key in sock) {
    if (sock[key] > 1) pairs += Math.floor(sock[key] / 2);
  }
  return pairs;
};

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));

///////////////////////////////////////////////////////////////////////
function pageCount(n, p) {
  let start = Math.floor(p / 2);
  let end = Math.floor(n / 2) - Math.floor(p / 2);
  const min = Math.min(start, end);
  return min;
}

console.log(pageCount(6, 2));
////////////////////////////////////////////////////////////////////////
