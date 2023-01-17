//// FREQUENCY COUNTER PATTERN

function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  console.log(lookup);

  for (let j = 0; j < second.length; j++) {
    let letter = second[j];
    if (!lookup[letter]) {
      // letter from second string is not in lookup
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
}

console.log(validAnagram("aaz", "zza")); // should return false

console.log(validAnagram("anagrams", "nagarams")); // should return true
