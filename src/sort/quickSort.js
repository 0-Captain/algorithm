export function quickSort(arr) {
  sort(0, arr.length - 1);
  return arr;

  function sort(start, end) {
    if (start >= end) {
      return;
    }
    const flag = partition(start, end);
    sort(start, flag - 1);
    sort(flag + 1, end);
  }

  /**
   * @description: 区间[l,r]中以最后一个元素为标准，将区间中的所有元素划分为大于和小于此标准的两拨。
   * @param {*} l
   * @param {*} r
   * @return {*}
   */
  function partition(l, r) {
    const flag = r;
    while (l < r) {
      while (l < r && arr[l] < arr[flag]) {
        l++;
      }
      while (l < r && arr[r] >= arr[flag]) {
        r--;
      }
      swap(l, r);
    }
    swap(flag, r);
    return r;
  }

  function swap(i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}

/**
 * @description: 更简洁的写法
 */
export function quickSort2(arr, start = 0, end = arr.length - 1) {
  if (start >= end) return;
  const flag = arr[start];
  let l = start,
    h = end;
  while (l < h) {
    while (l < h && arr[h] >= flag) {
      h--;
    }
    arr[l] = arr[h];
    while (l < h && arr[l] <= flag) {
      l++;
    }
    arr[h] = arr[l];
  }
  arr[l] = flag;

  quickSort2(arr, start, l - 1);
  quickSort2(arr, l + 1, end);
  return arr;
}

/**
 * @description: 三向切分的快速排序
 */
export function quick3Way(arr = [], start = 0, end = arr.length - 1) {
  if (start >= end) return;
  // 其中j表示当前正在比较的数，i表示左侧指针，k表示右侧指针。
  // [start，i-1]表示小于flag的数, [i,j]表示等于flag的数，[k+1, end]表示大于flag的数.
  let i = start,
    j = i + 1,
    k = end;
  const flag = arr[start];
  while (j <= k) {
    if (arr[j] > flag) {
      swap(j, k--);
    } else if (arr[j] < flag) {
      swap(i++, j++);
    } else {
      j++;
    }
  }

  quick3Way(arr, start, i - 1);
  quick3Way(arr, k + 1, end);
  return arr;

  function swap(i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}
