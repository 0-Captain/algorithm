/**
 * @description: 选择排序
 * @param {*} arr
 * @return {*}
 */
export function selection(arr) {
  for (let i = 0; i < arr.length; i++) {
    swap(i, getMinNumIndex(i));
  }

  function getMinNumIndex(start = 0) {
    let minIndex = start;
    for (let i = start; i < arr.length; i++) {
      if (arr[i] < arr[minIndex]) {
        minIndex = i;
      }
    }
    return minIndex;
  }

  function swap(i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  return arr;
}
