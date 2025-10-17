/**
 * Pascal's Triangle problem
 */

/**
 * 1. Given, R = 5,C = 3, print element at that place
 * ans = 6
 */
function pascal1(r, c) {
  return nCr(r - 1, c - 1);
}

// console.log(pascal1(5,3))

/**
 * 2. Print any nth row of pascal's triangle
 * n = 5
 * [1,4,6,4,1]
 */
/**
 * Brute approach (2nd q)
 */
function pascal2(n) {
  const ans = [];
  for (let c = 1; c <= n; c++) {
    ans.push(nCr(n - 1, c - 1));
  }
  return ans;
}

function pascal2Optimal(n) {
  const ans = [];
  let res = 1;
  ans.push(res);
  for (let i = 1; i < n; i++) {
    res = res * (n - i);
    res = res / i;
    ans.push(res);
  }
  return ans;
}

// console.log(pascal2Optimal(5));

/**
 * 3. Print entire pascal triangle of N row
 * n = 5; [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
 */
/**
 * Brute approach (3rd question)
 */
function pascal3(n) {
  const ans = [];
  for (let i = 1; i <= n; i++) {
    const temp = [];
    for (let j = 1; j <= i; j++) {
      temp.push(nCr(i - 1, j - 1));
    }
    ans.push(temp);
  }

  return ans;
}

/**
 * Optimal approach (3rd question)
 */
function pascal3Optimal(n) {
  const ans = [];
  for (let i = 1; i <= n; i++) {
    ans.push(pascal2Optimal(i));
  }

  return ans;
}

console.log(pascal3Optimal(6));

/**
 * Base nCr function for pascal triangle
 */
function nCr(n, r) {
  let res = 1;
  for (let i = 0; i < r; i++) {
    res = res * (n - i);
    res = res / (i + 1);
  }

  return res;
}
