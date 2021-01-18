const vp = (inp) => {
  //handle edge case that we're passed something that isn't a str
  if (typeof inp !== "string") {
    if (inp.length) return false;
  } else if (
    inp.includes("{") === false &&
    inp.includes("(") === false &&
    inp.includes("[") === false
  ) {
    return false;
  }

  let stack = [];

  let vp = {
    "[": "]",
    "(": ")",
    "{": "}",
  };

  for (char of inp) {
    if (vp[char]) {
      stack.push(char);
    } else if (vp[stack.pop()] !== char) {
      return false;
    }
  }
  if (stack.length) return false;
  return true;
};

module.exports = {
  f: vp,
};
