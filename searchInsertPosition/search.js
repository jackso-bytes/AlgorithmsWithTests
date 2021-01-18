const f = (target, arr) => {
  if (typeof arr !== "object" || typeof target !== "number") return null;

  let left = 0,
    right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (target === arr[mid]) return mid;
    if (target > arr[mid]) left = mid + 1;
    if (target < arr[mid]) right = mid - 1;
  }
  return left;
};

module.exports = {
  f: f,
};
