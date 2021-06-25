/**
 * @description: quick-find算法
 *
 * 思路：
 * 使用数组id[x]来表示连通分量x指向id[x]，如果id[x] == x说明这个连通分量指向自己，如果id[x] == y说明连通分量x指向y。这里把所有可以连通的分量看作一个集合，将这个集合中所有的连通的分量都指向同一个位置，以此来表示他们在同一个集合，也就是id[]中所有值相同的分量在同一个集合。这样一来，只要两个连通分量指向同一个地方那就代表他们在同一个集合，说明二者可以连通，否则不连通。
 * 这套思路的关键在于集合的划分，具体做法是：每新增一对连通分量[a,b]就要将a所在集合与b所在的集合合并，也就是id数组中所有的id[a] = id[b] 或者id[b] = id[a]，这就是union的工作。其中find就是a => id[a]的过程，因为集合是扁平的，所以不需要递归查找。
 *
 * 特点：时间复杂度较高。
 *  find：O(1),
 *  union: O(n), n为总数据量
 *  总体：O(n^2)
 *
 * @param {*} size: 总数据量
 * @return {*}
 */
class UnionFind {
  constructor(size) {
    this.id = new Array(size).fill(0).map((_i, index) => index);
  }

  find(item) {
    return this.id[item];
  }

  union(a, b) {
    const parentA = this.find(this.id[a]);
    if (parentA === this.find(this.id[b])) return;
    this.id = this.id.map((item) => (item === parentA ? this.id[b] : item));
  }

  connect(a, b) {
    return this.id[a] === this.id[b];
  }

  size() {
    return new Set(this.id).size;
  }
}

export default UnionFind;
