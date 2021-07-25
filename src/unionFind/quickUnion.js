class UnionFind {
  constructor(size) {
    this.id = new Array(size).fill(0).map((_i, index) => index);
  }

  find(x) {
    if (this.id[x] == x) {
      return x;
    } else {
      return this.find(this.id[x]);
    }
  }

  union(a, b) {
    this.id[this.find(a)] = this.id[this.find(b)];
  }

  connect(a, b) {
    return this.find(a) == this.find(b);
  }
}

export default UnionFind;
