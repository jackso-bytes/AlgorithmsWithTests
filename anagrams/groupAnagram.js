//Given an array of strings return the strings grouped by anagram
let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

const a = (strs) => {
  let ht = {};

  for (char of strs) {
    // sort for individual anagram
    let sorted = char.split("").sort().join("");
    // evaluate if anagram is in the hashtable
    if (ht[sorted]) {
      ht[sorted].push(char);
    } else {
      ht[sorted] = [char];
    }
  }

  return Object.values(ht);
};

console.log(a(strs));

module.exports = {
  f: a,
  i: strs,
};
