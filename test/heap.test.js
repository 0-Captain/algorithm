import { minHeapSort, maxHeapSort } from "../src/heapSort";
import { generateArray } from "./utils";

const testData = new Array(20).fill(generateArray(100));

test("minHeapSort", () => {
  for (let arr of testData) {
    // 从小到大
    const answer = [...arr].sort((a, b) => a - b);
    const minHeapSortAnswer = minHeapSort(arr);
    expect(minHeapSortAnswer).toEqual(answer);
  }
});

test("maxHeapSort", () => {
  for (let arr of testData) {
    // 从小到大
    const answer = [...arr].sort((a, b) => b - a);
    const maxHeapSortAnswer = maxHeapSort(arr);
    expect(maxHeapSortAnswer).toEqual(answer);
  }
});
