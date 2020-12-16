let size1 = [1];
let size3 = [1, 2, 3];
let size4 = [1, 2, 3, 4];

const fn = (num, arr) => {
  if (arr.length === 0) return -1;

  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === num) return mid;
    if (num > arr[mid]) left = mid + 1;
    if (num < arr[mid]) right = mid - 1;
  }
  return -1;
};

const recursiveBin = (num, arr) => {};

module.exports = {
  f: fn,
  f2: recursiveBin,
  i1: size1,
  i2: size3,
  i3: size4,
};
