import { MinHeap, MaxHeap } from "../priorityQueue/heap.js";

export function minHeapSort(array) {
  const minHeap = new MinHeap(array.length);
  array.forEach((item) => {
    minHeap.insert(item);
  });
  //从小到大
  return new Array(array.length).fill(0).map(() => minHeap.pop());
}

export function maxHeapSort(array) {
  const maxHeap = new MaxHeap(array.length);
  array.forEach((item) => {
    maxHeap.insert(item);
  });
  // 从大到小
  return new Array(array.length).fill(0).map(() => maxHeap.pop());
}
