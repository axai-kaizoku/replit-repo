/**
 * Rotate arr in spiral - Spiral Matrix
 *
 */
function rotateArr(mat) {
  const m = mat.length;
  const n = mat[0].length;
  const ans = [];
  let left = 0,
    right = n - 1;
  let top = 0,
    bottom = m - 1;

  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) {
      ans.push(mat[top][i]);
    }
    top++;
    for (let i = top; i <= bottom; i++) {
      ans.push(mat[i][right]);
    }
    right--;
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        ans.push(mat[bottom][i]);
      }
      bottom--;
    }
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        ans.push(mat[i][left]);
      }
      left++;
    }
  }

  return ans;
}

const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(rotateArr(arr));
