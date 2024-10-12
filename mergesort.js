function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const mid = Math.round(array.length / 2);

  let left = array.slice(0, mid);
  let right = array.slice(mid);

  left = mergeSort(left);
  right = mergeSort(right);

  let result = [];
  while (left.length > 0 || right.length > 0) {
    if (left.length === 0) {
      result = result.concat(right);
      right = [];
    } else if (right.length === 0) {
      result = result.concat(left);
      left = [];
    } else if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  return result;
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));
