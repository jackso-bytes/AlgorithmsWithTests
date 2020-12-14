let inputs = ["Tom", "sapphire", "Syria", "red", "russian", "commonwealth"];

const sWords = (inputs) => {
  inputs.forEach((w, i) => {
    let fl = w.match(/\b\w/g);

    if (fl[0].toLowerCase() === "s") {
      inputs.splice(i, 1);
    }
  });
  return inputs;
};

console.log(sWords(inputs));

module.exports = {
  f: sWords,
};
