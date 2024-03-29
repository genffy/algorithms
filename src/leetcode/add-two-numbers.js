/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function buildListNode(arr) {
  // const obj = new ListNode();
  const val = arr[0];
  const rest = arr.slice(1);
  // if (val != undefined) {
  //   obj.val = val;
  //   obj.next = rest.length > 0 ? buildListNode(rest) : null;
  // }
  return new ListNode(val, rest.length > 0 ? buildListNode(rest) : undefined);
}
function iterListNode(ll) {
  const arr = [];
  let course = ll;
  let hasNext = true;
  while (hasNext) {
    arr.push(course.val);
    hasNext = course.next !== null;
    course = course.next;
  }
  return arr;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
export default function addTwoNumbers(l1, l2) {
  let arr1 = iterListNode(l1);
  let arr2 = iterListNode(l2);
  if (arr1.length < arr2.length) {
    // exchange
    const tArr = arr1;
    arr1 = arr2;
    arr2 = tArr;
  }
  const arr = [];
  arr1.forEach((val, idx) => {
    const val2 = arr2[idx];
    let res = val;
    if (val2 !== undefined) {
      res += val2;
    }
    if (arr[idx] !== undefined) {
      res += arr[idx];
      // replace extra push
      arr[idx] = res % 10;
    } else {
      arr.push(res % 10);
    }
    if (res >= 10) {
      // extra push
      arr.push(1);
    }
  });
  return buildListNode(arr);
}
