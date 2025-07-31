const arr = [
  0, 1, 2, 0, 2, 1, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1,
  2, 0, 1, 2,
]

/**
 * Optimal
 * Dutchs High Flag Algorithm
 */
function sortZerosOnesTwos(arr) {}

/**
 * Better
 */
function sortZerosOnesTwos2(arr) {
  const n = arr.length
  let count0 = 0,
    count1 = 0,
    count2 = 0
  for (let i = 0; i < n; i++) {
    if (arr[i] === 0) {
      count0++
    } else if (arr[i] === 1) {
      count1++
    } else {
      count2++
    }
  }

  for (let i = 0; i < count0; i++) {
    arr[i] = 0
  }

  for (let i = count0; i < count0 + count1; i++) {
    arr[i] = 1
  }

  for (let i = count0 + count1; i < n; i++) {
    arr[i] = 2
  }
}

/**
 * Brute
 */
function sortZerosOnesTwos1(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i
    while (j > 0 && arr[j - 1] > arr[j]) {
      swap(arr, j, j - 1)
      j--
    }
  }
}

function swap(arr, i, j) {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

sortZerosOnesTwos(arr)
console.log(arr)
