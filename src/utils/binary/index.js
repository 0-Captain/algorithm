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
