const f = (target, arr) => {
  if (typeof arr !== "object" || typeof target !== "number") return null;

  let left = 0,
    right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let midVal = arr[mid];
    if (target === midVal) {
      return mid;
    } else if (target > midVal) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left;
};

module.exports = {
  f: f,
};
