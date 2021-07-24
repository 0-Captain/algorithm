import QuickFind from "../src/unionFind/qucikFind";
import QuickUnion from "../src/unionFind/quickUnion.js";
import WeightedQuickUnion from "../src/unionFind/weightedQuickUnion";

const connectData = {
  size: 10,
  data: [
    [4, 3],
    [3, 8],
    [6, 5],
    [9, 4],
    [2, 1],
    [8, 9],
    [5, 0],
    [7, 2],
    [6, 1],
    [1, 0],
    [6, 7],
  ],
  answer: {
    quickFind: [1, 1, 1, 8, 8, 1, 1, 1, 8, 8],
    quickUnion: [1, 1, 1, 8, 3, 0, 5, 1, 8, 8],
    weightedQuickUnion: [6, 2, 6, 4, 4, 6, 6, 2, 4, 4],
  },
};

test("测试并查集: quick-find", () => {
  const uf = new QuickFind(connectData.size);
  connectData.data.forEach((item) => {
    uf.union(...item);
  });
  expect(uf.id).toEqual(connectData.answer.quickFind);
});

test("测试并查集: quick-union", () => {
  const uf = new QuickUnion(connectData.size);
  connectData.data.forEach((item) => {
    uf.union(...item);
  });
  expect(uf.id).toEqual(connectData.answer.quickUnion);
});

test("测试并查集: weighted-quick-union", () => {
  const uf = new WeightedQuickUnion(connectData.size);
  connectData.data.forEach((item) => {
    uf.union(...item);
  });
  expect(uf.id).toEqual(connectData.answer.weightedQuickUnion);
});
