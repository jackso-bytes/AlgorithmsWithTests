const f = (arr) => {
  let output = [];
  for (let i = 0; i < arr.length - 3; arr++) {
    let right = arr.length - 1;
    let mid = Math.floor((left + right) / 2);
    if (arr[i] + arr[mid] + arr[right] === 0) {
      output.push([arr[i], arr[mid], arr[right]]);
    }
  }
  return output;
};

module.exports = f;
