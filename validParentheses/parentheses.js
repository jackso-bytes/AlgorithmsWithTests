const vp = (inp) => {
  //handle edge case that we're passed something that isn't a str
  if (typeof inp !== "string") {
    return false;
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

  for (let i = 0; i < inp.length; i++) {
    if (vp[inp[i]]) {
      stack.push(inp[i]);
    } else if (vp[stack.pop()] !== inp[i]) {
      return false;
    }
  }
  return true;
};

module.exports = {
  f: vp,
};
