/**
 * @description: 将数组中的每一项转化为固定位数的二进制数组
 * @param {number[]} arr: 数组
 * @param {number} x: 位数
 * @return {string[]}
 */
export function toBinary(arr, x) {
  return arr.map((item) => {
    const binaryString = item.toString(2);
    return new Array(x - binaryString.length)
      .fill(0)
      .concat(binaryString)
      .join("");
  });
}

/**
 * @description: 数组 -> countMap
 * @param {*} Array
 * @return {*} countMap
 */
export function getCountMap(arr) {
  const map = {};
  for (let i = 0; i < arr.length; i++) {
    const cur = arr[i];
    map[cur] = (map[cur] || 0) + 1;
  }
  return map;
}
