import UnionFind from "../src/unionFind/qucikFind";

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
  answer: [1, 1, 1, 8, 8, 1, 1, 1, 8, 8],
};

test("测试并查集", () => {
  const uf = new UnionFind(connectData.size);
  connectData.data.forEach((item) => {
    uf.union(...item);
  });
  expect(uf.id).toEqual(connectData.answer);
});
