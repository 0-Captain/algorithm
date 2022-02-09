export function shellSort(arr) {
  const len = arr.length;
  // 生成递增序列，不同的序列性能不同
  const seq = [len >> 1];
  while (seq[seq.length - 1] >= 2) {
    seq.push(seq[seq.length - 1] >> 1);
  }
  for (const step of seq) {
    for (let i = 0; i < len; i++) {
      for (let j = i - step; j >= 0; j -= step) {
        if (arr[j] > arr[j + step]) {
          swap(j, j + step);
        }
      }
    }
  }
  return arr;

  function swap(i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}
