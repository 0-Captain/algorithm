# 并查集

### 解决哪些问题

主要解决动态连通性问题：

- 网络中的两个端口是否连通
- 判断两个元素是否处于相同的集合

在知道网络中每个元素是否连通的关系后，如何找出任意两点是否连通？

### 思路

1. 将元素划分到不同的集合，如果两个元素处于同一个集合，那么两个元素连通，否则不连通。
2. 用数组索引 x 表示元素，索引对应的值 id[x]表示元素所处的集合，数组中所有相同的值所对应的元素处于同一集合。
3. 初始化数组时每个元素索引与对应的值相等。

#### quick-find

每次得到 x，y 两点的关系后，将 x 点所属集合的所有元素并入 y 所在的集合，即数组中所有的 id[x]的值替换为 id[y]的值。

因为在查询元素所属集合的时候直接可以找到，即 id[x]，所以成为 quick-find。此时时间复杂度

- find: O(1)
- union: O(n)

#### quick-union

每次得到 x,y 两点的关系后，查询 x,y 各自所属集合，将 x,所属集合指向 y 所属集合。查询的过程为：每次将 id[x]作为下一个索引，知道某个元素的索引与其值相同说明这个元素为这个集合的顶部元素。

不同于 quick-find 中的扁平化集合，quick-union 集合层次较深，类似于一棵多叉树，此时相当于用一个数组表示一片森林。

时间复杂度：

- find: O(n)
- union: O(n)

看起来 quick-union 算法的在 union 过程中的时间复杂度与 quick-find 算法相同，但是 quick-find 算法的 union 时间复杂度不管输入情况如何都是 O(n),而 quick-union 算法在最坏情况下才是 O(n), 所以平均时间复杂度要低于 quick-find