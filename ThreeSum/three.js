const f = (arr) => {
  arr.sort();
  let output = [];
  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1;
    let right = arr.length - 1;
    if (i > 0 && arr[i] === arr[i - 1]) continue;
    while (left < right) {
      let total = arr[i] + arr[left] + arr[right];
      if (total === 0) {
        output.push([arr[i], arr[left], arr[right]]);
        left = i + 1;
        right = arr.length - 1;
      }
      if (total > 0) {
        right--;
      } else {
        left++;
      }
    }
  }
  console.log(output);
  return output;
};

module.exports = f;
