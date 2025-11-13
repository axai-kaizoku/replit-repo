/**
 * merge intervals
 * optimal
 */
var merge = function (intervals) {
  const ans = [],
    n = intervals.length;
  intervals.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  for (let i = 0; i < n; i++) {
    if (ans.length === 0 || intervals[i][0] > ans[ans.length - 1][1]) {
      ans.push(intervals[i]);
    } else {
      ans[ans.length - 1][1] = Math.max(
        ans[ans.length - 1][1],
        intervals[i][1]
      );
    }
  }
  return ans;
};

/**
 * merge intervals
 * brute
 */
var mergeBrute = function (intervals) {
  const ans = [],
    n = intervals.length;
  intervals.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  for (let i = 0; i < n; i++) {
    let start = arr[i][0];
    let end = arr[i][1];
    if (ans.length !== 0 && end <= ans[ans.length - 1][1]) {
      continue;
    }
    for (let j = i + 1; j < n; j++) {
      if (arr[j][0] <= end) {
        end = Math.max(end, arr[j][1]);
      } else break;
    }
    ans.push([start, end]);
  }
  return ans;
};

const arr = [
  [1, 3],
  [2, 6],
  [8, 9],
  [9, 11],
  [8, 10],
  [2, 4],
  [15, 18],
  [16, 17],
];
console.log(merge(arr));
