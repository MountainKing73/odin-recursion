function fibs(num) {
  if (num < 1) {
    return [];
  } else if (num === 1) {
    return [0];
  }

  let arr = [0, 1];

  for (var i = 2; i < num; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }

  return arr;
}

function fibsRec(num) {
  if (num < 1) {
    return [];
  } else if (num === 1) {
    return [0];
  }

  if (num === 2) {
    return [0, 1];
  }

  let curr = fibsRec(num - 1);
  // This is doing the previous 2, but show 3 and 2 due to index starting at 0
  curr.push(curr[num - 3] + curr[num - 2]);
  return curr;
}

console.log("fibs(8) = " + fibs(8));
console.log("fibsRec(8) = " + fibsRec(8));
