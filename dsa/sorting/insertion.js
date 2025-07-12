let arr = [3, 4, 5, 1, -3, 6, 20, 2, 1]

function insertionSort(arr) {
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

insertionSort(arr)

console.log(arr)
