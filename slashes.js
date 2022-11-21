const oddSlashes = (input) => {
  let back = 0;
  let spaces = 0; // handle offset

  for (var i = 0; i < input.length; i++) {
    if (input[i] === "/") back += 1;
  }
  console.log(input.length);
  for (var i = 0; i < input.length; i++) {
    if (input[i] === "\\") {
      console.log(" ".repeat(back + spaces) + input[i]);
      spaces += 1;
    } else {
      spaces -= 1;
      console.log(" ".repeat(back + spaces) + input[i]);
    }
  }
};

const evenSlashes = (input) => {
  let back = 0;
  let spaces = 0;
  input = input.replace(/\\/g, "\\\\");
  for (var i = 0; i < input.length; i++) {
    if (input[i] === "/") back += 1;
  }
  console.log(input.length);
  for (var i = 0; i < input.length; i++) {
    if (input[i] === "\\") {
      console.log(" ".repeat(back + spaces) + input[i]);
      spaces += 1;
    } else {
      spaces -= 1;
      console.log(" ".repeat(back + spaces) + input[i]);
    }
  }
};

const testCases = () => {
  evenSlashes(`\\\\////////\\`);
  oddSlashes(String.raw`/////\\\\\\///\/\/\/\\\\`); ////////// ?  odd n of backslashes seem to only work with the String.raw
};

testCases();
