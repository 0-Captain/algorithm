/**
 * @description: 插入排序
 * @param {Array} arr
 * @return {*}
 */
export function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] <= arr[j + 1]) {
        break;
      }
      swap(j, j + 1);
    }
  }

  return arr;

  function swap(i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}
