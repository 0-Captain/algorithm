export function mergeSort(arr, l = 0, r = arr.length - 1) {
  if (r == l) {
    return arr;
  }
  const mid = (l + r) >> 1;
  mergeSort(arr, l, mid);
  mergeSort(arr, mid + 1, r);

  const temp = [];
  let lp = l,
    rp = mid + 1;
  while (lp <= mid && rp <= r) {
    if (arr[lp] < arr[rp] && lp <= mid) {
      temp.push(arr[lp]);
      lp++;
    }
    if (arr[lp] >= arr[rp] && rp <= r) {
      temp.push(arr[rp]);
      rp++;
    }
  }

  copyArr(
    [...temp, ...arr.slice(lp, mid + 1), ...arr.slice(rp, r + 1)],
    arr,
    l,
    r
  );
  return arr;
}

function copyArr(source, target, start, end) {
  for (let i = start; i <= end; i++) {
    target[i] = source[i - start];
  }
}
