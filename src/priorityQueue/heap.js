/**
 * 优先队列：
 * 1. 有序列表：
 *  插入后将最大元素调整到一边，删除时直接删除最大的
 * 2. 无序列表
 *  插入时直接插入，删除时查找最大的元素并删除。
 * 3. 堆
 */

/**
 * @description: 堆
 * @param {*}
 * @return {*}
 */

class Heap {
  constructor(size) {
    this.heap = [];
    this.size = size;
    // if (!this.compare) {
    //   throw new Error("please implement method: compare");
    // }
  }
  // 插入一个值
  insert(val) {
    this.heap.push(val);
    this.swim();
    if (this.heap.length > this.size) {
      this.pop();
    }
  }

  // 弹出堆顶元素
  pop() {
    if (this.heap.length === 1) {
      return this.heap.pop();
    }
    const temp = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.sink();
    return temp;
  }

  // 上浮
  swim(k = this.heap.length - 1) {
    let parentIndex;
    while (k > 0 && this.compare(k, (parentIndex = (k - 1) >> 1))) {
      this.swap(parentIndex, k);
      k = parentIndex;
    }
  }

  // 下沉
  sink(k = 0) {
    let child;
    while ((child = 2 * k + 1) < this.heap.length) {
      if (child + 1 < this.heap.length && this.compare(child + 1, child))
        child++;
      if (this.compare(k, child)) break;
      this.swap(k, child);
      k = child;
    }
  }

  swap(i, j) {
    const temp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temp;
  }
  // 默认小根堆实现
  compare(i, j) {
    return this.heap[i] < this.heap[j]; // <就是小根堆 >就是大根堆
  }
}

export class MinHeap extends Heap {
  compare(i, j) {
    return this.heap[i] < this.heap[j]; // <就是小根堆 >就是大根堆
  }
}

export class MaxHeap extends Heap {
  compare(i, j) {
    return this.heap[i] > this.heap[j]; // <就是小根堆 >就是大根堆
  }
}
