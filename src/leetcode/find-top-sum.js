/**
 * 找出数组中第k大和第m大的数字相加之和
 * 说明：实现一个方法，找出数组中第k大的和第m大的数字相加之和
 * 示例：
 *   let arr = [1,2,4,4,3,5], k = 2, m = 4
 *   findTopSum(arr, k, m); // 第2大的数是4，出现2次，第4大的是2，出现1次，所以结果为10
 */
export default function findTopSum(arr, k, m) {
  // 去重
  // 排序 max(k,m)，top-k 问题？
  // 取数求和
  // 方法一
  const arrV = Array.from([...new Set(arr)]).sort((a, b) => b - a);
  const len = arrV.length;
  if (k > len || m > len) {
    return 0;
  }
  const kVal = arrV[k - 1];
  const mVal = arrV[m - 1];
  let total = 0;
  arr.forEach((v) => {
    if (v === kVal || v === mVal) {
      total += v;
    }
  });
  // TODO 方法二
  return total;
}

const val = findTopSum([1, 2, 4, 4, 3, 5], 2, 4);
console.log('val', val);
