const f = (arr, target) => {
  let ht = {};
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    let want = target - num;
    if (want in ht) {
      return [ht[want], i];
    } else {
      ht[num] = i;
    }
  }
};

module.exports = f;
