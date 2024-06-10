let arr = [4, 6, 12, 4];
let sum = 0;
let out = arr.reduce(function (total, ele) {
  return total + ele;
});

console.log(out);

arr.reduce(function (total, currentValue, currentIndex, arr) {}, initialValue);
