let inputs = ["Tom", "sapphire", "Syria", "red", "russian", "commonwealth"];

const sWords = (inputs) => {
  return inputs.filter((w) => w.charAt(0).toLowerCase() !== "s");
};

console.log(sWords(inputs));

module.exports = {
  f: sWords,
};
