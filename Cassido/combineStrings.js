
const combineStrings = (list, n) => {
  let joinedString = "";
  let newList = [];
  let j=0;

  for (var i = 0; i < list.length; i++) {
    if (
      list[i].length <= n &&
      joinedString.length <= n + 1 &&
      joinedString.length + list[i].length <= n
    ) {
       

      joinedString = joinedString + list[i] + " ";
        newList[j]= joinedString.trim();
      
    } else {
      joinedString = "";
      j++
      joinedString = joinedString + list[i] + " ";
      newList[j]=joinedString.trim();
    }
  }

  console.log(newList, "Max Length: "+n);
};

const testCases=()=>{
    combineStrings(["a", "b", "c", "d", "e", "f", "g"],5);
    combineStrings(["a", "b", "c", "d", "e", "f", "g"],7);
    combineStrings(["alpha", "beta", "gamma", "delta", "epsilon"],20);
    combineStrings(["alpha", "beta", "gamma", "delta", "epsilon"],12);

}

testCases()