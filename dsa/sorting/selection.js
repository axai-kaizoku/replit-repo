const arr = [5, 4, 3, 2, 1]

function selectionSort(arr) {
  const n = arr.length
  for (let i = 0; i <= n - 2; i++) {
    let mini = i
    for (let j = i; j <= n - 1; j++) {
      if (arr[j] < arr[mini]) {
        mini = j
      }
    }
    swap(arr, i, mini)
  }
}

function swap(arr, i, j) {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

selectionSort(arr)
console.log(arr)
