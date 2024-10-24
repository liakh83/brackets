module.exports = function check(str, bracketsConfig) {
  // Pair bracket configurations and create a new array
  let createPairs = bracketsConfig.map((pair) => pair.join(""));

  //  Initialize the variable that will save the previous length of the string
  let previousLength = -1;

  //Find matches of brackets with pair and remove them from the string
  while (str.length !== previousLength) {
    previousLength = str.length;

    createPairs.forEach((pair) => {
      str = str.replace(pair, "");
    });
  }
  // If the string is completely empty all brackets have been removed correctly
  return str.length === 0;
};
