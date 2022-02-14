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
