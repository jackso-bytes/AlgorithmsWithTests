const f = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
      if (target === arr[left] + arr[right]) return [left, right];
      if (left + 1 === right && left < arr.length - 1) {
        left++;
        right = arr.length - 1;
      } else {
        right--;
      }
    }
  }

  return "no sums found";
};

module.exports = f;
