const vp = (i) => {
  //handle edge case that we're passed something that isn't a str
  if (typeof i !== "string") {
    return false;
  } else if (
    i.includes("{") === false &&
    i.includes("(") === false &&
    i.includes("[") === false
  ) {
    return false;
  }
};

module.exports = {
  f: vp,
};
