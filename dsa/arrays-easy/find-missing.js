const arr = [3, 0, 1, 4]

function findMissing(nums) {
  const n = nums.length
  let i = 0
  while (i < n) {
    let current = nums[i]
    if (nums[i] < n && nums[i] !== nums[current]) {
      swap(nums, i, current)
    } else {
      i++
    }
  }

  for (let j = 0; j < n; j++) {
    if (nums[j] != j) {
      return j
    }
  }

  return n
}

function swap(arr, i, j) {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

const ans = findMissing(arr)
console.log(ans)
