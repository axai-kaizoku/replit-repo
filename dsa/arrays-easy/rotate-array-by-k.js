function rotate(arr, d) {
  const n = arr.length
  d = d % n
  reverse(arr, 0, d - 1)
  reverse(arr, d, n - 1)
  reverse(arr, 0, n - 1)
}

function reverse(arr, start, end) {
  while (start < end) {
    swap(arr, start, end)
    start++
    end--
  }
}

function swap(arr, i, j) {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

function firstApproach(arr, k) {
  const n = arr.length
  k = k % n
  const res = []
  for (let i = 0; i < n; i++) {
    res[(i + k) % n] = arr[i]
  }

  return res
}

const arr = [1, 2, 3, 4, 5, 6, 7]
rotate(arr, 2)
console.log(arr)
