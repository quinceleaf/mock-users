module.exports = function randomWeightedSelection(arr) {
  let total = 1;
  for (let i = 0; i < arr.length; ++i) {
    total += arr[i][1];
  }

  const threshold = Math.floor(Math.random() * total);

  total = 0;
  for (let i = 0; i < arr.length; ++i) {
    total += arr[i][1];

    if (total >= threshold) {
      return arr[i][0];
    }
  }
};
