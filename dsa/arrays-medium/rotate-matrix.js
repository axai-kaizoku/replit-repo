const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

/**
 * Optimal
 * Inplace - no extra array
 */
function rotateMatrix(mat) {
  const n = mat.length;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const temp = mat[i][j];
      mat[i][j] = mat[j][i];
      mat[j][i] = temp;
    }
  }

  for (let i = 0; i < n; i++) {
    reverse(mat[i], 0, n - 1);
  }

  return mat;
}

function reverse(arr, start, end) {
  while (start <= end) {
    swap(arr, start, end);
    start++;
    end--;
  }
}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

/**
 * Better
 */
function rotateMatrix1(matrix) {
  const n = matrix.length;
  const temp = [];
  for (let i = 0; i < n; i++) {
    temp.push([]);
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      temp[j][n - 1 - i] = matrix[i][j];
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      matrix[i][j] = temp[i][j];
    }
  }

  return matrix;
}

function printMat(mat) {
  for (let i = 0; i < mat.length; i++) {
    console.log(mat[i]);
  }
}

printMat(rotateMatrix(matrix));
