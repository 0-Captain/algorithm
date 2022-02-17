class MinHeap {
  /**
   * 空出第一个元素，方便计算父子元素相对位置;
   * parent = i >> 1;
   * children = [i*2, i*2+1];
   */
  arr = [0]; // private

  size = 0;

  constructor(arr) {
    const len = arr.length;
    arr.unshift(0);
    this.arr = arr;
    this.size = len;

    for (let i = len >> 1; i > 0; i--) {
      this.sink(i);
    }
  }

  pop() {
    this.size--;
    this.swap(1, this.size + 1);
    this.sink(1);
    return this.arr[this.size + 1];
  }

  swim(i) {
    while (this.less(i, i >> 1)) {
      this.swap(i, i >> 1);
    }
  }

  sink(i) {
    let minChild;
    while (
      (i * 2 + 1 <= this.size &&
        this.less(
          (minChild = this.less(i * 2, i * 2 + 1) ? i * 2 : i * 2 + 1),
          i
        )) ||
      (i * 2 == this.size && this.less(i * 2, i) && (minChild = i * 2))
    ) {
      this.swap(i, minChild);
      i = minChild;
    }
  }

  swap(i, j) {
    const arr = this.arr;
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  less(i, j) {
    return this.arr[i] < this.arr[j];
  }
}

export function heapSort(arr) {
  const minHeap = new MinHeap(arr);
  while (minHeap.size) {
    minHeap.pop();
  }
  return arr.reverse().slice(0, -1);
}
