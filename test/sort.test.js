import { generateArray } from "./utils";
import { minHeapSort, maxHeapSort } from "../src/sort/heapSort";
import { selection } from "../src/sort/selection";
import { insertionSort } from "../src/sort/insertion";
import { shellSort } from "../src/sort/shellSort";

const testData = new Array(20).fill(generateArray(20));

const sortAlgorithmMap = {
  minHeapSort,
  maxHeapSort,
  selection,
  insertionSort,
  shellSort,
};

for (let [key, sort] of Object.entries(sortAlgorithmMap)) {
  test(key, () => {
    for (let arr of testData) {
      // 从小到大
      const standrad = [...arr].sort((a, b) => a - b);
      const answer = sort(arr);
      expect(answer.join()).toEqual(standrad.join());
    }
  });
}
