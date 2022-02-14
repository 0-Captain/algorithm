import { generateArray } from "./utils";
import { minHeapSort, maxHeapSort } from "../src/sort/heapSort";
import { selection } from "../src/sort/selection";
import { insertionSort } from "../src/sort/insertion";
import { shellSort } from "../src/sort/shellSort";
import { mergeSort } from "../src/sort/mergeSort";
import { quickSort } from "../src/sort/quickSort";

const testData = new Array(100).fill(0).map(() => generateArray(1000));

const sortAlgorithmMap = {
  minHeapSort,
  maxHeapSort,
  selection,
  insertionSort,
  shellSort,
  mergeSort,
  quickSort,
};

for (let [key, sort] of Object.entries(sortAlgorithmMap)) {
  test(key, () => {
    for (let arr of testData) {
      // 从小到大
      const standrad = [...arr].sort((a, b) => a - b);
      const answer = sort([...arr]);
      expect(answer.join()).toEqual(standrad.join());
    }
  });
}
