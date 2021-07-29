function merge(arr1, arr2) {
  let retArr = [];
  let x = 0
  let y = 0

  while (x < arr1.length && y < arr2.length) {
    if (arr1[x] < arr2[y]) {
      retArr.push(arr1[x]);
      x++;
    } else {
      retArr.push(arr2[y]);
      y++;
    }
  }
  while (x < arr1.length) {
    retArr.push(arr1[x]);
    x++;
  }
  while (y < arr2.length) {
    retArr.push(arr2[y]);
    y++;
  }
  return retArr;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2)
  // let first = arr.splice(0, mid)
  // if (first.length > 1) mergeSort(first)
  // let second = arr.splice(mid)
  // if (second.length > 1) mergeSort(second)
  let first = mergeSort(arr.slice(0, mid))
  let second = mergeSort(arr.slice(mid))
  return merge(first, second)
}

module.exports = { merge, mergeSort };