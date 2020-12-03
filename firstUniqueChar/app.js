//Given a string return the first non repeating characters index. If it doesn't exist return -1

const input = 'aaabbbcccd';

const fuc = (input) => {
  //ht to count all instances of chars
  let ht = {};

  //first loop to count up all chars

  for (char of input) {
    if (ht[char]) {
      ht[char]++;
    } else {
      ht[char] = 1;
    }
  }

  //second loop to find first repeating char by comparing all our counters

  for (let i = 0; i < input.length; i++) {
    if (ht[input[i]] === 1) {
      return i;
    } else {
      continue;
    }
  }

  //once we have checked the whole string we can safely account for the edge case of no unique chars

  return -1;
};

module.exports = {
  f: fuc,
  i: input,
};

console.log(fuc(input));
