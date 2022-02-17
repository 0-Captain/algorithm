import { generateArray } from "./utils";
import { heapSort } from "../src/sort/heapSort";
import { selection } from "../src/sort/selection";
import { insertionSort } from "../src/sort/insertion";
import { shellSort } from "../src/sort/shellSort";
import { mergeSort } from "../src/sort/mergeSort";
import { quickSort, quickSort2, quick3Way } from "../src/sort/quickSort";

const testData = new Array(10)
  .fill(0)
  .map(() => generateArray(Math.ceil(Math.random() * 10000)));

const sortAlgorithmMap = {
  heapSort,
  selection,
  insertionSort,
  shellSort,
  mergeSort,
  quickSort,
  quickSort2,
  quick3Way,
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
