//// FREQUENCY COUNTER PATTERN

function validAnagram(first, second) {
  if (first.length !== second.length) return false;

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
    // lookup[first[i]] => lookup[letter]   as letter === first[i]
    // word  = aaz
    // the condithion
    // i=0 lookup.a ?
    // i=1 lookup.a ?
    // i=2 lookup.z ?
    // if  lookup.a ? lookup.a +1 : lookup.a=1
    // if { a:1 }     ## a++ => {a:2}
    // if {  } || { ya3ny a=0 masalan}     ##  => {a:1}
  }
  console.log(lookup); /// outputs { a:2, z:1}

  for (let j = 0; j < second.length; j++) {
    let letter = second[j];
    if (!lookup[letter]) return false;
    // letter from second string is not in lookup
    // if letter does not exist in first word || in the lookup object  OR == 0 returns false

    lookup[letter] -= 1;
  }
  console.log(lookup); // should return zero props {a:0,z:0}
  return true;
}

console.log(validAnagram("aaz", "zza")); // should return false

// console.log(validAnagram("anagrams", "nagarams")); // should return true
