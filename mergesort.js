// merge sort
// steps:
// sort left half
// sort right half
// merge halves

function mergeSort(array) {
  // if array < 2 return (no sorting needed)
  if (array.length < 2) return [array[0]];
  // else, split in half
  let middle = Math.floor((array.length) / 2);
  // left half
  let left = mergeSort(array.slice(0, middle));
  // right half
  let right = mergeSort(array.slice(middle));
  // create new return array
  let returnArr = [];
  let totalLength = left.length + right.length;
  // merge
  for (let i = 0; i < totalLength; i++) {
    if (left[0] < right[0] || right.length === 0) {
      returnArr.push(left.shift());
    } else {
      returnArr.push(right.shift());
    }
  }

  return returnArr;
}

let test = mergeSort([1,2,34,600,20,4,18,564,1681,45,3,19,16,5]);
console.log(test);