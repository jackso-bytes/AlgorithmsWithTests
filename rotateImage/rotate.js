let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const f = (arr) => {
  arr.reverse();
  arr.forEach((element, index) => {
    for (let i = index + 1; i < element.length; i++) {
      let store = arr[index][i];
      arr[index][i] = arr[i][index];
      arr[i][index] = store;
    }
  });
  return arr;
};

f(arr);

module.exports = f;
