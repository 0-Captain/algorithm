class WeightedQuickUnion {
  constructor(size) {
    this.id = new Array(size).fill(0).map((_i, index) => index);
    this.sizeCount = new Array(size).fill(1);
  }

  find(a) {
    while (this.id[a] != a) {
      a = this.id[a];
    }
    return a;
  }

  union(a, b) {
    (a = this.find(a)), (b = this.find(b));
    if (this.sizeCount[a] >= this.sizeCount[b]) {
      this.id[b] = this.id[a];
      this.sizeCount[a] += this.sizeCount[b];
    } else {
      this.id[a] = this.id[b];
      this.sizeCount[b] += this.sizeCount[a];
    }
  }

  connect(a, b) {
    return this.find(a) == this.find(b);
  }
}

console.log();

export default WeightedQuickUnion;
